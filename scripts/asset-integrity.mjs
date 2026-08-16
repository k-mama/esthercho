import { createHash } from "node:crypto";
import { access, mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const PUBLIC = path.join(ROOT, "public");
const REPORT_DIR = path.join(ROOT, ".reports");
const TEXT_EXTENSIONS = new Set([".css", ".js", ".jsx", ".json", ".ts", ".tsx"]);
const DELIVERY_EXTENSIONS = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp", ".m4v", ".mov", ".mp4", ".webm"]);

function rel(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join("/");
}

async function walk(dir) {
  const output = [];
  let entries = [];
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return output;
  }
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) output.push(...(await walk(fullPath)));
    if (entry.isFile()) output.push(fullPath);
  }
  return output;
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function sha256(filePath) {
  const data = await readFile(filePath);
  return createHash("sha256").update(data).digest("hex");
}

function extractStaticUrls(text) {
  const found = new Set();
  for (const match of text.matchAll(/\/(?:media|brand)\/[A-Za-z0-9_./()%-]+/g)) found.add(match[0]);
  for (const match of text.matchAll(/\/(?:favicon[^"'`\s)]+|apple-icon[^"'`\s)]+)/g)) found.add(match[0]);
  return [...found];
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 ** 2).toFixed(2)} MB`;
}

const sourceFiles = (await walk(SRC)).filter((file) => TEXT_EXTENSIONS.has(path.extname(file).toLowerCase()));
const references = new Map();

for (const file of sourceFiles) {
  const text = await readFile(file, "utf8");
  for (const url of extractStaticUrls(text)) {
    const sources = references.get(url) ?? new Set();
    sources.add(rel(file));
    references.set(url, sources);
  }
}

const missingReferences = [];
for (const [url, sources] of references) {
  const expected = path.join(PUBLIC, url.replace(/^\//, ""));
  if (!(await exists(expected))) {
    missingReferences.push({
      url,
      expected: rel(expected),
      sourceFiles: [...sources].sort(),
    });
  }
}
missingReferences.sort((a, b) => a.url.localeCompare(b.url));

const appStaticAssets = (await walk(path.join(SRC, "app"))).filter((file) =>
  DELIVERY_EXTENSIONS.has(path.extname(file).toLowerCase()),
);

const appStaticReport = [];
for (const file of appStaticAssets) {
  const info = await stat(file);
  appStaticReport.push({
    file: rel(file),
    bytes: info.size,
    sha256: await sha256(file),
  });
}
appStaticReport.sort((a, b) => b.bytes - a.bytes);

const publicDeliveryAssets = (await walk(PUBLIC)).filter((file) =>
  DELIVERY_EXTENSIONS.has(path.extname(file).toLowerCase()),
);
const deliveryHashMap = new Map();
for (const file of [...publicDeliveryAssets, ...appStaticAssets]) {
  const hash = await sha256(file);
  const items = deliveryHashMap.get(hash) ?? [];
  items.push(rel(file));
  deliveryHashMap.set(hash, items);
}

const crossLocationDuplicates = [...deliveryHashMap.entries()]
  .filter(([, files]) => files.length > 1)
  .map(([hash, files]) => ({ hash, files: files.sort() }))
  .sort((a, b) => a.files[0].localeCompare(b.files[0]));

const report = {
  generatedAt: new Date().toISOString(),
  sourceStaticReferenceCount: references.size,
  missingReferences,
  appStaticAssets: appStaticReport,
  exactDeliveryDuplicates: crossLocationDuplicates,
};

await mkdir(REPORT_DIR, { recursive: true });
await writeFile(path.join(REPORT_DIR, "sprint0-asset-integrity.json"), `${JSON.stringify(report, null, 2)}\n`);

const markdown = `# Sprint 0 asset integrity\n\nGenerated: ${report.generatedAt}\n\n## Missing production static references\n\n${
  missingReferences.length
    ? missingReferences.map((item) => `- ${item.url} — expected ${item.expected} — from ${item.sourceFiles.join(", ")}`).join("\n")
    : "- None."
}\n\n## Next app-directory static assets\n\n${
  appStaticReport.length
    ? appStaticReport.map((item) => `- ${formatBytes(item.bytes)} — ${item.file}`).join("\n")
    : "- None."
}\n\n## Exact duplicate delivery assets\n\n${
  crossLocationDuplicates.length
    ? crossLocationDuplicates.map((item) => `- ${item.files.join(" | ")}`).join("\n")
    : "- None."
}\n`;
await writeFile(path.join(REPORT_DIR, "sprint0-asset-integrity.md"), markdown);

console.log("Sprint 0 asset integrity complete");
console.log(`STATIC_REFERENCE_PATHS=${references.size}`);
console.log(`MISSING_STATIC_REFERENCES=${missingReferences.length}`);
for (const item of missingReferences) {
  console.log(`MISSING\t${item.url}\t${item.sourceFiles.join(" | ")}`);
}
console.log(`APP_STATIC_ASSETS=${appStaticReport.length}`);
for (const item of appStaticReport) {
  console.log(`APP_STATIC\t${item.bytes}\t${item.file}`);
}
console.log(`DELIVERY_DUPLICATE_GROUPS=${crossLocationDuplicates.length}`);
