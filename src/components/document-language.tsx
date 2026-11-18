"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/i18n/path";
import { websiteLocales } from "@/i18n/locales";

export function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = localeFromPath(pathname);
    const config = websiteLocales.find((entry) => entry.route === locale);
    document.documentElement.lang = config?.htmlLang ?? "en";
  }, [pathname]);

  return null;
}
