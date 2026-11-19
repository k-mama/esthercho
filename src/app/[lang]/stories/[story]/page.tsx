import type { Metadata } from "next";
import { IntlStoryDetail } from "@/components/international-pages";
import { translationLocales, localizedHref, type TranslationLocale } from "@/config/languages";
import { translations } from "@/content/international";
const stories=["my-father-dreamed-of-a-tiger","the-youngest-daughter-in-every-house"] as const;
type Story=(typeof stories)[number];
export const dynamicParams=false;
export function generateStaticParams(){
  return translationLocales.flatMap(lang=>stories.map(story=>({lang,story})));
}
export async function generateMetadata({params}:{params:Promise<{lang:TranslationLocale;story:Story}>}):Promise<Metadata>{
  const {lang,story}=await params; const idx=stories.indexOf(story);const t=translations[lang];
  return {title:t.storyTitles[idx],description:t.storiesLead,
    alternates:{canonical:localizedHref(lang,`/stories/${story}`),
      languages:{en:localizedHref("en",`/stories/${story}`),
        de:localizedHref("de",`/stories/${story}`),
        es:localizedHref("es",`/stories/${story}`),
        fr:localizedHref("fr",`/stories/${story}`),
        it:localizedHref("it",`/stories/${story}`),
        ja:localizedHref("ja",`/stories/${story}`)}}};
}
export default async function InternationalStory({params}:{params:Promise<{lang:TranslationLocale;story:Story}>}){
  const {lang,story}=await params;
  return <div lang={lang}><IntlStoryDetail locale={lang} which={story===stories[0]?0:1}/></div>;
}
