"use client";
import { usePathname } from "next/navigation";
import { localeFromPath, htmlLanguage, type SiteLocale } from "@/config/languages";

const labels: Record<SiteLocale, string> = {
  en:"Skip to main content", ko:"본문으로 바로 가기",
  de:"Zum Inhalt springen", es:"Saltar al contenido principal",
  fr:"Aller au contenu principal", it:"Vai al contenuto principale",
  ja:"本文へ移動", "pt-br":"Ir direto ao conteúdo",
};
export function SiteSkipLink() {
  const locale=localeFromPath(usePathname());
  return <a href="#main-content" className="skip-link" lang={htmlLanguage(locale)}>{labels[locale]}</a>;
}
