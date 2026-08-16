import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const OUTPUT = path.join(ROOT, ".reports", "css-dependency");
const BASE_URL = process.env.CSS_AUDIT_BASE_URL ?? "http://127.0.0.1:4173";

const routes = [
  ["root", "/", "en"],
  ["home-en", "/home/", "en"],
  ["about-en", "/about/", "en"],
  ["archive-en", "/archive/", "en"],
  ["books-en", "/books/", "en"],
  ["notes-en", "/notes/", "en"],
  ["stories-en", "/stories/", "en"],
  ["story-tiger-en", "/stories/my-father-dreamed-of-a-tiger/", "en"],
  ["story-youngest-en", "/stories/the-youngest-daughter-in-every-house/", "en"],
  ["studio-en", "/studio/", "en"],
  ["ko-root", "/ko/", "ko"],
  ["home-ko", "/ko/home/", "ko"],
  ["about-ko", "/ko/about/", "ko"],
  ["archive-ko", "/ko/archive/", "ko"],
  ["books-ko", "/ko/books/", "ko"],
  ["notes-ko", "/ko/notes/", "ko"],
  ["stories-ko", "/ko/stories/", "ko"],
  ["studio-ko", "/ko/studio/", "ko"],
];

const DYNAMIC_PATTERN = /:(?:hover|focus|focus-visible|focus-within|active|visited|target)\b|\[(?:open|popover-open)\]/i;

function rel(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join("/");
}

async function walk(dir) {
  const output = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) output.push(...(await walk(fullPath)));
    if (entry.isFile()) output.push(fullPath);
  }
  return output;
}

function extractSelectorRules(css) {
  const cleaned = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules = [];
  const pattern = /([^{}]+)\{/g;
  let match;

  while ((match = pattern.exec(cleaned))) {
    const candidate = match[1].trim();
    if (!candidate) continue;
    if (candidate.startsWith("@")) continue;
    if (/^(?:from|to|\d+(?:\.\d+)?%)\b/i.test(candidate)) continue;
    if (/^[\w-]+\s*:\s*[^;]+;/.test(candidate)) continue;
    rules.push(candidate.replace(/\s+/g, " "));
  }

  return [...new Set(rules)];
}

function normalizeSelector(selector) {
  let value = selector;

  // Pseudo-elements are styling surfaces, not queryable elements.
  value = value.replace(/::[a-z-]+(?:\([^)]*\))?/gi, "");

  // Stateful pseudo-classes are normalized to their owning structural element so
  // this audit can answer whether the selector belongs to the route at all.
  value = value.replace(/:(?:hover|focus|focus-visible|focus-within|active|visited|target)\b/gi, "");
  value = value.replace(/\[(?:open|popover-open)\]/gi, "");

  return value.trim();
}

const allCssFiles = (await walk(SRC)).filter((file) => file.endsWith(".css"));
const moduleCssFiles = allCssFiles.filter((file) => file.endsWith(".module.css")).map(rel).sort();
const cascadeCssFiles = allCssFiles.filter((file) => !file.endsWith(".module.css"));
const selectorRecords = [];

for (const file of cascadeCssFiles) {
  const text = await readFile(file, "utf8");
  for (const selector of extractSelectorRules(text)) {
    selectorRecords.push({
      file: rel(file),
      selector,
      normalizedSelector: normalizeSelector(selector),
      stateful: DYNAMIC_PATTERN.test(selector) || selector.includes("::"),
    });
  }
}

