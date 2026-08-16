import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, ".reports", "cms-poc", "sveltia");
const BASE_URL = process.env.SVELTIA_POC_URL ?? "http://127.0.0.1:4181/admin/";

await mkdir(OUTPUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
let result;

try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    colorScheme: "light",
    locale: "en-US",
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));

  const response = await page.goto(BASE_URL, {
    waitUntil: "domcontentloaded",
    timeout: 30000,
  });

  if (!response || !response.ok()) {
    throw new Error(`Sveltia PoC admin returned ${response?.status() ?? "no response"}`);
  }

  await page.waitForFunction(
    () => document.body.innerText.toLowerCase().includes("stories"),
    undefined,
    { timeout: 30000 },
  );

  await page.waitForTimeout(1000);

  const bodyText = await page.locator("body").innerText();
  const visibleStoryLabel = /stories/i.test(bodyText);
  const containsConfigError = /configuration error|failed to load configuration|config error/i.test(bodyText);

  const screenshotPath = path.join(OUTPUT, "admin-loaded.jpg");
  await page.screenshot({
    path: screenshotPath,
    type: "jpeg",
    quality: 82,
    fullPage: true,
  });

  result = {
    generatedAt: new Date().toISOString(),
    url: BASE_URL,
    httpStatus: response.status(),
    pageTitle: await page.title(),
    visibleStoryLabel,
    containsConfigError,
    bodyTextSample: bodyText.slice(0, 2500),
    consoleErrors,
    screenshot: path.relative(ROOT, screenshotPath).split(path.sep).join("/"),
  };

  if (!visibleStoryLabel || containsConfigError) {
    throw new Error("Sveltia UI did not load the Stories collection cleanly");
  }

  await context.close();
} finally {
  await browser.close();
}

await writeFile(path.join(OUTPUT, "smoke.json"), `${JSON.stringify(result, null, 2)}\n`);
console.log("SVELTIA_POC_UI_LOADED=true");
console.log(`SVELTIA_POC_CONSOLE_ERRORS=${result.consoleErrors.length}`);
console.log(`SVELTIA_POC_SCREENSHOT=${result.screenshot}`);
