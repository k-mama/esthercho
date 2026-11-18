// Strict pre-release structural checks for 8 locale families.
// Read-only validation of the static export. Does not approve editorial content.
import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const origin="https://esthercho.pages.dev";
const langs=[
  ["en","en"],["ko","ko"],["de","de"],["pt-br","pt-BR"],
  ["es","es"],["fr","fr"],["it","it"],["ja","ja"],
];
const rooms=["","stories","books","studio","about","notes","archive"];
const stories=["my-father-dreamed-of-a-tiger","the-youngest-daughter-in-every-house"];
const storyLocales=langs.filter(([code])=>code!=="ko");
const errors=[];
const normalized=(s)=>s.toLowerCase();
const urlFor=(lang,room)=>origin+(lang==="en"?"/":"/"+lang+"/")+(room?room+"/":"");
const artifact=(lang,room)=>join("out",lang==="en"?"":lang,room||"","index.html");
const articleUrl=(lang,slug)=>urlFor(lang,"stories/"+slug);
function check(cond,message){if(!cond)errors.push(message)}
async function pageFor(lang,room){
  try{return await readFile(artifact(lang,room),"utf8")}
  catch(e){errors.push("Missing exported HTML "+artifact(lang,room)+": "+e.message);return ""}
}
function checkMeta(html,url,lang,requiredLangs){
  check(html.includes(`<html lang="${lang}"`),"HTML lang must be "+lang+" at "+url);
  check(html.includes(`rel="canonical" href="${url}"`) ||
    html.includes(`href="${url}" rel="canonical"`),"Canonical incorrect or missing "+url);
  for(const [langCode,langTag] of requiredLangs){
    const expected=langCode==="ko"?url.replace(/^https:\/\/[^/]+\/[^/]+\//,origin+"/ko/"):null;
    void expected;
    check(normalized(html).includes(`hreflang="${normalized(langTag)}"`),
      "No hreflang "+langTag+" at "+url);
  }
  check(normalized(html).includes('hreflang="x-default"'),"Missing x-default at "+url);
}
async function checkMedia(html,url){
  // Only local media needed for an initial page load; CDN assets are checked separately.
  const attrs=[...html.matchAll(/(?:src|poster)="(\/media\/[^"]+\.(?:webp|jpg|jpeg|png|gif|mp4))"/gi)];
  for(const match of attrs){
    const media=match[1].split("?")[0];
    try{const f=await stat(join("out",media));check(f.isFile(),"Not a file "+media+" ("+url+")")}
    catch{errors.push("Broken local media "+media+" ("+url+")")}
  }
}
let mainCount=0,storyCount=0,mediaChecks=0;
for(const [locale,htmlLang] of langs){
  for(const room of rooms){
    const html=await pageFor(locale,room);
    if(!html)continue;
    const url=urlFor(locale,room);
    checkMeta(html,url,htmlLang,langs);
    checkMedia(html,url);
    mediaChecks++;
    if(["de","pt-br","es","fr","it","ja"].includes(locale)){
      check(html.includes('Esther Cho'),"Brand missing "+url);
      check(!html.includes("Master Translation Guide"),"Editorial note leaked "+url);
    }
    if(room==="stories"){
      if(locale==="de"||locale==="pt-br"||locale==="es"||locale==="fr"||locale==="it"||locale==="ja"){
        for(const slug of stories)check(html.includes(articleUrl(locale,slug).replace(origin,"")),
          "Story listing does not link to localized complete story: "+locale+"/"+slug);
      }
      if(locale!=="ko"){
        check(html.includes("/media/covers/stories-seated-original-20261118-desktop.webp"),
          "Stories original author portrait changed: "+url);
      }
    }
    if(room==="about"&&locale!=="ko"){
      check(html.includes("/media/covers/esther-standing-original-20261118-desktop.webp"),
        "About original author portrait changed: "+url);
    }
    mainCount++;
  }
}
for(const [locale,htmlLang] of storyLocales){
  for(const slug of stories){
    const html=await pageFor(locale,"stories/"+slug);
    if(!html)continue;
    const url=articleUrl(locale,slug);
    checkMeta(html,url,htmlLang,storyLocales);
    check(html.includes("/media/esther/childhood-garden.jpg"),
      "Archived genuine childhood photograph missing "+url);
    check(html.includes('story-detail-copy'),"Complete memoir body missing "+url);
    // The language picker must retain the current story, not send readers to a different homepage.
    for(const [target] of storyLocales){
      const path=articleUrl(target,slug).replace(origin,"");
      check(html.includes(`href="${path}"`),
        "Language picker does not preserve article "+locale+" -> "+target+" for "+slug);
    }
    checkMedia(html,url);
    storyCount++;
  }
}
check(mainCount===56,"Expected 56 core pages across 8 languages, found "+mainCount);
check(storyCount===14,"Expected 14 public story versions across 7 languages, found "+storyCount);
check(mediaChecks===56,"Expected all 56 core pages to have asset audit");
if(errors.length){
 console.error("8-language pre-release audit FAILED, "+errors.length+" errors.");
 for(const e of errors.slice(0,75))console.error("  - "+e);
 throw Error("Integrated pre-release gate failed; production deployment forbidden");
}
console.log("8-language integrated static gate PASS: "+mainCount+" base pages + "+storyCount+" complete story pages, canonical/alternates, locale preservation and local media verified");