await mkdir(OUTPUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const routeMatches = new Map(selectorRecords.map((_, index) => [index, new Set()]));
const invalidSelectors = new Map();

try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    colorScheme: "light",
    locale: "en-US",
  });

  for (const [routeName, routePath, expectedLang] of routes) {
    const page = await context.newPage();
    await page.route("**/*", async (route) => {
      if (route.request().resourceType() === "media") {
        await route.abort();
        return;
      }
      await route.continue();
    });

    const response = await page.goto(new URL(routePath, BASE_URL).href, {
      waitUntil: "domcontentloaded",
    });

    if (!response || !response.ok()) {
      throw new Error(`${routePath} returned ${response?.status() ?? "no response"}`);
    }

    try {
      await page.waitForFunction(
        (language) => document.documentElement.lang === language,
        expectedLang,
        { timeout: 2000 },
      );
    } catch {
      // Keep the audit observational. A language-sync issue is already covered by
      // the dedicated accessibility baseline; selector impact still proceeds.
    }

    const selectors = selectorRecords.map((record) => record.normalizedSelector);
    const results = await page.evaluate((inputSelectors) => {
      return inputSelectors.map((selector) => {
        if (!selector) return { matched: false, invalid: true, error: "empty selector" };
        try {
          return { matched: document.querySelector(selector) !== null, invalid: false, error: null };
        } catch (error) {
          return {
            matched: false,
            invalid: true,
            error: error instanceof Error ? error.message : String(error),
          };
        }
      });
    }, selectors);

    results.forEach((result, index) => {
      if (result.matched) routeMatches.get(index).add(routeName);
      if (result.invalid && !invalidSelectors.has(index)) invalidSelectors.set(index, result.error);
    });

    console.log(`CSS_ROUTE_SCANNED\t${routeName}\t${routePath}`);
    await page.close();
  }

  await context.close();
} finally {
  await browser.close();
}

const records = selectorRecords.map((record, index) => ({
  ...record,
  matchedRoutes: [...routeMatches.get(index)].sort(),
  matchCount: routeMatches.get(index).size,
  queryable: !invalidSelectors.has(index),
  queryError: invalidSelectors.get(index) ?? null,
}));

const fileMap = new Map();
for (const record of records) {
  const file = fileMap.get(record.file) ?? {
    file: record.file,
    selectorRuleCount: 0,
    queryableRuleCount: 0,
    zeroMatchRuleCount: 0,
    oneRouteRuleCount: 0,
    statefulRuleCount: 0,
    matchedRoutes: new Set(),
    zeroMatchSelectors: [],
    oneRouteSelectors: [],
    invalidSelectors: [],
  };

  file.selectorRuleCount += 1;
  if (record.queryable) file.queryableRuleCount += 1;
  if (record.stateful) file.statefulRuleCount += 1;
  for (const routeName of record.matchedRoutes) file.matchedRoutes.add(routeName);

  if (record.queryable && record.matchCount === 0) {
    file.zeroMatchRuleCount += 1;
    file.zeroMatchSelectors.push(record.selector);
  }
  if (record.queryable && record.matchCount === 1) {
    file.oneRouteRuleCount += 1;
    file.oneRouteSelectors.push({ selector: record.selector, route: record.matchedRoutes[0] });
  }
  if (!record.queryable) {
    file.invalidSelectors.push({ selector: record.selector, error: record.queryError });
  }

  fileMap.set(record.file, file);
}

const files = [...fileMap.values()]
  .map((file) => ({
    ...file,
    matchedRoutes: [...file.matchedRoutes].sort(),
    routeCount: file.matchedRoutes.size,
  }))
  .sort((a, b) => b.zeroMatchRuleCount - a.zeroMatchRuleCount || b.selectorRuleCount - a.selectorRuleCount || a.file.localeCompare(b.file));

const report = {
  generatedAt: new Date().toISOString(),
  routeCount: routes.length,
  cascadeCssFileCount: cascadeCssFiles.length,
  moduleCssFileCount: moduleCssFiles.length,
  moduleCssFiles,
  selectorRuleCount: records.length,
  queryableRuleCount: records.filter((record) => record.queryable).length,
  zeroMatchRuleCount: records.filter((record) => record.queryable && record.matchCount === 0).length,
  oneRouteRuleCount: records.filter((record) => record.queryable && record.matchCount === 1).length,
  statefulRuleCount: records.filter((record) => record.stateful).length,
  invalidRuleCount: records.filter((record) => !record.queryable).length,
  files,
  selectors: records,
};

