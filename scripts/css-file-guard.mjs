import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const BASELINE_PATH = path.join(ROOT, "docs", "audit", "css-file-baseline.json");

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

const baseline = JSON.parse(await readFile(BASELINE_PATH, "utf8"));
const allowed = new Set(baseline.allowedNonModuleCss ?? []);
const cssFiles = (await walk(SRC)).filter((file) => file.endsWith(".css"));

const moduleFiles = [];
const nonModuleFiles = [];
for (const file of cssFiles) {
  const filePath = rel(file);
  if (filePath.endsWith(".module.css")) moduleFiles.push(filePath);
  else nonModuleFiles.push(filePath);
}

const unexpected = nonModuleFiles.filter((file) => !allowed.has(file)).sort();
const removableBaseline = [...allowed].filter((file) => !nonModuleFiles.includes(file)).sort();

console.log(`CSS_FILES_TOTAL=${cssFiles.length}`);
console.log(`CSS_MODULE_FILES=${moduleFiles.length}`);
console.log(`CSS_NON_MODULE_FILES=${nonModuleFiles.length}`);
console.log(`CSS_NON_MODULE_BASELINE=${allowed.size}`);

if (removableBaseline.length > 0) {
  console.log("CSS_FILE_BASELINE_CAN_TIGHTEN");
  for (const file of removableBaseline) console.log(`REMOVE_FROM_BASELINE\t${file}`);
}

if (unexpected.length > 0) {
  console.error("Unapproved non-module CSS files detected.");
  console.error(
    "New co-located *.module.css files are allowed. New non-module CSS requires an architecture decision and an explicit baseline update.",
  );
  for (const file of unexpected) console.error(`UNAPPROVED_NON_MODULE_CSS\t${file}`);
  process.exit(1);
}

console.log("CSS file guard passed");
