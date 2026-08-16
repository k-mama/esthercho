import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, ".reports", "cms-poc", "sveltia");
const BASE_URL = process.env.SVELTIA_POC_URL ?? "http://127.0.0.1:4181/admin/";

await mkdir(OUTPUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
let result = {
  generatedAt: new Date().toISOString(),
  url: BASE_URL,
  success: false,
  httpStatus: null,
  pageTitle: null,
  onboardingClicked: false,
  visibleStoryLabel: false,
  containsConfigError: false,
  bodyTextSample: "",
  htmlSample: "",
  consoleErrors: [],
  requestFailures: [],
  screenshot: null,
  failure: null,
};

try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    colorScheme: "light",
    locale: "en-US",
  });
  const page = await context.newPage();

  page.on("console", (message) => {
    if (message.type() === "error") result.consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => result.consoleErrors.push(error.message));
  page.on("requestfailed", (request) => {
    result.requestFailures.push({
      url: request.url(),
      resourceType: request.resourceType(),
      errorText: request.failure()?.errorText ?? null,
    });
  });

  try {
    const response = await page.goto(BASE_URL, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });

    result.httpStatus = response?.status() ?? null;
    if (!response || !response.ok()) {
      throw new Error(`Sveltia PoC admin returned ${response?.status() ?? "no response"}`);
    }

    const testRepoButton = page.getByRole("button", { name: /Work with Test Repository/i });
    if (await testRepoButton.isVisible().catch(() => false)) {
      await testRepoButton.click();
      result.onboardingClicked = true;
    }

    // A visible Stories collection proves the CMS bundle initialized, config.yml
    // parsed, and the bilingual collection schema was accepted by this runtime.
    await page.getByText("Stories", { exact: true }).first().waitFor({
      state: "visible",
      timeout: 30000,
    });

    result.visibleStoryLabel = true;
    result.success = true;
  } catch (error) {
    result.failure = error instanceof Error ? error.message : String(error);
  }

  await page.waitForTimeout(1000).catch(() => undefined);

  result.pageTitle = await page.title().catch(() => null);
  result.bodyTextSample = (await page.locator("body").innerText().catch(() => "")).slice(0, 4000);
  result.htmlSample = (await page.content().catch(() => "")).slice(0, 8000);

  const configErrorLocator = page.getByText(
    /configuration error|failed to load configuration|config error|invalid configuration/i,
  );
  result.containsConfigError = await configErrorLocator
    .first()
    .isVisible()
    .catch(() => false);

  const screenshotPath = path.join(OUTPUT, result.success ? "admin-loaded.jpg" : "admin-failure.jpg");
  await page
    .screenshot({
      path: screenshotPath,
      type: "jpeg",
      quality: 82,
      fullPage: true,
    })
    .catch(() => undefined);

  result.screenshot = path.relative(ROOT, screenshotPath).split(path.sep).join("/");

  await context.close();
} finally {
  await browser.close();
}

await writeFile(path.join(OUTPUT, "smoke.json"), `${JSON.stringify(result, null, 2)}\n`);

console.log(`SVELTIA_POC_UI_LOADED=${result.success}`);
console.log(`SVELTIA_POC_HTTP_STATUS=${result.httpStatus ?? "none"}`);
console.log(`SVELTIA_POC_ONBOARDING_CLICKED=${result.onboardingClicked}`);
console.log(`SVELTIA_POC_CONFIG_ERROR=${result.containsConfigError}`);
console.log(`SVELTIA_POC_CONSOLE_ERRORS=${result.consoleErrors.length}`);
console.log(`SVELTIA_POC_REQUEST_FAILURES=${result.requestFailures.length}`);
console.log(`SVELTIA_POC_SCREENSHOT=${result.screenshot ?? "none"}`);
if (result.failure) console.log(`SVELTIA_POC_FAILURE=${result.failure}`);

if (!result.success || result.containsConfigError) {
  process.exit(1);
}