await writeFile(path.join(OUTPUT, "report.json"), `${JSON.stringify(report, null, 2)}\n`);

const table = files
  .map(
    (file) =>
      `| \`${file.file}\` | ${file.selectorRuleCount} | ${file.routeCount} | ${file.zeroMatchRuleCount} | ${file.oneRouteRuleCount} | ${file.statefulRuleCount} |`,
  )
  .join("\n");

const zeroCandidates = files
  .filter((file) => file.zeroMatchRuleCount > 0)
  .map((file) => {
    const selectors = file.zeroMatchSelectors.slice(0, 20).map((selector) => `  - \`${selector}\``).join("\n");
    const remainder = Math.max(0, file.zeroMatchSelectors.length - 20);
    return `- \`${file.file}\` — ${file.zeroMatchRuleCount} zero-match candidate(s)\n${selectors}${remainder ? `\n  - ... ${remainder} more` : ""}`;
  })
  .join("\n");

const markdown = `# CSS route dependency audit\n\nGenerated: ${report.generatedAt}\n\nThis is a structural selector-presence audit across ${report.routeCount} current routes for the legacy/non-module cascade. Stateful selectors and pseudo-elements are normalized to their owning structural selectors. CSS Modules are listed separately and deliberately excluded because their source class names are hashed at build time and cannot be meaningfully queried against production DOM by source selector. A zero match is a deletion *candidate*, not proof of dead CSS.\n\n## Summary\n\n- Non-module CSS files scanned: ${report.cascadeCssFileCount}\n- CSS Modules excluded from source-selector matching: ${report.moduleCssFileCount}\n- Selector rules extracted: ${report.selectorRuleCount}\n- Queryable after normalization: ${report.queryableRuleCount}\n- Zero-match candidates: ${report.zeroMatchRuleCount}\n- One-route selectors: ${report.oneRouteRuleCount}\n- Stateful/pseudo-element selectors: ${report.statefulRuleCount}\n- Invalid/unqueryable selectors: ${report.invalidRuleCount}\n\n## CSS Modules (ownership already explicit)\n\n${moduleCssFiles.map((file) => `- \`${file}\``).join("\n") || "- None."}\n\n## Non-module file impact matrix\n\n| File | Rules | Routes touched | Zero-match candidates | One-route rules | Stateful rules |\n| --- | ---: | ---: | ---: | ---: | ---: |\n${table}\n\n## Zero-match candidate selectors\n\n${zeroCandidates || "- None detected."}\n`;

await writeFile(path.join(OUTPUT, "report.md"), markdown);

console.log(`CSS_DEPENDENCY_ROUTES=${report.routeCount}`);
console.log(`CSS_DEPENDENCY_CASCADE_FILES=${report.cascadeCssFileCount}`);
console.log(`CSS_DEPENDENCY_MODULE_FILES=${report.moduleCssFileCount}`);
console.log(`CSS_DEPENDENCY_RULES=${report.selectorRuleCount}`);
console.log(`CSS_DEPENDENCY_QUERYABLE=${report.queryableRuleCount}`);
console.log(`CSS_DEPENDENCY_ZERO_MATCH=${report.zeroMatchRuleCount}`);
console.log(`CSS_DEPENDENCY_ONE_ROUTE=${report.oneRouteRuleCount}`);
console.log(`CSS_DEPENDENCY_STATEFUL=${report.statefulRuleCount}`);
console.log(`CSS_DEPENDENCY_INVALID=${report.invalidRuleCount}`);
console.log("CSS_DEPENDENCY_TOP_FILES");
for (const file of files.slice(0, 15)) {
  console.log(`${file.zeroMatchRuleCount}\t${file.routeCount}\t${file.selectorRuleCount}\t${file.file}`);
}
