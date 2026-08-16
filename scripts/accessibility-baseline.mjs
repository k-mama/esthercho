import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, ".reports", "accessibility");
const BASE_URL = process.env.A11Y_BASE_URL ?? "http://127.0.0.1:4173";

const routes = [
  ["home-en", "/home/", "en"],
  ["home-ko", "/ko/home/", "ko"],
  ["stories-en", "/stories/", "en"],
  ["stories-ko", "/ko/stories/", "ko"],
  ["story-tiger-en", "/stories/my-father-dreamed-of-a-tiger/", "en"],
  ["story-youngest-en", "/stories/the-youngest-daughter-in-every-house/", "en"],
  ["morning-table-en", "/notes/", "en"],
  ["morning-table-ko", "/ko/notes/", "ko"],
  ["childhood-en", "/archive/", "en"],
  ["childhood-ko", "/ko/archive/", "ko"],
  ["books-en", "/books/", "en"],
  ["books-ko", "/ko/books/", "ko"],
  ["studio-en", "/studio/", "en"],
  ["studio-ko", "/ko/studio/", "ko"],
  ["esther-en", "/about/", "en"],
  ["esther-ko", "/ko/about/", "ko"],
];

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1440, height: 1000 },
];

const wcagTags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

function impactRank(impact) {
  return { critical: 4, serious: 3, moderate: 2, minor: 1, null: 0 }[impact ?? "null"] ?? 0;
}

function simplifyViolation(violation) {
  return {
    id: violation.id,
    impact: violation.impact,
    help: violation.help,
    helpUrl: violation.helpUrl,
    tags: violation.tags,
    nodes: violation.nodes.map((node) => ({
      impact: node.impact,
      target: node.target,
      failureSummary: node.failureSummary ?? null,
    })),
  };
}

function fingerprint(violation) {
  return {
    rule: violation.id,
    impact: violation.impact,
    targets: violation.nodes.map((node) => node.target),
  };
}

