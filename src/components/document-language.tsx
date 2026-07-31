"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    const isKorean = pathname === "/ko" || pathname.startsWith("/ko/");
    document.documentElement.lang = isKorean ? "ko" : "en";
  }, [pathname]);

  return null;
}
