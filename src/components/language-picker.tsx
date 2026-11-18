"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { localeFromPath, roomFromPath } from "@/i18n/path";
import { isNewLocale, translatedPath, websiteLocales } from "@/i18n/locales";
import { internationalInterface } from "@/i18n/interface";
import styles from "./language-picker.module.css";

export function LanguagePicker() {
  const pathname = usePathname();
  const current = localeFromPath(pathname);
  const room = roomFromPath(pathname);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const label = isNewLocale(current) ? internationalInterface[current].chooseLanguage : current === "ko" ? "언어 선택" : "Select language";
  return (
    <details className={styles.menu} ref={detailsRef}>
      <summary className={styles.trigger} aria-label={label} title={label}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M3.8 12h16.4M12 3.4c2.2 2.3 3.3 5.1 3.3 8.6s-1.1 6.3-3.3 8.6M12 3.4C9.8 5.7 8.7 8.5 8.7 12s1.1 6.3 3.3 8.6" stroke="currentColor" strokeWidth="1.15" />
        </svg>
        <span>{current === "pt-br" ? "PT" : current.toUpperCase()}</span>
      </summary>
      <nav className={styles.panel} aria-label={label}>
        {websiteLocales.map((locale) => (
          <Link
            key={locale.route}
            href={translatedPath(locale.route, room)}
            hrefLang={locale.htmlLang}
            lang={locale.htmlLang}
            aria-current={current === locale.route ? "page" : undefined}
            className={current === locale.route ? styles.current : styles.item}
            onClick={() => detailsRef.current?.removeAttribute("open")}
          >
            {locale.nativeName}
            {current === locale.route ? <span aria-hidden="true">✓</span> : null}
          </Link>
        ))}
      </nav>
    </details>
  );
}
