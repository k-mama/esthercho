import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const REPORT_DIR = path.join(ROOT, ".reports");
const IMAGE_EXTENSIONS = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);

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

function pngSize(buffer) {
  if (buffer.length < 24 || buffer.toString("ascii", 1, 4) !== "PNG") return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function gifSize(buffer) {
  if (buffer.length < 10 || !buffer.toString("ascii", 0, 6).startsWith("GIF")) return null;
  return { width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8) };
}

function jpegSize(buffer) {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) return null;
  const sofMarkers = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
  let offset = 2;
  while (offset + 3 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    while (offset < buffer.length && buffer[offset] === 0xff) offset += 1;
    const marker = buffer[offset];
    offset += 1;
    if (marker === 0xd8 || marker === 0xd9) continue;
    if (offset + 1 >= buffer.length) break;
    const length = buffer.readUInt16BE(offset);
    if (length < 2 || offset + length > buffer.length) break;
    if (sofMarkers.has(marker) && length >= 7) {
      return {
        height: buffer.readUInt16BE(offset + 3),
        width: buffer.readUInt16BE(offset + 5),
      };
    }
    offset += length;
  }
  return null;
}

function readUInt24LE(buffer, offset) {
  return buffer[offset] | (buffer[offset + 1] << 8) | (buffer[offset + 2] << 16);
}

function webpSize(buffer) {
  if (buffer.length < 30 || buffer.toString("ascii", 0, 4) !== "RIFF" || buffer.toString("ascii", 8, 12) !== "WEBP") return null;
  const chunk = buffer.toString("ascii", 12, 16);
  if (chunk === "VP8X" && buffer.length >= 30) {
    return {
      width: readUInt24LE(buffer, 24) + 1,
      height: readUInt24LE(buffer, 27) + 1,
    };
  }
  if (chunk === "VP8L" && buffer.length >= 25 && buffer[20] === 0x2f) {
    const b1 = buffer[21];
    const b2 = buffer[22];
    const b3 = buffer[23];
    const b4 = buffer[24];
    return {
      width: 1 + b1 + ((b2 & 0x3f) << 8),
      height: 1 + ((b2 & 0xc0) >> 6) + (b3 << 2) + ((b4 & 0x0f) << 10),
    };
  }
  const signature = Buffer.from([0x9d, 0x01, 0x2a]);
  const index = buffer.indexOf(signature);
  if (index >= 0 && index + 7 <= buffer.length) {
    return {
      width: buffer.readUInt16LE(index + 3) & 0x3fff,
      height: buffer.readUInt16LE(index + 5) & 0x3fff,
    };
  }
  return null;
}

function svgSize(text) {
  const svgTag = text.match(/<svg\b[^>]*>/i)?.[0];
  if (!svgTag) return null;
  const viewBox = svgTag.match(/viewBox\s*=\s*["']\s*[-\d.]+\s+[-\d.]+\s+([\d.]+)\s+([\d.]+)\s*["']/i);
  if (viewBox) return { width: Number(viewBox[1]), height: Number(viewBox[2]) };
  const width = svgTag.match(/\bwidth\s*=\s*["']([\d.]+)(?:px)?["']/i);
  const height = svgTag.match(/\bheight\s*=\s*["']([\d.]+)(?:px)?["']/i);
  if (width && height) return { width: Number(width[1]), height: Number(height[1]) };
  return null;
}

function dimensionsFor(ext, buffer) {
  if (ext === ".png") return pngSize(buffer);
  if (ext === ".gif") return gifSize(buffer);
  if (ext === ".jpg" || ext === ".jpeg") return jpegSize(buffer);
  if (ext === ".webp") return webpSize(buffer);
  if (ext === ".svg") return svgSize(buffer.toString("utf8"));
  return null;
}

function csvCell(value) {
  const text = value == null ? "" : String(value);
  return `"${text.replaceAll('"', '""')}"`;
}

const files = (await walk(PUBLIC)).filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()));
const rows = [];

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const buffer = await readFile(file);
  const info = await stat(file);
  const dimensions = dimensionsFor(ext, buffer);
  rows.push({
    file: rel(file),
    url: `/${rel(file).replace(/^public\//, "")}`,
    extension: ext,
    bytes: info.size,
    width: dimensions?.width ?? null,
    height: dimensions?.height ?? null,
    megapixels:
      dimensions?.width && dimensions?.height
        ? Math.round((dimensions.width * dimensions.height) / 10000) / 100
        : null,
    ratio:
      dimensions?.width && dimensions?.height
        ? Math.round((dimensions.width / dimensions.height) * 10000) / 10000
        : null,
    dimensionStatus: dimensions ? "measured" : "unsupported-or-unreadable",
    masterStatus: "unknown",
    provenanceStatus: "unknown",
    consentStatus: "review",
  });
}

rows.sort((a, b) => b.bytes - a.bytes || a.file.localeCompare(b.file));
const unresolved = rows.filter((row) => row.dimensionStatus !== "measured");
const highPixel = rows.filter((row) => (row.megapixels ?? 0) >= 10);

const report = {
  generatedAt: new Date().toISOString(),
  imageCount: rows.length,
  measuredDimensionCount: rows.length - unresolved.length,
  unresolvedDimensionCount: unresolved.length,
  tenMegapixelOrLargerCount: highPixel.length,
  rows,
};

await mkdir(REPORT_DIR, { recursive: true });
await writeFile(path.join(REPORT_DIR, "sprint0-media-dimensions.json"), `${JSON.stringify(report, null, 2)}\n`);

const headers = [
  "file",
  "url",
  "extension",
  "bytes",
  "width",
  "height",
  "megapixels",
  "ratio",
  "dimensionStatus",
  "masterStatus",
  "provenanceStatus",
  "consentStatus",
];
const csv = [
  headers.map(csvCell).join(","),
  ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(",")),
].join("\n");
await writeFile(path.join(REPORT_DIR, "sprint0-media-dimensions.csv"), `${csv}\n`);

console.log("Sprint 0 media dimension census complete");
console.log(`MEDIA_IMAGES=${rows.length}`);
console.log(`MEDIA_DIMENSIONS_MEASURED=${rows.length - unresolved.length}`);
console.log(`MEDIA_DIMENSIONS_UNRESOLVED=${unresolved.length}`);
console.log(`MEDIA_10MP_OR_LARGER=${highPixel.length}`);
console.log("MEDIA_LARGEST_PIXEL_COUNTS");
for (const row of [...rows].sort((a, b) => (b.megapixels ?? 0) - (a.megapixels ?? 0)).slice(0, 12)) {
  console.log(`${row.width ?? "?"}x${row.height ?? "?"}\t${row.megapixels ?? "?"}MP\t${row.bytes}\t${row.file}`);
}
