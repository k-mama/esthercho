// Individual PT-BR localization gate: seven main routes plus two fully translated stories.
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const home = "out/pt-br/index.html";
const checks = [
  { room: "", snippets: ["BOAS-VINDAS À CASA DE ESTHER", "Uma casa de histórias", "Café da manhã"], links: ["/pt-br/books/", "/pt-br/notes/", "/pt-br/archive/"] },
  { room: "stories", snippets: ["Meu pai sonhou com um tigre", "O resto não foi inventado.", "Ler a história", "História registrada"], links: ["/pt-br/stories/my-father-dreamed-of-a-tiger/","/pt-br/stories/the-youngest-daughter-in-every-house/"] },
  { room: "books", snippets: ["Große Träume in allen Farben", "MANUSCRITO EM ANDAMENTO", "Maná para esta manhã"], links: ["https://www.amazon.com/dp/B0HQ9Z7SRD", "https://www.amazon.de/dp/B0HRS6F2MH"] },
  { room: "studio", snippets: ["Desenhado à mão", "Releitura editorial posterior"], links: ["/pt-br/about/"] },
  { room: "about", snippets: ["Cho Sungyeon", "1985", "1988", "1992", "1999", "disciplinas do mestrado", "Bangladesh"], links: ["https://www.amazon.com/author/sungyeoncho"] },
  { room: "notes", snippets: ["Mesa da manhã", "Dessas manhãs está nascendo um livro."], links: ["/pt-br/books/"] },
  { room: "archive", snippets: ["Álbum de infância", "As fotos antigas continuam"], links: ["/pt-br/stories/"] },
  { room: "stories/my-father-dreamed-of-a-tiger", snippets: ["Antes de eu nascer", "Deve ter sido um gato.", "A PRÓXIMA HISTÓRIA"], links: ["/pt-br/stories/the-youngest-daughter-in-every-house/"] },
  { room: "stories/the-youngest-daughter-in-every-house", snippets: ["Em casa, eu era a filha mais velha.", "Pelo visto, a admiração", "NOTA DO ARQUIVO"], links: ["/pt-br/stories/"] },
];
let passed = 0;
for (const item of checks) {
  const path = join("out", "pt-br", item.room, "index.html");
  const html = await readFile(path, "utf8");
  const lower = html.toLowerCase();
  if (!html.includes('<html lang="pt-BR"')) throw Error(`[pt-BR] Wrong document language: ${path}`);
  if (!html.includes('rel="canonical"')) throw Error(`[pt-BR] Missing canonical: ${path}`);
  if (!lower.includes('hreflang="pt-br"')) throw Error(`[pt-BR] Missing reciprocal hreflang: ${path}`);
  if (!html.includes('Site oficial da autora Esther Cho')) throw Error(`[pt-BR] Footer not localized: ${path}`);
  for (const text of item.snippets) {
    if (!html.includes(text)) throw Error(`[pt-BR] Missing text ${JSON.stringify(text)}: ${path}`);
  }
  for (const href of item.links) {
    if (!html.includes(href)) throw Error(`[pt-BR] Broken/missing local or buying link ${href}: ${path}`);
  }
  if (!html.includes('alt="')) throw Error(`[pt-BR] Missing image alternative text: ${path}`);
  if (item.room === "books") {
    if ((html.match(/<video[\s>]/g) ?? []).length < 3) throw Error("Three original trailers must remain on PT-BR Books");
    if (!html.includes("61IlRaRs5SL")) throw Error("Original German edition cover missing");
    if (!html.includes("Torradas francesas")) throw Error("Breakfast photo description not localized");
  }
  if (item.room === "about" && !html.includes("Esther Cho em pé diante de uma janela")) throw Error("Author photo alt mismatch");
  if (item.room.startsWith("stories/")) {
    const englishPath = "/" + item.room.replace(/^stories\//, "stories/") + "/";
    if (!html.includes(`href="${englishPath}"`)) throw Error(`[pt-BR] Story language toggle must preserve article: ${path}`);
  }
  if (item.room === "stories" && !html.includes("Esther Cho sentada em uma poltrona")) throw Error("Stories photo alt mismatch");
  passed++;
}
const base = await readFile(home, "utf8");
if (!base.includes('href="/pt-br/stories/"') || !base.includes('href="/pt-br/notes/"')) throw Error("Homepage is missing room navigation");
console.log(`PT-BR editorial & export audit: ${passed} / 9 pages passed`);
