import { readFile } from "node:fs/promises";
import { join } from "node:path";
const locales = { de:"de", "pt-br":"pt-BR", es:"es", fr:"fr", it:"it", ja:"ja" };
const rooms = ["", "stories", "books", "studio", "about", "notes", "archive"];
const root = "out";
let passed=0;
for(const [locale,lang] of Object.entries(locales)) {
  for(const room of rooms) {
    const path = join(root, locale, room, "index.html");
    const html=await readFile(path, "utf8");
    if(!html.includes(`<html lang="${lang}"`)) throw Error(`Wrong lang: ${path}`);
    if(!html.includes(`rel="canonical"`)) throw Error(`Missing canonical: ${path}`);
    if(!html.includes(`hreflang="pt-BR"`)) throw Error(`Missing pt-BR alternate: ${path}`);
    if(html.includes("잠금된 영문")) throw Error(`Leaked editorial jargon: ${path}`);
    if(!html.includes("Esther Cho")) throw Error(`Missing author brand: ${path}`);
    passed++;
  }
}
console.log(`Verified ${passed} localized static HTML pages`);
