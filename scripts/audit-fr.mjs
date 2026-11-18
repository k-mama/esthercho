// Staging-only French localization audit, 7 rooms plus 2 actual French stories.
// Neither native French proofreading nor final publication authorization is implied.
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const routes = [
  { path: "", snippets: ["BIENVENUE CHEZ ESTHER", "Une maison pleine de souvenirs", "Un verset près de l’assiette"], links: ["/fr/books/", "/fr/stories/", "/fr/notes/"] },
  { path: "stories", snippets: ["Mon père avait rêvé d’un tigre", "Lire ce récit", "La petite dernière dans chaque maison", "Souvenir consigné"], links: ["/fr/stories/my-father-dreamed-of-a-tiger/", "/fr/stories/the-youngest-daughter-in-every-house/"] },
  { path: "books", snippets: ["Big Dreams in Every Color", "Große Träume in allen Farben", "MANUSCRIT EN COURS", "La manne de ce matin"], links: ["https://www.amazon.com/dp/B0HQ9Z7SRD", "https://www.amazon.de/dp/B0HRS6F2MH"] },
  { path: "studio", snippets: ["Dessiné à la main", "Réinterprétation éditoriale"], links: ["/fr/about/"] },
  { path: "about", snippets: ["Cho Sungyeon", "1985", "1988", "1992", "1999", "enseignements du cursus de master", "Bangladesh"], links: ["https://www.amazon.com/author/sungyeoncho"] },
  { path: "notes", snippets: ["La table du matin", "De ces matins naît un manuscrit"], links: ["/fr/books/"] },
  { path: "archive", snippets: ["L’album d’enfance", "Les anciennes photographies restent intactes"], links: ["/fr/stories/"] },
  { path: "stories/my-father-dreamed-of-a-tiger", snippets: ["Avant ma naissance", "Ce devait être un chat", "NOTE DES ARCHIVES"], links: ["/fr/stories/the-youngest-daughter-in-every-house/", "/stories/my-father-dreamed-of-a-tiger/"] },
  { path: "stories/the-youngest-daughter-in-every-house", snippets: ["Chez moi, j’étais l’aînée", "tic, tic, tic", "l’admiration se transforme", "NOTE DES ARCHIVES"], links: ["/fr/stories/", "/stories/the-youngest-daughter-in-every-house/"] },
];

let count = 0;
for(const route of routes) {
  const path = join("out","fr",route.path,"index.html");
  const html = await readFile(path,"utf8");
  if (!html.includes('<html lang="fr"')) throw Error("Wrong French document language: " + path);
  if (!html.includes('rel="canonical"')) throw Error("Missing canonical: " + path);
  if (!html.toLowerCase().includes('hreflang="fr"')) throw Error("Missing French alternate: " + path);
  if (!html.includes("Site officiel de l’autrice Esther Cho")) throw Error("Untranslated footer: " + path);
  if (!html.includes('alt="')) throw Error("Missing image alternative text: " + path);
  for(const term of route.snippets) {
    if (!html.includes(term)) throw Error("Missing French content "+JSON.stringify(term)+" "+path);
  }
  for(const url of route.links) {
    if (!html.includes(url)) throw Error("Missing/broken link "+url+" "+path);
  }
  if(route.path==="books") {
    if ((html.match(/<video[\s>]/g)??[]).length<3) throw Error("Missing book trailers");
    if (!html.includes("61IlRaRs5SL")) throw Error("Verified German cover missing");
    if (!html.includes("Pain perdu aux fruits rouges")) throw Error("Original breakfast photos not described in French");
  }
  if(route.path==="stories" && !html.includes("Esther Cho assise dans un fauteuil clair")) throw Error("Original Stories photo accessibility description missing");
  if(route.path==="about" && !html.includes("Esther Cho debout devant une grande fenêtre")) throw Error("Original About photo accessibility description missing");
  count++;
}
const home=await readFile("out/fr/index.html","utf8");
if (!home.includes("Voir l’édition anglaise sur Amazon")) throw Error("No honest English edition action");
if (!home.includes("https://www.amazon.com/dp/B0HQ9Z7SRD")) throw Error("No verified paperback link");
if ((home.match(/<video[\s>]/g)??[]).length<4) throw Error("One hero video plus three original book trailers required");
console.log(`French internal website audit: ${count}/9 routes passed`);
