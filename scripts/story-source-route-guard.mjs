import fs from "node:fs";
import assert from "node:assert/strict";

const read = (path) => fs.readFileSync(path, "utf8");
const archive = read("src/content/esther-story-archive.ts");
const listing = read("src/components/story-index-editorial.tsx");
const article = read("src/components/esther-story-article.tsx");
const ko = read("src/app/ko/stories/page.tsx");
const en = read("src/app/stories/page.tsx");
const recorded = [...archive.matchAll(/number:\s*"(\d{2})",\s*slug:\s*"([^"]+)"/g)];
const numberSet = new Set(recorded.map(m => m[1]));
const slugs = new Set(recorded.map(m => m[2]));
assert.equal(recorded.length, 17, "17 source stories plus standalone Story 02 expected");
assert.equal(numberSet.size, 17, "No duplicated numbered source stories");
assert.equal(slugs.size, 17, "No duplicate slugs");
assert.ok(!numberSet.has("02"), "Story 02 uses its separately maintained photo gallery");
assert.match(archive, /number:\s*"02",[\s\S]*?three-meals-a-day/);
const canonical = Array.from({length:18}, (_,i) => String(i+1).padStart(2, "0"));
assert.deepEqual([...numberSet, "02"].sort(), canonical, "Complete Story 01–18 numbering required");

const orderMatch = archive.match(/recommendedReadingOrder\s*=\s*\[([^\]]+)\]/);
assert.ok(orderMatch, "Recommended reading route missing");
const recommended = [...orderMatch[1].matchAll(/"(\d{2})"/g)].map(m=>m[1]);
assert.deepEqual([...recommended].sort(), canonical, "Recommended route must include all stories once");
assert.equal(recommended.at(-1), "08", "Happiness Collector stays last");

const selectedBlock = listing.split("const selected = [")[1]?.split("const remaining = [")[0];
const remainingBlock = listing.split("const remaining = [")[1]?.split("export function StoryIndexEditorial")[0];
assert.ok(selectedBlock && remainingBlock, "Featured and archive groups must exist");
const featured = [...selectedBlock.matchAll(/number:\s*"(\d{2})"/g)].map(m=>m[1]);
const other = [...remainingBlock.matchAll(/"(\d{2})"/g)].map(m=>m[1]);
assert.deepEqual(featured, ["10", "07", "16"], "Keep exactly three distinct featured memories");
assert.equal(other.length, 14, "Reader-first catalog shows remaining fourteen");
assert.deepEqual(["01",...featured,...other].sort(), canonical, "Landing page shows 18 distinct story destinations");
assert.match(ko, /StoryIndexEditorial locale="ko"/);
assert.match(en, /StoryIndexEditorial locale="en"/);

const exactSonWords = "I dream of becoming a Big Black doggy.";
assert.ok(archive.includes(exactSonWords) && listing.includes(exactSonWords), "Son's original English words must not drift");
const julyStart = archive.indexOf('number: "07"');
const julyEnd = archive.indexOf('number: "08"', julyStart);
const july = archive.slice(julyStart,julyEnd);
assert.ok(july.length > 1000, "Story 07 not found");
assert.ok(!july.includes("eating breakfast"), "Story 07 must not invent breakfast timing");
assert.ok(july.includes("지금까지도 엄마를 돌봐야") && july.includes("Even now"), "Restore author's ongoing care for mother");
assert.ok(article.includes("BEFORE THAT JULY") && article.includes("초등학교 4학년"), "Navigation must preserve chronology");
console.log("Story source-and-route guard passed: 18 unique stories, 3 featured, 14 further, exact quote and chronology preserved.");
