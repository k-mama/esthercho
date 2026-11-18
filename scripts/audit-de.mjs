// Stage-only German release gate: seven primary pages and two complete memoirs.
// Does not constitute independent native German literary sign-off.
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const routes = [
  { path:"", text:["WILLKOMMEN IN ESTHERS HAUS","Große Träume in allen Farben","Deutsches Bilderbuch bei Amazon kaufen"],
    links:["/de/stories/","/de/books/","/de/notes/","https://www.amazon.de/dp/B0HRS6F2MH"] },
  { path:"stories", text:["Mein Vater träumte von einem Tiger","Überall die Jüngste","Geschichte lesen","Mehr ist bislang nicht aufgeschrieben"],
    links:["/de/stories/my-father-dreamed-of-a-tiger/","/de/stories/the-youngest-daughter-in-every-house/"] },
  { path:"books", text:["Große Träume in allen Farben","Big Dreams in Every Color","MANUSKRIPT","Manna on the Table"],
    links:["https://www.amazon.de/dp/B0HRS6F2MH","https://www.amazon.com/dp/B0HQ9Z7SRD"] },
  { path:"studio", text:["Von Hand gezeichnet","KI-gestützte"], links:["/de/about/"] },
  { path:"about", text:["Cho Sungyeon","1985","1988","1992","1999","Masterstudiengangs","Bangladesch"],
    links:["https://www.amazon.com/author/sungyeoncho"] },
  { path:"notes", text:["Am Morgentisch","Manna on the Table"],links:["/de/books/"] },
  { path:"archive", text:["Das Album der Kindheit","Alte Fotos bleiben alte Fotos"],links:["/de/stories/"] },
  { path:"stories/my-father-dreamed-of-a-tiger", text:["Bevor ich geboren wurde","Dann muss es wohl eine Katze gewesen sein","HINWEIS ZUM ARCHIV"],
    links:["/de/stories/the-youngest-daughter-in-every-house/","/stories/my-father-dreamed-of-a-tiger/"] },
  { path:"stories/the-youngest-daughter-in-every-house", text:["Zu Hause war ich das älteste Kind","tick, tick, tick","Schönheitsritual","HINWEIS ZUM ARCHIV"],
    links:["/de/stories/","/stories/the-youngest-daughter-in-every-house/"] },
];
let passed=0;
for (const route of routes) {
  const file=join("out","de",route.path,"index.html");
  const html=await readFile(file,"utf8");
  if(!html.includes('<html lang="de"'))throw Error("Wrong German document language: "+file);
  if(!html.includes('rel="canonical"'))throw Error("Missing canonical: "+file);
  if(!html.toLowerCase().includes('hreflang="de"'))throw Error("Missing German alternate: "+file);
  if(!html.includes("Offizielle Website der Autorin Esther Cho"))throw Error("German footer missing: "+file);
  if(!html.includes('alt="'))throw Error("Image description missing: "+file);
  for(const phrase of route.text)if(!html.includes(phrase))throw Error("German phrase missing "+JSON.stringify(phrase)+" in "+file);
  for(const href of route.links)if(!html.includes(href))throw Error("German link missing "+href+" in "+file);
  if(route.path==="books"){
    if((html.match(/<video[\s>]/g)??[]).length!==3)throw Error("German bookroom must retain three original trailers");
    if((html.match(/61IlRaRs5SL/g)??[]).length<1)throw Error("Native German cover missing");
    if(!html.includes("French Toast mit Beeren"))throw Error("Breakfast photographs not described in German");
    if(html.includes("Deutsche Ausgabe · Kindle jetzt"))throw Error("Unverified Kindle claim");
  }
  if(route.path==="stories" && !html.includes("Esther Cho sitzt mit einer Kaffeetasse"))throw Error("Real Stories author photograph accessibility missing");
  if(route.path==="about" && !html.includes("Esther Cho steht vor einem großen"))throw Error("Real About author photograph accessibility missing");
  if(route.path.startsWith("stories/") && !html.includes("de_DE"))throw Error("German story social metadata missing: "+file);
  passed++;
}
const home=await readFile("out/de/index.html","utf8");
if((home.match(/<video[\s>]/g)??[]).length!==4)throw Error("One house-entry video and three picture-book promos required");
if(!home.includes("https://m.media-amazon.com/images/I/61IlRaRs5SL"))throw Error("Home does not show actual native German edition cover");
const books=await readFile("out/de/books/index.html","utf8");
const title="Große Träume in allen Farben";
if((books.match(new RegExp(title,"g"))??[]).length>14)throw Error("German native edition may be duplicated");
console.log(`German internal editorial and HTML gate: ${passed}/9 pages passed`);
