"use client";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/i18n/path";
import { isNewLocale } from "@/i18n/locales";
import { internationalInterface } from "@/i18n/interface";

export function SiteSkipLink() {
  const locale = localeFromPath(usePathname());
  const label = isNewLocale(locale)
    ? internationalInterface[locale].skipContent
    : locale === "ko" ? "본문으로 건너뛰기" : "Skip to main content";
  return <a href="#main-content" className="skip-link" lang={locale === "pt-br" ? "pt-BR" : locale}>{label}</a>;
}
