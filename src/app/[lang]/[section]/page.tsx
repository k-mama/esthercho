import type { Metadata } from "next";
import { InternationalPage } from "@/components/international-pages";
import { translationLocales, localizedHref, type TranslationLocale } from "@/config/languages";
import { translations } from "@/content/international";
import { editorial } from "@/content/editorial-locales";
const sections=["stories","books","studio","about","notes","archive"] as const;
type Section=(typeof sections)[number];
export const dynamicParams=false;
export function generateStaticParams(){
  return translationLocales.flatMap(lang=>sections.map(section=>({lang,section})));
}
export async function generateMetadata({params}:{params:Promise<{lang:TranslationLocale;section:Section}>}):Promise<Metadata>{
  const {lang,section}=await params;const t=translations[lang];
  const titles={stories:t.storiesTitle,books:editorial[lang].books.heroTitle,studio:t.studioTitle,about:t.aboutTitle,notes:t.notesTitle,archive:t.archiveTitle};
  const desc={stories:t.storiesLead,books:t.booksLead,studio:t.studioLead,about:t.aboutLead,notes:t.notesLead,archive:t.archiveLead};
  return {title:titles[section],description:desc[section],
    openGraph:{type:"website",title:titles[section],description:desc[section],url:localizedHref(lang,`/${section}`),siteName:"Esther Cho"},
    twitter:{card:"summary_large_image",title:titles[section],description:desc[section]},
    alternates:{canonical:localizedHref(lang,`/${section}`),
      languages:{en:localizedHref("en",`/${section}`),ko:localizedHref("ko",`/${section}`),
        de:localizedHref("de",`/${section}`),es:localizedHref("es",`/${section}`),
        fr:localizedHref("fr",`/${section}`),it:localizedHref("it",`/${section}`),ja:localizedHref("ja",`/${section}`)}}};
}
export default async function InternationalSection({params}:{params:Promise<{lang:TranslationLocale;section:Section}>}){
  const {lang,section}=await params;
  return <div lang={lang}><InternationalPage locale={lang} section={section}/></div>;
}
