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
  editorOpened: false,
  requiredFieldChecks: {},
  containsConfigError: false,
  bodyTextSample: "",
  htmlSample: "",
  consoleErrors: [],
  requestFailures: [],
  collectionScreenshot: null,
  editorScreenshot: null,
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

    await page.getByText("Stories", { exact: true }).first().waitFor({
      state: "visible",
      timeout: 30000,
    });
    result.visibleStoryLabel = true;

    const collectionScreenshotPath = path.join(OUTPUT, "collection-loaded.jpg");
    await page.screenshot({
      path: collectionScreenshotPath,
      type: "jpeg",
      quality: 82,
      fullPage: true,
    });
    result.collectionScreenshot = path.relative(ROOT, collectionScreenshotPath).split(path.sep).join("/");

    const createButton = page.getByRole("button", { name: /Create New Entry|New/i }).last();
    await createButton.click();

    await page.getByText("Story ID", { exact: true }).first().waitFor({
      state: "visible",
      timeout: 30000,
    });
    result.editorOpened = true;

    const checks = {
      storyId: /Story ID/i,
      editorialState: /Editorial state/i,
      eventYear: /Approximate event year/i,
      datePrecision: /Date precision/i,
      collections: /^Collections$/i,
      publicationState: /Locale publication state/i,
      title: /^Title$/i,
      publicUrlSlug: /Public URL slug/i,
      companionSummary: /Companion-language summary/i,
      storyPhotos: /Story photos/i,
      storyBody: /^Story$/i,
    };

    for (const [name, pattern] of Object.entries(checks)) {
      result.requiredFieldChecks[name] = await page
        .getByText(pattern, { exact: false })
        .first()
        .isVisible()
        .catch(() => false);
    }

    const allFieldsVisible = Object.values(result.requiredFieldChecks).every(Boolean);

    const editorScreenshotPath = path.join(OUTPUT, "story-editor.jpg");
    await page.screenshot({
      path: editorScreenshotPath,
      type: "jpeg",
      quality: 82,
      fullPage: true,
    });
    result.editorScreenshot = path.relative(ROOT, editorScreenshotPath).split(path.sep).join("/");

    if (!allFieldsVisible) {
      const missing = Object.entries(result.requiredFieldChecks)
        .filter(([, visible]) => !visible)
        .map(([name]) => name)
        .join(", ");
      throw new Error(`Sveltia Story editor is missing expected fields: ${missing}`);
    }

    result.success = true;
  } catch (error) {
    result.failure = error instanceof Error ? error.message : String(error);
  }

  await page.waitForTimeout(800).catch(() => undefined);

  result.pageTitle = await page.title().catch(() => null);
  result.bodyTextSample = (await page.locator("body").innerText().catch(() => "")).slice(0, 6000);
  result.htmlSample = (await page.content().catch(() => "")).slice(0, 10000);

  const configErrorLocator = page.getByText(
    /configuration error|failed to load configuration|config error|invalid configuration/i,
  );
  result.containsConfigError = await configErrorLocator
    .first()
    .isVisible()
    .catch(() => false);

  if (!result.editorScreenshot) {
    const failureScreenshotPath = path.join(OUTPUT, "admin-failure.jpg");
    await page
      .screenshot({
        path: failureScreenshotPath,
        type: "jpeg",
        quality: 82,
        fullPage: true,
      })
      .catch(() => undefined);
    result.editorScreenshot = path.relative(ROOT, failureScreenshotPath).split(path.sep).join("/");
  }

  await context.close();
} finally {
  await browser.close();
}

await writeFile(path.join(OUTPUT, "smoke.json"), `${JSON.stringify(result, null, 2)}\n`);

console.log(`SVELTIA_POC_UI_LOADED=${result.success}`);
console.log(`SVELTIA_POC_HTTP_STATUS=${result.httpStatus ?? "none"}`);
console.log(`SVELTIA_POC_ONBOARDING_CLICKED=${result.onboardingClicked}`);
console.log(`SVELTIA_POC_COLLECTION_VISIBLE=${result.visibleStoryLabel}`);
console.log(`SVELTIA_POC_EDITOR_OPENED=${result.editorOpened}`);
console.log(`SVELTIA_POC_CONFIG_ERROR=${result.containsConfigError}`);
console.log(`SVELTIA_POC_CONSOLE_ERRORS=${result.consoleErrors.length}`);
console.log(`SVELTIA_POC_REQUEST_FAILURES=${result.requestFailures.length}`);
for (const [name, visible] of Object.entries(result.requiredFieldChecks)) {
  console.log(`SVELTIA_FIELD\t${name}\t${visible}`);
}
if (result.failure) console.log(`SVELTIA_POC_FAILURE=${result.failure}`);

if (!result.success || result.containsConfigError) {
  process.exit(1);
}
