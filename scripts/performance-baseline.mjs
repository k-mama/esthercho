import { execFileSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, ".reports", "performance");
const BASE_URL = process.env.PERF_BASE_URL ?? "http://127.0.0.1:4173";
const LIGHTHOUSE_BIN = path.join(ROOT, "node_modules", ".bin", "lighthouse");

const routes = [
  ["home", "/home/"],
  ["stories", "/stories/"],
  ["books", "/books/"],
  ["esther", "/about/"],
];

const modes = [
  { name: "mobile", args: [] },
  { name: "desktop", args: ["--preset=desktop"] },
];

function round(value, digits = 0) {
  if (!Number.isFinite(value)) return null;
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function auditNumeric(lhr, id) {
  const value = lhr.audits?.[id]?.numericValue;
  return Number.isFinite(value) ? value : null;
}

function resourceSummary(lhr) {
  const items = lhr.audits?.["network-requests"]?.details?.items ?? [];
  const byType = new Map();
  let totalTransferBytes = 0;
  let totalResourceBytes = 0;

  for (const item of items) {
    const type = item.resourceType || "Other";
    const current = byType.get(type) ?? {
      resourceType: type,
      requests: 0,
      transferBytes: 0,
      resourceBytes: 0,
    };
    current.requests += 1;
    current.transferBytes += Number(item.transferSize) || 0;
    current.resourceBytes += Number(item.resourceSize) || 0;
    byType.set(type, current);
    totalTransferBytes += Number(item.transferSize) || 0;
    totalResourceBytes += Number(item.resourceSize) || 0;
  }

  return {
    requestCount: items.length,
    totalTransferBytes,
    totalResourceBytes,
    byType: [...byType.values()].sort((a, b) => b.transferBytes - a.transferBytes),
    largestRequests: [...items]
      .sort((a, b) => (Number(b.transferSize) || 0) - (Number(a.transferSize) || 0))
      .slice(0, 12)
      .map((item) => ({
        url: item.url,
        resourceType: item.resourceType || "Other",
        transferBytes: Number(item.transferSize) || 0,
        resourceBytes: Number(item.resourceSize) || 0,
        statusCode: item.statusCode ?? null,
        mimeType: item.mimeType ?? null,
      })),
  };
}

function heroVideoRequests(lhr) {
  const items = lhr.audits?.["network-requests"]?.details?.items ?? [];
  return items
    .filter((item) => /esther-house-entry\.mp4(?:[?#]|$)/.test(item.url ?? ""))
    .map((item) => ({
      url: item.url,
      transferBytes: Number(item.transferSize) || 0,
      resourceBytes: Number(item.resourceSize) || 0,
      statusCode: item.statusCode ?? null,
      mimeType: item.mimeType ?? null,
    }));
}

function summarizeLhr(lhr, routeName, routePath, mode) {
  const resources = resourceSummary(lhr);
  const totalByteWeight = auditNumeric(lhr, "total-byte-weight");

  return {
    routeName,
    routePath,
    mode,
    finalDisplayedUrl: lhr.finalDisplayedUrl,
    lighthouseVersion: lhr.lighthouseVersion,
    fetchTime: lhr.fetchTime,
    performanceScore:
      typeof lhr.categories?.performance?.score === "number"
        ? round(lhr.categories.performance.score * 100, 0)
        : null,
    metrics: {
      firstContentfulPaintMs: round(auditNumeric(lhr, "first-contentful-paint"), 0),
      largestContentfulPaintMs: round(auditNumeric(lhr, "largest-contentful-paint"), 0),
      totalBlockingTimeMs: round(auditNumeric(lhr, "total-blocking-time"), 0),
      cumulativeLayoutShift: round(auditNumeric(lhr, "cumulative-layout-shift"), 4),
      speedIndexMs: round(auditNumeric(lhr, "speed-index"), 0),
      totalByteWeightBytes: round(totalByteWeight, 0),
    },
    resources,
    heroVideoRequests: heroVideoRequests(lhr),
  };
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "n/a";
  if (bytes < 1024) return `${Math.round(bytes)} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 ** 2).toFixed(2)} MB`;
}

function formatMs(ms) {
  return Number.isFinite(ms) ? `${Math.round(ms)} ms` : "n/a";
}

await mkdir(OUTPUT, { recursive: true });

const results = [];

for (const [routeName, routePath] of routes) {
  for (const mode of modes) {
    const url = new URL(routePath, BASE_URL).href;
    const reportPath = path.join(OUTPUT, `${routeName}--${mode.name}.json`);

    const args = [
      url,
      "--output=json",
      `--output-path=${reportPath}`,
      "--only-categories=performance",
      "--chrome-flags=--headless --no-sandbox --disable-gpu",
      "--quiet",
      ...mode.args,
    ];

    console.log(`LIGHTHOUSE_START\t${routeName}\t${mode.name}\t${url}`);
    execFileSync(LIGHTHOUSE_BIN, args, {
      cwd: ROOT,
      stdio: ["ignore", "inherit", "inherit"],
      env: process.env,
      maxBuffer: 10 * 1024 * 1024,
    });

    const lhr = JSON.parse(await readFile(reportPath, "utf8"));
    const summary = summarizeLhr(lhr, routeName, routePath, mode.name);
    results.push(summary);

    console.log(
      `LIGHTHOUSE_RESULT\t${routeName}\t${mode.name}\tscore=${summary.performanceScore}\tLCP=${summary.metrics.largestContentfulPaintMs}\tbytes=${summary.resources.totalTransferBytes}\trequests=${summary.resources.requestCount}`,
    );
  }
}

const homeResults = results.filter((item) => item.routeName === "home");
const report = {
  generatedAt: new Date().toISOString(),
  baseUrl: BASE_URL,
  scenarioCount: results.length,
  routes: routes.map(([name, routePath]) => ({ name, routePath })),
  modes: modes.map((mode) => mode.name),
  results,
  homeVideo: homeResults.map((item) => ({
    mode: item.mode,
    requests: item.heroVideoRequests,
  })),
};

await writeFile(
  path.join(OUTPUT, "summary.json"),
  `${JSON.stringify(report, null, 2)}\n`,
);

const tableRows = results
  .map(
    (item) =>
      `| ${item.routeName} | ${item.mode} | ${item.performanceScore ?? "n/a"} | ${formatMs(item.metrics.firstContentfulPaintMs)} | ${formatMs(item.metrics.largestContentfulPaintMs)} | ${formatMs(item.metrics.totalBlockingTimeMs)} | ${item.metrics.cumulativeLayoutShift ?? "n/a"} | ${formatMs(item.metrics.speedIndexMs)} | ${formatBytes(item.resources.totalTransferBytes)} | ${item.resources.requestCount} |`,
  )
  .join("\n");

const homeVideoLines = homeResults
  .map((item) => {
    if (item.heroVideoRequests.length === 0) {
      return `- HOME ${item.mode}: no MP4 request recorded during the Lighthouse observation window.`;
    }
    return item.heroVideoRequests
      .map(
        (request) =>
          `- HOME ${item.mode}: HERO MP4 transfer ${formatBytes(request.transferBytes)} / resource ${formatBytes(request.resourceBytes)} (${request.statusCode ?? "status n/a"}).`,
      )
      .join("\n");
  })
  .join("\n");

const largestHomeLines = homeResults
  .map((item) => {
    const lines = item.resources.largestRequests
      .slice(0, 8)
      .map(
        (request) =>
          `  - ${formatBytes(request.transferBytes)} — ${request.resourceType} — ${request.url}`,
      )
      .join("\n");
    return `- HOME ${item.mode}\n${lines}`;
  })
  .join("\n");

const markdown = `# Performance baseline\n\nGenerated: ${report.generatedAt}\n\nThis is a Sprint 0 Lighthouse observation baseline against the locally served production static export. It is not a live Cloudflare measurement and is not yet a CI pass/fail budget. Shared GitHub runners are noisy, so these numbers are directional baselines rather than contractual thresholds.\n\n## Scenario matrix\n\n| Route | Mode | Perf | FCP | LCP | TBT | CLS | Speed Index | Transfer | Requests |\n| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n${tableRows}\n\n## HOME HERO video observation\n\n${homeVideoLines}\n\n## Largest HOME requests\n\n${largestHomeLines}\n\n## Interpretation rule\n\nDo not optimize by deleting the real-house HERO. Performance work must preserve the HOME video identity while improving poster/LCP behavior, preload policy, encoding, and delivery strategy.\n`;

await writeFile(path.join(OUTPUT, "summary.md"), markdown);

console.log(`PERF_SCENARIOS=${results.length}`);
for (const item of results) {
  console.log(
    `PERF_SUMMARY\t${item.routeName}\t${item.mode}\tscore=${item.performanceScore}\tFCP=${item.metrics.firstContentfulPaintMs}\tLCP=${item.metrics.largestContentfulPaintMs}\tTBT=${item.metrics.totalBlockingTimeMs}\tCLS=${item.metrics.cumulativeLayoutShift}\ttransfer=${item.resources.totalTransferBytes}`,
  );
}
