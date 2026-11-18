// Staging-only Italian-language content & static HTML test: 7 rooms + 2 full stories.
// Passing this check is not equivalent to independent native Italian proofreading.
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const pages = [
  { route: "", phrases: ["BENVENUTI A CASA DI ESTHER", "Una casa piena di storie e ricordi", "Un versetto accanto alla colazione"], links: ["/it/books/", "/it/stories/", "/it/notes/"] },
  { route: "stories", phrases: ["Mio padre sognò una tigre", "La più piccola di ogni casa", "Leggi il racconto", "Ricordo annotato"], links: ["/it/stories/my-father-dreamed-of-a-tiger/", "/it/stories/the-youngest-daughter-in-every-house/"] },
  { route: "books", phrases: ["Big Dreams in Every Color", "Große Träume in allen Farben", "MANOSCRITTO IN LAVORAZIONE", "La manna di questa mattina"], links: ["https://www.amazon.com/dp/B0HQ9Z7SRD", "https://www.amazon.de/dp/B0HRS6F2MH"] },
  { route: "studio", phrases: ["Disegnato a mano", "Reinterpretazione editoriale successiva"], links: ["/it/about/"] },
  { route: "about", phrases: ["Cho Sungyeon", "1985", "1988", "1992", "1999", "insegnamenti del corso di laurea magistrale", "Bangladesh"], links: ["https://www.amazon.com/author/sungyeoncho"] },
  { route: "notes", phrases: ["La tavola del mattino", "Da queste mattine sta nascendo un libro"], links: ["/it/books/"] },
  { route: "archive", phrases: ["L’album dell’infanzia", "Le vecchie fotografie restano autentiche"], links: ["/it/stories/"] },
  { route: "stories/my-father-dreamed-of-a-tiger", phrases: ["Prima che nascessi", "Dev’essere stato un gatto", "NOTA D’ARCHIVIO"], links: ["/it/stories/the-youngest-daughter-in-every-house/", "/stories/my-father-dreamed-of-a-tiger/"] },
  { route: "stories/the-youngest-daughter-in-every-house", phrases: ["A casa ero la figlia maggiore", "tic, tic, tic", "l’ammirazione diventi", "NOTA D’ARCHIVIO"], links: ["/it/stories/", "/stories/the-youngest-daughter-in-every-house/"] },
];
let ok = 0;
for (const item of pages) {
  const filename = join("out", "it", item.route, "index.html");
  const html = await readFile(filename, "utf8");
  if (!html.includes('<html lang="it"')) throw Error("Wrong Italian document language: " + filename);
  if (!html.includes('rel="canonical"')) throw Error("Missing canonical tag: " + filename);
  if (!html.toLowerCase().includes('hreflang="it"')) throw Error("Missing Italian reciprocal alternate: " + filename);
  if (!html.includes("Sito ufficiale dell’autrice Esther Cho")) throw Error("Footer not translated: " + filename);
  if (!html.includes('alt="')) throw Error("No image alternative description: " + filename);
  for (const phrase of item.phrases) {
    if (!html.includes(phrase)) throw Error("Missing Italian content " + JSON.stringify(phrase) + " in " + filename);
  }
  for (const href of item.links) {
    if (!html.includes(href)) throw Error("Missing link " + href + " in " + filename);
  }
  if (item.route === "books") {
    if ((html.match(/<video[\s>]/g) ?? []).length < 3) throw Error("Missing picture-book trailers");
    if (!html.includes("61IlRaRs5SL")) throw Error("Real German paperback cover missing");
    if (!html.includes("French toast con frutti di bosco")) throw Error("Original breakfast photo Italian descriptions missing");
  }
  if (item.route === "stories" && !html.includes("Esther Cho seduta in una poltrona chiara")) throw Error("Stories photo alt description missing");
  if (item.route === "about" && !html.includes("Esther Cho in piedi davanti a una grande finestra")) throw Error("About photo alt description missing");
  ok++;
}
const home = await readFile("out/it/index.html", "utf8");
if (!home.includes("Acquista l’edizione in inglese")) throw Error("Honest purchase CTA missing");
if (!home.includes("https://www.amazon.com/dp/B0HQ9Z7SRD")) throw Error("English published edition link missing");
if ((home.match(/<video[\s>]/g) ?? []).length < 4) throw Error("Need original house entry video and 3 promotions");
console.log(`Italian staging content/HTML audit: ${ok}/9 passed`);