await mkdir(OUTPUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const scans = [];
const keyboardChecks = [];

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      colorScheme: "light",
      locale: "en-US",
    });

    for (const [routeName, routePath, expectedLang] of routes) {
      const page = await context.newPage();

      // Keep HOME deterministic and light: poster remains, video payload does not load.
      await page.route("**/*", async (route) => {
        if (route.request().resourceType() === "media") {
          await route.abort();
          return;
        }
        await route.continue();
      });

      const pageUrl = new URL(routePath, BASE_URL).href;
      const response = await page.goto(pageUrl, { waitUntil: "domcontentloaded" });
      if (!response || !response.ok()) {
        throw new Error(`${routePath} returned ${response?.status() ?? "no response"}`);
      }

      await page.evaluate(async () => {
        for (const video of document.querySelectorAll("video")) video.pause();
        if (document.fonts?.ready) await document.fonts.ready;
      });

      // Give client-side language synchronization one event loop turn.
      await page.waitForTimeout(50);

      const structural = await page.evaluate(({ expectedLang }) => {
        const h1Count = document.querySelectorAll("h1").length;
        const mainCount = document.querySelectorAll("main").length;
        const skipLink = document.querySelector('a[href="#main-content"]');
        const skipTarget = document.querySelector("#main-content");
        const lang = document.documentElement.lang;
        return {
          expectedLang,
          actualLang: lang,
          langMatches: lang === expectedLang,
          h1Count,
          mainCount,
          skipLinkExists: Boolean(skipLink),
          skipTargetExists: Boolean(skipTarget),
          skipTargetProgrammaticallyFocusable:
            skipTarget instanceof HTMLElement ? skipTarget.tabIndex >= -1 : false,
        };
      }, { expectedLang });

      const axeResults = await new AxeBuilder({ page })
        .withTags(wcagTags)
        .analyze();

      const violations = axeResults.violations
        .map(simplifyViolation)
        .sort((a, b) => impactRank(b.impact) - impactRank(a.impact) || a.id.localeCompare(b.id));

      const incomplete = axeResults.incomplete.map((item) => ({
        id: item.id,
        impact: item.impact,
        help: item.help,
        nodeCount: item.nodes.length,
      }));

      scans.push({
        routeName,
        routePath,
        viewport: viewport.name,
        structural,
        violationCount: violations.length,
        violationNodeCount: violations.reduce((sum, item) => sum + item.nodes.length, 0),
        violations,
        fingerprints: violations.map(fingerprint),
        incompleteCount: incomplete.length,
        incomplete,
      });

      console.log(
        `A11Y\t${routeName}\t${viewport.name}\tviolations=${violations.length}\tnodes=${violations.reduce((sum, item) => sum + item.nodes.length, 0)}\tincomplete=${incomplete.length}`,
      );

      if (viewport.name === "mobile" && (routeName === "home-en" || routeName === "home-ko")) {
        const details = page.locator(".site-header-nav-mobile details");
        const summary = page.locator(".site-header-nav-mobile summary");

        await page.keyboard.press("Home").catch(() => undefined);
        await page.locator("body").focus().catch(() => undefined);
        await page.keyboard.press("Tab");
        const firstTab = await page.evaluate(() => ({
          tag: document.activeElement?.tagName ?? null,
          className: document.activeElement instanceof HTMLElement ? document.activeElement.className : null,
          href: document.activeElement instanceof HTMLAnchorElement ? document.activeElement.getAttribute("href") : null,
          text: document.activeElement?.textContent?.trim() ?? null,
        }));

        await summary.focus();
        await page.keyboard.press("Enter");
        const openedByKeyboard = await details.evaluate((element) => element.hasAttribute("open"));
        const menuVisible = await page.locator(".site-header-nav-mobile-menu").isVisible();

        const openMenuResults = await new AxeBuilder({ page })
          .include(".site-header-nav-mobile-menu")
          .withTags(wcagTags)
          .analyze();

        await page.keyboard.press("Tab");
        const firstFocusAfterOpen = await page.evaluate(() => ({
          tag: document.activeElement?.tagName ?? null,
          href: document.activeElement instanceof HTMLAnchorElement ? document.activeElement.getAttribute("href") : null,
          text: document.activeElement?.textContent?.trim() ?? null,
        }));

        await page.keyboard.press("Escape");
        const closesOnEscape = !(await details.evaluate((element) => element.hasAttribute("open")));

        keyboardChecks.push({
          routeName,
          firstTab,
          openedByKeyboard,
          menuVisible,
          openMenuViolationCount: openMenuResults.violations.length,
          openMenuFingerprints: openMenuResults.violations.map(fingerprint),
          firstFocusAfterOpen,
          closesOnEscape,
        });

        console.log(
          `KEYBOARD\t${routeName}\tfirstTab=${firstTab.href ?? firstTab.tag}\tmenuOpen=${openedByKeyboard}\tescapeClose=${closesOnEscape}`,
        );
      }

      await page.close();
    }

    await context.close();
  }
} finally {
  await browser.close();
}

const ruleMap = new Map();
for (const scan of scans) {
  for (const violation of scan.violations) {
    const record = ruleMap.get(violation.id) ?? {
      id: violation.id,
      impact: violation.impact,
      help: violation.help,
      helpUrl: violation.helpUrl,
      occurrences: [],
      totalNodes: 0,
    };
    record.totalNodes += violation.nodes.length;
    record.occurrences.push({
      routeName: scan.routeName,
      routePath: scan.routePath,
      viewport: scan.viewport,
      targets: violation.nodes.map((node) => node.target),
    });
    ruleMap.set(violation.id, record);
  }
}

const ruleSummary = [...ruleMap.values()].sort(
  (a, b) => impactRank(b.impact) - impactRank(a.impact) || b.totalNodes - a.totalNodes || a.id.localeCompare(b.id),
);

const structuralFindings = scans.flatMap((scan) => {
  const findings = [];
  if (!scan.structural.langMatches) findings.push("html-lang-mismatch");
  if (scan.structural.h1Count !== 1) findings.push(`h1-count-${scan.structural.h1Count}`);
  if (scan.structural.mainCount !== 1) findings.push(`main-count-${scan.structural.mainCount}`);
  if (!scan.structural.skipLinkExists) findings.push("missing-skip-link");
  if (!scan.structural.skipTargetExists) findings.push("missing-skip-target");
  return findings.map((finding) => ({
    routeName: scan.routeName,
    routePath: scan.routePath,
    viewport: scan.viewport,
    finding,
  }));
});

