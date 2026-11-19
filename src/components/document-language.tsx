"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/config/languages";

export function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = localeFromPath(pathname);
  }, [pathname]);

  return null;
}
