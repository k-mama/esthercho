import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, ".reports");
const SKIP_DIRS = new Set([".git", ".next", ".reports", "node_modules", "out", "build", "coverage"]);
const TEXT_EXTENSIONS = new Set([".css", ".js", ".jsx", ".json", ".md", ".mdx", ".mjs", ".ts", ".tsx", ".yml", ".yaml"]);
const IMAGE_EXTENSIONS = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);
const VIDEO_EXTENSIONS = new Set([".m4v", ".mov", ".mp4", ".webm"]);
const FONT_EXTENSIONS = new Set([".otf", ".ttf", ".woff", ".woff2"]);

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
    if (entry.isDirectory() && SKIP_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      output.push(...(await walk(fullPath)));
    } else if (entry.isFile()) {
      output.push(fullPath);
    }
  }

  return output;
}

async function sha256(filePath) {
  const data = await readFile(filePath);
  return createHash("sha256").update(data).digest("hex");
}

function routeFromPageFile(filePath) {
  const appRoot = path.join(ROOT, "src", "app");
  const dir = path.dirname(filePath);
  const relativeDir = path.relative(appRoot, dir).split(path.sep).filter(Boolean);
  if (relativeDir.length === 0) return "/";
  return `/${relativeDir.join("/")}/`;
}

function localeForRoute(route) {
  return route === "/ko/" || route.startsWith("/ko/") ? "ko" : "en";
}

function countApproxSelectors(css) {
  const withoutComments = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const candidates = withoutComments.match(/(?:^|})\s*([^@{}][^{}]*)\{/gm) ?? [];
  let count = 0;
  for (const candidate of candidates) {
    const selectorText = candidate
      .replace(/^}\s*/, "")
      .replace(/\{$/, "")
      .trim();
    if (!selectorText || selectorText.includes(":")) {
      if (/^[\w-]+\s*:\s*[^,]+$/.test(selectorText)) continue;
    }
    if (/^(from|to|\d+%)/.test(selectorText)) continue;
    count += selectorText.split(",").filter(Boolean).length;
  }
  return count;
}

