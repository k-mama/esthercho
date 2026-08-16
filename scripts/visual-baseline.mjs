import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, ".reports", "visual-structural");
const BASE_URL = process.env.VISUAL_BASE_URL ?? "http://127.0.0.1:4173";

const routes = [
  ["home-en", "/home/"],
  ["home-ko", "/ko/home/"],
  ["stories-en", "/stories/"],
  ["stories-ko", "/ko/stories/"],
  ["story-tiger-en", "/stories/my-father-dreamed-of-a-tiger/"],
  ["morning-table-en", "/notes/"],
  ["morning-table-ko", "/ko/notes/"],
  ["childhood-en", "/archive/"],
  ["childhood-ko", "/ko/archive/"],
  ["books-en", "/books/"],
  ["books-ko", "/ko/books/"],
  ["studio-en", "/studio/"],
  ["studio-ko", "/ko/studio/"],
  ["esther-en", "/about/"],
  ["esther-ko", "/ko/about/"],
];

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 1000 },
];

const deterministicCss = `
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
    caret-color: transparent !important;
  }
  video {
    background: #d8e0e6 !important;
  }
`;

function screenshotName(routeName, viewportName) {
  return `${routeName}--${viewportName}.jpg`;
}

await mkdir(OUTPUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = [];

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      colorScheme: "light",
      locale: "en-US",
    });

    for (const [routeName, routePath] of routes) {
      const page = await context.newPage();

      // Video payloads are not needed for structural screenshots. Images are allowed
      // to resolve first so their true intrinsic aspect ratios can be preserved.
      await page.route("**/*", async (route) => {
        if (route.request().resourceType() === "media") {
          await route.abort();
          return;
        }
        await route.continue();
      });

      const pageUrl = new URL(routePath, BASE_URL).href;
      const response = await page.goto(pageUrl, {
        waitUntil: "domcontentloaded",
      });

      if (!response || !response.ok()) {
        throw new Error(`${routePath} returned ${response?.status() ?? "no response"}`);
      }

      await page.addStyleTag({ content: deterministicCss });
      await page.evaluate(async () => {
        const makePlaceholder = (width, height) => {
          const sourceWidth = Math.max(1, Number(width) || 64);
          const sourceHeight = Math.max(1, Number(height) || 64);
          const ratio = sourceWidth / sourceHeight;
          const maxEdge = 256;
          const safeWidth = ratio >= 1 ? maxEdge : Math.max(1, Math.round(maxEdge * ratio));
          const safeHeight = ratio >= 1 ? Math.max(1, Math.round(maxEdge / ratio)) : maxEdge;
          const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${safeWidth}" height="${safeHeight}" viewBox="0 0 ${safeWidth} ${safeHeight}"><rect width="100%" height="100%" fill="#d8e0e6"/></svg>`;
          return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
        };

        const images = [...document.images];
        for (const image of images) {
          const rect = image.getBoundingClientRect();
          const width =
            image.naturalWidth ||
            Number(image.getAttribute("width")) ||
            Math.round(rect.width) ||
            64;
          const height =
            image.naturalHeight ||
            Number(image.getAttribute("height")) ||
            Math.round(rect.height) ||
            64;

          image.removeAttribute("srcset");
          image.removeAttribute("sizes");
          image.src = makePlaceholder(width, height);
        }

        for (const video of document.querySelectorAll("video")) {
          const rect = video.getBoundingClientRect();
          video.pause();
          video.removeAttribute("autoplay");
          video.removeAttribute("src");
          for (const source of video.querySelectorAll("source")) source.removeAttribute("src");
          video.poster = makePlaceholder(
            Number(video.getAttribute("width")) || Math.round(rect.width) || 1600,
            Number(video.getAttribute("height")) || Math.round(rect.height) || 900,
          );
          video.load();
        }

        if (document.fonts?.ready) await document.fonts.ready;
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        window.scrollTo(0, 0);
      });

      const metrics = await page.evaluate(() => {
        const html = document.documentElement;
        const body = document.body;
        const h1 = document.querySelector("h1");
        const firstH2 = document.querySelector("h2");
        const main = document.querySelector("main");
        const header = document.querySelector(".site-header");

        const styleOf = (element) => {
          if (!element) return null;
          const style = getComputedStyle(element);
          return {
            fontFamily: style.fontFamily,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            lineHeight: style.lineHeight,
            letterSpacing: style.letterSpacing,
          };
        };

        const rectOf = (element) => {
          if (!element) return null;
          const rect = element.getBoundingClientRect();
          return {
            x: Math.round(rect.x * 100) / 100,
            y: Math.round(rect.y * 100) / 100,
            width: Math.round(rect.width * 100) / 100,
            height: Math.round(rect.height * 100) / 100,
          };
        };

        return {
          title: document.title,
          lang: html.lang,
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight,
          scrollWidth: html.scrollWidth,
          scrollHeight: html.scrollHeight,
          bodyScrollWidth: body.scrollWidth,
          horizontalOverflow: Math.max(html.scrollWidth, body.scrollWidth) - window.innerWidth,
          h1Text: h1?.textContent?.trim() ?? null,
          h1Style: styleOf(h1),
          firstH2Style: styleOf(firstH2),
          headerRect: rectOf(header),
          mainRect: rectOf(main),
        };
      });

      const outputPath = path.join(OUTPUT, screenshotName(routeName, viewport.name));
      await page.screenshot({
        path: outputPath,
        type: "jpeg",
        quality: 82,
        fullPage: true,
        animations: "disabled",
      });

      results.push({
        routeName,
        routePath,
        viewport,
        screenshot: path.relative(ROOT, outputPath).split(path.sep).join("/"),
        metrics,
      });

      console.log(
        `CAPTURED\t${routeName}\t${viewport.name}\toverflow=${metrics.horizontalOverflow}`,
      );

      await page.close();
    }

    await context.close();
  }
} finally {
  await browser.close();
}

const overflowFindings = results.filter((item) => item.metrics.horizontalOverflow > 1);
const summary = {
  generatedAt: new Date().toISOString(),
  baseUrl: BASE_URL,
  routeCount: routes.length,
  viewportCount: viewports.length,
  screenshotCount: results.length,
  overflowFindingCount: overflowFindings.length,
  overflowFindings: overflowFindings.map((item) => ({
    routeName: item.routeName,
    routePath: item.routePath,
    viewport: item.viewport.name,
    pixels: item.metrics.horizontalOverflow,
  })),
  captures: results,
};

await writeFile(
  path.join(OUTPUT, "metrics.json"),
  `${JSON.stringify(summary, null, 2)}\n`,
);

await writeFile(
  path.join(OUTPUT, "README.md"),
  `# Structural visual baseline\n\nGenerated: ${summary.generatedAt}\n\n- Routes: ${summary.routeCount}\n- Viewports: ${summary.viewportCount}\n- Screenshots: ${summary.screenshotCount}\n- Horizontal overflow findings (>1px): ${summary.overflowFindingCount}\n\nImages are replaced after their intrinsic aspect ratios are known, using normalized neutral placeholders with a maximum edge of 256px. Video payloads are disabled and represented by a neutral poster. These captures preserve layout, typography, spacing, and responsive structure; they are not editorial photo references.\n`,
);

console.log(`VISUAL_SCREENSHOTS=${results.length}`);
console.log(`VISUAL_OVERFLOW_FINDINGS=${overflowFindings.length}`);
