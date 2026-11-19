import type { Metadata } from "next";
import { InternationalPage } from "@/components/international-pages";
import { translationLocales, localizedHref, type TranslationLocale } from "@/config/languages";
import { translations } from "@/content/international";
export const dynamicParams = false;
export function generateStaticParams() { return translationLocales.map(lang => ({lang})); }
export async function generateMetadata({params}:{params:Promise<{lang:TranslationLocale}>}):Promise<Metadata>{
  const {lang}=await params;
  const description=translations[lang].houseText;
  return {title:{absolute:"Esther Cho"},description,
    alternates:{canonical:localizedHref(lang),languages:{en:"/",ko:"/ko/",de:"/de/",es:"/es/",fr:"/fr/",it:"/it/",ja:"/ja/"}},
    openGraph:{type:"website",title:"Esther Cho",description,url:localizedHref(lang),siteName:"Esther Cho"},
    twitter:{card:"summary_large_image",title:"Esther Cho",description}};
}
export default async function InternationalHome({params}:{params:Promise<{lang:TranslationLocale}>}){
  const {lang}=await params;
  return <div lang={lang}><InternationalPage locale={lang} section="home"/></div>;
}
