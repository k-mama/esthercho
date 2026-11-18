// Stage-only Latin American Spanish gate: 7 rooms and 2 complete story articles.
// This is not an endorsement by an independent native proofreader.
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const routes = [
  { path: "", words: ["BIENVENIDOS A CASA DE ESTHER", "Una casa llena de historias y recuerdos", "La mesa"], links: ["/es/stories/", "/es/books/", "/es/notes/"] },
  { path: "stories", words: ["Mi padre soñó con un tigre", "No se ha inventado el resto", "Leer la historia", "Recuerdo registrado"], links: ["/es/stories/my-father-dreamed-of-a-tiger/", "/es/stories/the-youngest-daughter-in-every-house/"] },
  { path: "books", words: ["Big Dreams in Every Color", "Große Träume in allen Farben", "MANUSCRITO EN PREPARACIÓN", "Maná para esta mañana"], links: ["https://www.amazon.com/dp/B0HQ9Z7SRD","https://www.amazon.de/dp/B0HRS6F2MH"] },
  { path: "studio", words: ["Dibujado a mano", "Reinterpretación editorial posterior"], links: ["/es/about/"] },
  { path: "about", words: ["Cho Sungyeon", "1985", "1988", "1992", "1999", "cursos del programa de maestría", "Bangladés"], links: ["https://www.amazon.com/author/sungyeoncho"] },
  { path: "notes", words: ["La mesa de cada mañana", "De esas mañanas está naciendo un libro"], links: ["/es/books/"] },
  { path: "archive", words: ["Álbum de infancia", "Las fotos antiguas conservan su historia"], links: ["/es/stories/"] },
  { path: "stories/my-father-dreamed-of-a-tiger", words: ["Antes de que yo naciera", "Debió de haber sido un gato", "NOTA DEL ARCHIVO"], links: ["/es/stories/the-youngest-daughter-in-every-house/", "/stories/my-father-dreamed-of-a-tiger/"] },
  { path: "stories/the-youngest-daughter-in-every-house", words: ["En mi casa, yo era la hija mayor", "tic, tic, tic", "la admiración puede convertirse", "NOTA DEL ARCHIVO"], links: ["/es/stories/", "/stories/the-youngest-daughter-in-every-house/"] },
];

let count = 0;
for (const route of routes) {
  const file = join("out", "es", route.path, "index.html");
  const html = await readFile(file, "utf8");
  if (!html.includes('<html lang="es"')) throw Error("Wrong language: " + file);
  if (!html.includes('rel="canonical"')) throw Error("No canonical: " + file);
  if (!html.toLowerCase().includes('hreflang="es"')) throw Error("No es alternate: " + file);
  if (!html.includes('Sitio oficial de la autora Esther Cho')) throw Error("Footer not localized: " + file);
  if (!html.includes('alt="')) throw Error("Missing image alt: " + file);
  for (const phrase of route.words) {
    if (!html.includes(phrase)) throw Error("Missing Spanish content: " + phrase + " (" + file + ")");
  }
  for (const link of route.links) {
    if (!html.includes(link)) throw Error("Missing link: " + link + " (" + file + ")");
  }
  if (route.path === "books") {
    if ((html.match(/<video[\s>]/g) ?? []).length < 3) throw Error("Three promotional videos missing");
    if (!html.includes("61IlRaRs5SL")) throw Error("Verified German cover missing");
    if (!html.includes("Tostadas francesas")) throw Error("Breakfast photo descriptions missing");
  }
  if (route.path === "about" && !html.includes("Esther Cho de pie frente a una ventana")) throw Error("About portrait description mismatch");
  if (route.path === "stories" && !html.includes("Esther Cho sentada junto a una pared de piedra")) throw Error("Stories portrait description mismatch");
  count++;
}
const home = await readFile("out/es/index.html", "utf8");
if (!home.includes("Comprar la edición en inglés")) throw Error("Direct-buy action missing");
if ((home.match(/<video[\s>]/g) ?? []).length < 4) throw Error("Missing original home video plus three trailers");
console.log(`Spanish Latin American editorial & export audit: ${count}/9 passed`);