function extractAssetReferences(text) {
  const matches = text.match(/\/(?:media|brand)\/[A-Za-z0-9_./()%-]+/g) ?? [];
  return [...new Set(matches)];
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(2)} MB`;
  return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
}

const allFiles = await walk(ROOT);
const srcFiles = allFiles.filter((file) => rel(file).startsWith("src/"));
const publicFiles = allFiles.filter((file) => rel(file).startsWith("public/"));

const routes = srcFiles
  .filter((file) => path.basename(file) === "page.tsx" && rel(file).startsWith("src/app/"))
  .map((file) => ({
    route: routeFromPageFile(file),
    locale: localeForRoute(routeFromPageFile(file)),
    source: rel(file),
  }))
  .sort((a, b) => a.route.localeCompare(b.route));

const storyRoutes = routes.filter(({ route }) => {
  const stripped = route.replace(/^\/ko/, "");
  return stripped.startsWith("/stories/") && stripped !== "/stories/";
});

const publicAssets = [];
for (const file of publicFiles) {
  const info = await stat(file);
  const ext = path.extname(file).toLowerCase();
  publicAssets.push({
    file: rel(file),
    extension: ext || "(none)",
    bytes: info.size,
    kind: IMAGE_EXTENSIONS.has(ext)
      ? "image"
      : VIDEO_EXTENSIONS.has(ext)
        ? "video"
        : FONT_EXTENSIONS.has(ext)
          ? "font"
          : "other",
    sha256: await sha256(file),
  });
}

publicAssets.sort((a, b) => b.bytes - a.bytes || a.file.localeCompare(b.file));

const duplicateMap = new Map();
for (const asset of publicAssets) {
  const list = duplicateMap.get(asset.sha256) ?? [];
  list.push(asset);
  duplicateMap.set(asset.sha256, list);
}
const duplicateGroups = [...duplicateMap.entries()]
  .filter(([, assets]) => assets.length > 1)
  .map(([hash, assets]) => ({
    sha256: hash,
    bytesEach: assets[0].bytes,
    files: assets.map((asset) => asset.file).sort(),
  }))
  .sort((a, b) => b.bytesEach - a.bytesEach);

const cssFiles = srcFiles.filter((file) => path.extname(file).toLowerCase() === ".css");
const cssAudit = [];
for (const file of cssFiles) {
  const text = await readFile(file, "utf8");
  cssAudit.push({
    file: rel(file),
    bytes: Buffer.byteLength(text),
    lines: text.split(/\r?\n/).length,
    importantCount: (text.match(/!important\b/g) ?? []).length,
    mediaQueryCount: (text.match(/@media\b/g) ?? []).length,
    hasSelectorCount: (text.match(/:has\(/g) ?? []).length,
    rootDefinitionCount: (text.match(/:root\b/g) ?? []).length,
    approximateSelectorCount: countApproxSelectors(text),
    isModule: file.endsWith(".module.css"),
  });
}
cssAudit.sort((a, b) => b.importantCount - a.importantCount || b.bytes - a.bytes);

let globalCssLayers = [];
const layoutPath = path.join(ROOT, "src", "app", "layout.tsx");
try {
  const layout = await readFile(layoutPath, "utf8");
  globalCssLayers = [...layout.matchAll(/import\s+["']@\/styles\/([^"']+\.css)["'];?/g)].map(
    (match) => `src/styles/${match[1]}`,
  );
} catch {
  globalCssLayers = [];
}

const assetReferences = new Map();
for (const file of allFiles) {
  const ext = path.extname(file).toLowerCase();
  if (!TEXT_EXTENSIONS.has(ext)) continue;
  let text;
  try {
    text = await readFile(file, "utf8");
  } catch {
    continue;
  }
  for (const assetPath of extractAssetReferences(text)) {
    const refs = assetReferences.get(assetPath) ?? [];
    refs.push(rel(file));
    assetReferences.set(assetPath, refs);
  }
}

const assetReferenceReport = [...assetReferences.entries()]
  .map(([assetPath, sources]) => ({
    assetPath,
    referenceCount: sources.length,
    sourceFiles: [...new Set(sources)].sort(),
  }))
  .sort((a, b) => b.referenceCount - a.referenceCount || a.assetPath.localeCompare(b.assetPath));

const publicBytes = publicAssets.reduce((sum, asset) => sum + asset.bytes, 0);
const imageAssets = publicAssets.filter((asset) => asset.kind === "image");
const videoAssets = publicAssets.filter((asset) => asset.kind === "video");
const fontAssets = publicAssets.filter((asset) => asset.kind === "font");
const cssImportantTotal = cssAudit.reduce((sum, item) => sum + item.importantCount, 0);
const cssBytes = cssAudit.reduce((sum, item) => sum + item.bytes, 0);
const orphanPublicAssets = publicAssets.filter((asset) => {
  const url = `/${asset.file.replace(/^public\//, "")}`;
  return (asset.kind === "image" || asset.kind === "video") && !assetReferences.has(url);
});

const report = {
  generatedAt: new Date().toISOString(),
  repository: {
    scannedFiles: allFiles.length,
    sourceFiles: srcFiles.length,
    publicFiles: publicFiles.length,
  },
  routes: {
    total: routes.length,
    english: routes.filter((item) => item.locale === "en").length,
    korean: routes.filter((item) => item.locale === "ko").length,
    storyDetailRoutes: storyRoutes.length,
    items: routes,
  },
  assets: {
    total: publicAssets.length,
    bytes: publicBytes,
    images: imageAssets.length,
    videos: videoAssets.length,
    fonts: fontAssets.length,
    duplicateGroups,
    largest: publicAssets.slice(0, 20),
    unreferencedEditorialMedia: orphanPublicAssets,
    references: assetReferenceReport,
  },
  css: {
    files: cssAudit.length,
    bytes: cssBytes,
    globalLayerCount: globalCssLayers.length,
    globalLayers: globalCssLayers,
    importantCount: cssImportantTotal,
    filesWithImportant: cssAudit.filter((item) => item.importantCount > 0).length,
    audit: cssAudit,
  },
};

const duplicateLines = duplicateGroups.length
  ? duplicateGroups
      .slice(0, 20)
      .map((group) => `- ${formatBytes(group.bytesEach)} each — ${group.files.join(" | ")}`)
      .join("\n")
  : "- None detected by exact SHA-256 match.";

