// Static-export correction: Next.js root layout has English html[lang].
// Every exported localized HTML document must declare its actual language.
import { readFile, writeFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const locales = {
  "de": "de", "pt-br": "pt-BR", "es": "es",
  "fr": "fr", "it": "it", "ja": "ja",
};
const root = "out";
let rewritten = 0;
for (const [locale, lang] of Object.entries(locales)) {
  async function visit(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) await visit(path);
      if (!entry.isFile() || !entry.name.endsWith(".html")) continue;
      const html = await readFile(path, "utf8");
      const matches = html.match(/<html lang="en"/g) ?? [];
      if (matches.length !== 1) {
        throw Error(`Unexpected root HTML language in ${path}: ${matches.length}`);
      }
      await writeFile(path, html.replace('<html lang="en"', `<html lang="${lang}"`));
      rewritten++;
    }
  }
  await visit(join(root, locale));
}
if (rewritten < 42) {
  throw Error(`Expected at least 42 localized HTML pages, got ${rewritten}`);
}
console.log(`Localized HTML lang attributes verified: ${rewritten} pages`);
