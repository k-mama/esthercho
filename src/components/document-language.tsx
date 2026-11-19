"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath, htmlLanguage } from "@/config/languages";

export function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = htmlLanguage(localeFromPath(pathname));
  }, [pathname]);

  return null;
}
