import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const BASELINE_PATH = path.join(ROOT, "docs", "audit", "css-important-baseline.json");

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
const cssFiles = (await walk(SRC)).filter((file) => file.endsWith(".css"));
const current = {};
let total = 0;

for (const file of cssFiles) {
  const text = await readFile(file, "utf8");
  const count = (text.match(/!important\b/g) ?? []).length;
  if (count > 0) current[rel(file)] = count;
  total += count;
}

const increases = [];
for (const [file, count] of Object.entries(current)) {
  const allowed = baseline.files[file] ?? 0;
  if (count > allowed) increases.push({ file, count, allowed });
}

if (total > baseline.total) {
  increases.push({ file: "<TOTAL>", count: total, allowed: baseline.total });
}

console.log(`CSS_IMPORTANT_CURRENT=${total}`);
console.log(`CSS_IMPORTANT_BASELINE=${baseline.total}`);

const decreases = [];
for (const [file, allowed] of Object.entries(baseline.files)) {
  const count = current[file] ?? 0;
  if (count < allowed) decreases.push({ file, count, allowed });
}

if (decreases.length > 0) {
  console.log("CSS_IMPORTANT_BASELINE_CAN_TIGHTEN");
  for (const item of decreases) {
    console.log(`LOWER\t${item.allowed}->${item.count}\t${item.file}`);
  }
}

if (increases.length > 0) {
  console.error("CSS !important baseline increased. New or increased !important declarations are not allowed.");
  for (const item of increases) {
    console.error(`INCREASE\t${item.allowed}->${item.count}\t${item.file}`);
  }
  process.exit(1);
}

console.log("CSS important guard passed");
