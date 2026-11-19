import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDir = path.join(process.cwd(), "out");
const locales = new Set(["ko", "de", "es", "fr", "it", "ja", "pt-br", "zh-cn", "zh-tw"]);
const counts = Object.fromEntries([...locales].map((locale) => [locale, 0]));

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
      continue;
    }
    if (!entry.isFile() || entry.name !== "index.html") continue;
    const relative = path.relative(outputDir, full).split(path.sep);
    const locale = relative[0];
    if (!locales.has(locale)) continue;
    const original = await readFile(full, "utf8");
    const rootTag = /<html\b[^>]*>/i.exec(original)?.[0];
    if (!rootTag) throw new Error(`Missing HTML root tag: ${full}`);
    const htmlLang = locale === "pt-br" ? "pt-BR" : locale === "zh-cn" ? "zh-Hans" : locale === "zh-tw" ? "zh-Hant" : locale;
    if (!/\blang="en"/.test(rootTag) && !new RegExp(`\\blang="${htmlLang}"`).test(rootTag)) {
      throw new Error(`Unexpected root language in ${full}: ${rootTag.slice(0, 120)}`);
    }
    const fixed = original.replace(rootTag, rootTag.replace(/\blang="(?:en|ko|de|es|fr|it|ja|pt-BR|pt-br|zh-cn|zh-tw|zh-Hans|zh-Hant)"/, `lang="${htmlLang}"`));
    if (fixed !== original) await writeFile(full, fixed);
    counts[locale] += 1;
  }
}
await walk(outputDir);
for (const [locale, count] of Object.entries(counts)) {
  console.log(`LOCALE_HTML_LANG ${locale} ${count}`);
  if (count === 0) throw new Error(`No generated HTML pages for locale ${locale}`);
}
