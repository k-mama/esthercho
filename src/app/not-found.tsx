"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath, localizedHref, type SiteLocale } from "@/config/languages";

const messages: Record<SiteLocale,string> = {
  en: "Returning to Esther Cho's home…",
  ko: "조성연 작가의 홈페이지로 돌아갑니다…",
  de: "Zurück zu Esther Chos Startseite …",
  es: "Volvemos a la página de inicio de Esther Cho…",
  fr: "Retour à l’accueil d’Esther Cho…",
  it: "Ritorno alla pagina iniziale di Esther Cho…",
  ja: "エスター・チョーのホームへ戻ります…",
};

export default function NotFound() {
  const pathname=usePathname();
  const locale=localeFromPath(pathname);
  useEffect(() => {
    const destination=localizedHref(locale);
    if (pathname !== destination) window.location.replace(destination);
  }, [locale,pathname]);

  return (
    <main lang={locale} style={{
      minHeight:"100svh",display:"grid",placeItems:"center",
      padding:"2rem",background:"#f7f6f2",color:"#173451",textAlign:"center",
    }}>
      <p style={{margin:0,fontSize:"0.9rem",letterSpacing:"0.02em"}}>{messages[locale]}</p>
    </main>
  );
}
