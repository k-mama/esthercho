// Internal Japanese staging gate: seven rooms plus two published long-form stories.
// Native-language editorial approval and final public deployment are separate gates.
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const pages = [
  { route: "", phrases: ["エスターの家へようこそ", "思い出と物語が息づく家", "朝ごはんのそばに聖書"], links: ["/ja/stories/", "/ja/books/", "/ja/notes/"] },
  { route: "stories", phrases: ["父は虎の夢を見た", "どの家でも末娘", "物語を読む", "ない続きをつくり足しません"], links: ["/ja/stories/my-father-dreamed-of-a-tiger/", "/ja/stories/the-youngest-daughter-in-every-house/"] },
  { route: "books", phrases: ["Big Dreams in Every Color", "Große Träume in allen Farben", "執筆中の原稿", "今日の朝に与えられるマナ"], links: ["https://www.amazon.com/dp/B0HQ9Z7SRD", "https://www.amazon.de/dp/B0HRS6F2MH"] },
  { route: "studio", phrases: ["手で描いたもの", "AI支援による後年の編集的再構成"], links: ["/ja/about/"] },
  { route: "about", phrases: ["エスター・チョー", "1985", "1988", "1992", "1999", "修士課程", "バングラデシュ"], links: ["https://www.amazon.com/author/sungyeoncho"] },
  { route: "notes", phrases: ["朝の食卓", "この朝の記録が、一冊の本になろうとしています"], links: ["/ja/books/"] },
  { route: "archive", phrases: ["子どもの頃のアルバム", "古い写真は、古い写真のまま"], links: ["/ja/stories/"] },
  { route: "stories/my-father-dreamed-of-a-tiger", phrases: ["私が生まれる前", "きっと猫だったんだね", "記録について"], links: ["/ja/stories/the-youngest-daughter-in-every-house/", "/stories/my-father-dreamed-of-a-tiger/"] },
  { route: "stories/the-youngest-daughter-in-every-house", phrases: ["自分の家では、私は長女でした", "カチ、カチ、カチ", "美容の習慣", "記録について"], links: ["/ja/stories/", "/stories/the-youngest-daughter-in-every-house/"] },
];

let passed = 0;
for (const page of pages) {
  const file = join("out", "ja", page.route, "index.html");
  const html = await readFile(file, "utf8");
  if (!html.includes('<html lang="ja"')) throw Error("Wrong document language: " + file);
  if (!html.includes('rel="canonical"')) throw Error("Missing canonical URL: " + file);
  if (!html.toLowerCase().includes('hreflang="ja"')) throw Error("Missing reciprocal Japanese alternate: " + file);
  if (!html.includes("作家エスター・チョーの公式サイト")) throw Error("Japanese footer missing: " + file);
  if (!html.includes('alt="')) throw Error("Missing image accessibility text: " + file);
  for (const word of page.phrases) {
    if (!html.includes(word)) throw Error("Missing translated Japanese content " + JSON.stringify(word) + " in " + file);
  }
  for (const url of page.links) {
    if (!html.includes(url)) throw Error("Missing route or published purchase link " + url + " in " + file);
  }
  if (page.route === "books") {
    if ((html.match(/<video[\s>]/g) ?? []).length < 3) throw Error("Missing original picture-book trailer videos");
    if (!html.includes("61IlRaRs5SL")) throw Error("Published German book cover not retained");
    if (!html.includes("ベリーを添えたフレンチトースト")) throw Error("Original breakfast photos lack Japanese alt text");
  }
  if (page.route === "stories" && !html.includes("石造りの壁のそばの椅子に座り")) throw Error("Original Stories author photo alt text missing");
  if (page.route === "about" && !html.includes("明るい窓を背に立つ")) throw Error("Original About author photo alt text missing");
  if (page.route === "stories/my-father-dreamed-of-a-tiger" && !html.includes("ja_JP")) throw Error("Japanese article metadata missing");
  passed++;
}
const home = await readFile("out/ja/index.html", "utf8");
if (!home.includes("英語版の絵本をAmazonで見る")) throw Error("English original edition CTA missing");
if ((home.match(/<video[\s>]/g) ?? []).length < 4) throw Error("House-entry video or three original book promos missing");
console.log(`Japanese editorial and static HTML gate: ${passed}/9 pages passed`);