const report = {
  generatedAt: new Date().toISOString(),
  standardTags: wcagTags,
  routeCount: routes.length,
  viewportCount: viewports.length,
  scanCount: scans.length,
  uniqueViolationRuleCount: ruleSummary.length,
  violationOccurrenceCount: scans.reduce((sum, scan) => sum + scan.violationCount, 0),
  violationNodeCount: scans.reduce((sum, scan) => sum + scan.violationNodeCount, 0),
  incompleteOccurrenceCount: scans.reduce((sum, scan) => sum + scan.incompleteCount, 0),
  structuralFindingCount: structuralFindings.length,
  structuralFindings,
  keyboardChecks,
  rules: ruleSummary,
  scans,
};

await writeFile(
  path.join(OUTPUT, "baseline.json"),
  `${JSON.stringify(report, null, 2)}\n`,
);

const ruleLines = ruleSummary.length
  ? ruleSummary
      .map(
        (rule) =>
          `- ${rule.id} [${rule.impact ?? "unknown"}] — ${rule.totalNodes} node(s), ${rule.occurrences.length} route/viewport occurrence(s) — ${rule.help}`,
      )
      .join("\n")
  : "- No automatically detectable WCAG A/AA violations were found by this scan.";

const structuralLines = structuralFindings.length
  ? structuralFindings
      .map((item) => `- ${item.routeName} / ${item.viewport}: ${item.finding}`)
      .join("\n")
  : "- No structural findings from the custom checks.";

const keyboardLines = keyboardChecks
  .map(
    (item) =>
      `- ${item.routeName}: first Tab → ${item.firstTab.href ?? item.firstTab.tag}; menu opened by Enter=${item.openedByKeyboard}; visible=${item.menuVisible}; open-menu axe violations=${item.openMenuViolationCount}; Escape closes=${item.closesOnEscape}; first focus after open=${item.firstFocusAfterOpen.href ?? item.firstFocusAfterOpen.tag}`,
  )
  .join("\n");

const markdown = `# Accessibility baseline\n\nGenerated: ${report.generatedAt}\n\nThis is a Sprint 0 observation baseline. Existing violations do not fail the build yet. Automated accessibility testing does not replace manual keyboard, screen-reader, motion, and cognitive review.\n\n## Coverage\n\n- Routes: ${report.routeCount}\n- Viewports: ${report.viewportCount} (390px mobile, 1440px desktop)\n- Axe scans: ${report.scanCount}\n- WCAG tags: ${wcagTags.join(", ")}\n\n## Summary\n\n- Unique automatically detected violation rules: ${report.uniqueViolationRuleCount}\n- Violation occurrences across route/viewport scans: ${report.violationOccurrenceCount}\n- Violating nodes across scans: ${report.violationNodeCount}\n- Incomplete/manual-review occurrences reported by axe: ${report.incompleteOccurrenceCount}\n- Custom structural findings: ${report.structuralFindingCount}\n\n## Violation rules\n\n${ruleLines}\n\n## Custom structural findings\n\n${structuralLines}\n\n## Keyboard observations\n\n${keyboardLines || "- No keyboard observations captured."}\n`;

await writeFile(path.join(OUTPUT, "baseline.md"), markdown);

console.log(`A11Y_SCANS=${report.scanCount}`);
console.log(`A11Y_UNIQUE_RULES=${report.uniqueViolationRuleCount}`);
console.log(`A11Y_VIOLATION_OCCURRENCES=${report.violationOccurrenceCount}`);
console.log(`A11Y_VIOLATION_NODES=${report.violationNodeCount}`);
console.log(`A11Y_INCOMPLETE_OCCURRENCES=${report.incompleteOccurrenceCount}`);
console.log(`A11Y_STRUCTURAL_FINDINGS=${report.structuralFindingCount}`);
console.log("A11Y_RULE_SUMMARY");
for (const rule of ruleSummary) {
  console.log(`${rule.impact ?? "unknown"}\t${rule.id}\tnodes=${rule.totalNodes}\toccurrences=${rule.occurrences.length}`);
}