const importantLines = cssAudit
  .filter((item) => item.importantCount > 0)
  .map((item) => `- ${item.file}: ${item.importantCount}`)
  .join("\n") || "- None.";

const largestLines = publicAssets
  .slice(0, 15)
  .map((asset) => `- ${formatBytes(asset.bytes)} — ${asset.file}`)
  .join("\n");

const orphanLines = orphanPublicAssets
  .slice(0, 30)
  .map((asset) => `- ${asset.file}`)
  .join("\n") || "- None detected.";

const markdown = `# Sprint 0 automated census\n\nGenerated: ${report.generatedAt}\n\nThis is an observation report only. It does not change production behavior. Selector counts are approximate; hashes, file sizes, route files, and !important counts are exact for the checked-out commit.\n\n## Summary\n\n- Route pages: ${routes.length} (${report.routes.english} EN / ${report.routes.korean} KO)\n- Story detail route pages: ${storyRoutes.length}\n- Public assets: ${publicAssets.length} (${imageAssets.length} images / ${videoAssets.length} videos / ${fontAssets.length} fonts)\n- Public asset weight: ${formatBytes(publicBytes)}\n- Exact duplicate asset groups: ${duplicateGroups.length}\n- CSS files under src: ${cssAudit.length}\n- CSS weight under src: ${formatBytes(cssBytes)}\n- Root global CSS layers: ${globalCssLayers.length}\n- !important declarations: ${cssImportantTotal} across ${report.css.filesWithImportant} files\n- Referenced /media or /brand paths found in text source: ${assetReferenceReport.length}\n- Image/video files with no direct textual reference detected: ${orphanPublicAssets.length}\n\n## Global CSS layer order\n\n${globalCssLayers.map((item, index) => `${index + 1}. ${item}`).join("\n") || "None detected."}\n\n## !important inventory\n\n${importantLines}\n\n## Exact duplicate public asset groups\n\n${duplicateLines}\n\n## Largest public assets\n\n${largestLines}\n\n## Image/video assets with no direct textual reference detected\n\nThis is a lead list, not proof of dead media. Runtime-generated references can evade text scanning.\n\n${orphanLines}\n\n## Machine-readable report\n\nSee \`.reports/sprint0-census.json\`.\n`;

await mkdir(REPORT_DIR, { recursive: true });
await writeFile(path.join(REPORT_DIR, "sprint0-census.json"), `${JSON.stringify(report, null, 2)}\n`);
await writeFile(path.join(REPORT_DIR, "sprint0-census.md"), markdown);

console.log("Sprint 0 census complete");
console.log(`ROUTES=${routes.length}`);
console.log(`STORY_DETAIL_ROUTES=${storyRoutes.length}`);
console.log(`PUBLIC_ASSETS=${publicAssets.length}`);
console.log(`PUBLIC_BYTES=${publicBytes}`);
console.log(`IMAGE_ASSETS=${imageAssets.length}`);
console.log(`VIDEO_ASSETS=${videoAssets.length}`);
console.log(`DUPLICATE_GROUPS=${duplicateGroups.length}`);
console.log(`CSS_FILES=${cssAudit.length}`);
console.log(`GLOBAL_CSS_LAYERS=${globalCssLayers.length}`);
console.log(`CSS_IMPORTANT=${cssImportantTotal}`);
console.log(`ASSET_REFERENCE_PATHS=${assetReferenceReport.length}`);
console.log(`UNREFERENCED_EDITORIAL_MEDIA=${orphanPublicAssets.length}`);

console.log("TOP_IMPORTANT_FILES");
for (const item of cssAudit.filter((entry) => entry.importantCount > 0).slice(0, 10)) {
  console.log(`${item.importantCount}\t${item.file}`);
}

console.log("DUPLICATE_ASSET_GROUPS");
for (const group of duplicateGroups.slice(0, 10)) {
  console.log(`${group.bytesEach}\t${group.files.join(" | ")}`);
}

console.log("LARGEST_PUBLIC_ASSETS");
for (const asset of publicAssets.slice(0, 10)) {
  console.log(`${asset.bytes}\t${asset.file}`);
}

console.log("UNREFERENCED_MEDIA_LEADS");
for (const asset of orphanPublicAssets.slice(0, 20)) {
  console.log(`${asset.bytes}\t${asset.file}`);
}
