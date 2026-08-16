import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, ".reports");
const BASE_URL = process.env.KEYSTATIC_POC_URL ?? "http://127.0.0.1:4182/keystatic";

await mkdir(OUTPUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const result = {
  generatedAt: new Date().toISOString(),
  url: BASE_URL,
  success: false,
  httpStatus: null,
  pageTitle: null,
  storiesVisible: false,
  storiesOpened: false,
  editorOpened: false,
  requiredFieldChecks: {},
  bodyTextSample: "",
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
      throw new Error(`Keystatic PoC returned ${response?.status() ?? "no response"}`);
    }

    const stories = page.getByText("Stories", { exact: true }).first();
    await stories.waitFor({ state: "visible", timeout: 30000 });
    result.storiesVisible = true;

    await stories.click();
    result.storiesOpened = true;
    await page.waitForTimeout(500);

    const createCandidates = [
      page.getByRole("button", { name: /Create|Add|New/i }),
      page.getByRole("link", { name: /Create|Add|New/i }),
      page.getByText(/Create.*Stor|Add.*Stor|New.*Stor/i),
    ];

    let createControl = null;
    for (const candidate of createCandidates) {
      const first = candidate.first();
      if (await first.isVisible().catch(() => false)) {
        createControl = first;
        break;
      }
    }

    if (!createControl) {
      throw new Error("Keystatic Stories collection loaded but no visible create-entry control was found");
    }

    await createControl.click();

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
      koreanOriginal: /Korean original/i,
      englishOriginal: /English original/i,
      storyPhotos: /Story photos/i,
      koreanStory: /Korean Story/i,
      englishStory: /English Story/i,
    };

    for (const [name, pattern] of Object.entries(checks)) {
      result.requiredFieldChecks[name] = await page
        .getByText(pattern, { exact: false })
        .first()
        .isVisible()
        .catch(() => false);
    }

    const allFieldsVisible = Object.values(result.requiredFieldChecks).every(Boolean);
    if (!allFieldsVisible) {
      const missing = Object.entries(result.requiredFieldChecks)
        .filter(([, visible]) => !visible)
        .map(([name]) => name)
        .join(", ");
      throw new Error(`Keystatic Story editor is missing expected fields: ${missing}`);
    }

    result.success = true;
  } catch (error) {
    result.failure = error instanceof Error ? error.message : String(error);
  }

  await page.waitForTimeout(500).catch(() => undefined);
  result.pageTitle = await page.title().catch(() => null);
  result.bodyTextSample = (await page.locator("body").innerText().catch(() => "")).slice(0, 7000);

  const screenshotPath = path.join(OUTPUT, result.success ? "keystatic-editor.jpg" : "keystatic-failure.jpg");
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

console.log(`KEYSTATIC_POC_SUCCESS=${result.success}`);
console.log(`KEYSTATIC_POC_HTTP_STATUS=${result.httpStatus ?? "none"}`);
console.log(`KEYSTATIC_POC_STORIES_VISIBLE=${result.storiesVisible}`);
console.log(`KEYSTATIC_POC_STORIES_OPENED=${result.storiesOpened}`);
console.log(`KEYSTATIC_POC_EDITOR_OPENED=${result.editorOpened}`);
console.log(`KEYSTATIC_POC_CONSOLE_ERRORS=${result.consoleErrors.length}`);
console.log(`KEYSTATIC_POC_REQUEST_FAILURES=${result.requestFailures.length}`);
for (const [name, visible] of Object.entries(result.requiredFieldChecks)) {
  console.log(`KEYSTATIC_FIELD\t${name}\t${visible}`);
}
if (result.failure) console.log(`KEYSTATIC_POC_FAILURE=${result.failure}`);

if (!result.success) process.exit(1);
