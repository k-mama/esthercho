"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { supportedLocales, languageNames, localeInterface, localeFromPath, normalizeContentPath, localizedHref } from "@/config/languages";

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden="true"
      focusable="false"
      style={{
        display: "block",
        width: 22,
        height: 22,
        filter: "drop-shadow(0 1px 4px rgba(3, 15, 30, 0.3))",
      }}
    >
      <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="M3.8 12h16.4M12 3.4c2.1 2.2 3.2 5.1 3.2 8.6S14.1 18.4 12 20.6M12 3.4C9.9 5.6 8.8 8.5 8.8 12s1.1 6.4 3.2 8.6M5.6 7.2c1.8 1 4 1.5 6.4 1.5s4.6-.5 6.4-1.5M5.6 16.8c1.8-1 4-1.5 6.4-1.5s4.6.5 6.4 1.5"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const languageMenuRef = useRef<HTMLDetailsElement>(null);
  const locale = localeFromPath(pathname);
  const localeCopy = localeInterface[locale];

  const isKorean = locale === "ko";
  const isHome = normalizeContentPath(pathname) === "";

  const navItems = localeCopy.primary.map((title, index) => ({
    title, href: localizedHref(locale, ["/stories", "/books", "/studio", "/about"][index])
  }));
  const roomItems = localeCopy.rooms.map((title, index) => ({
    title, href: localizedHref(locale, ["/notes", "/archive"][index])
  }));

  const homeHref = localizedHref(locale);
  const languageLabel = localeCopy.selector;
  const contentPath = normalizeContentPath(pathname);
  const languageHref = (language: typeof supportedLocales[number]) =>
    language === "ko" && contentPath.startsWith("/stories/")
      ? localizedHref(language, "/stories")
      : localizedHref(language, contentPath);
  const menuLabel: Record<typeof supportedLocales[number], string> = {
    en: "MENU", ko: "메뉴", de: "MENÜ", es: "MENÚ", fr: "MENU", it: "MENU", ja: "メニュー",
  };

  const closeMobileMenu = () => {
    mobileMenuRef.current?.removeAttribute("open");
  };

  const isActive = (href: string) => {
    const route = href.endsWith("/") ? href.slice(0, -1) : href;
    return pathname === route || pathname.startsWith(`${route}/`);
  };

  useEffect(() => {
    closeMobileMenu();
    languageMenuRef.current?.removeAttribute("open");
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        languageMenuRef.current.removeAttribute("open");
      }
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && languageMenuRef.current?.open) {
        languageMenuRef.current.removeAttribute("open");
        languageMenuRef.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <header className={`site-header${isHome ? "" : " site-header--with-subnav"}`}>
      <div className="container site-header-main-row">
        <Link
          href={homeHref}
          className="site-header-logo"
          aria-label={localeCopy.home}
          onClick={closeMobileMenu}
        >
          <Image
            src="/brand/esther-cho-wordmark-silver-refined.png"
            alt=""
            width={2171}
            height={724}
            className="site-header-wordmark-image"
            aria-hidden="true"
          />
        </Link>

        <nav
          className="site-header-nav-desktop"
          aria-label={localeCopy.primary.join(", ")}
        >
          <ul>
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="site-header-nav-link"
                    aria-current={active ? "page" : undefined}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="site-header-nav-mobile">
          <details ref={mobileMenuRef}>
            <summary>{menuLabel[locale]}</summary>

            <ul className="site-header-nav-mobile-menu">
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                const isStoriesParent = index === 0;
                const hasActiveRoom =
                  isStoriesParent && roomItems.some((room) => isActive(room.href));

                return (
                  <li
                    key={item.href}
                    className={
                      isStoriesParent
                        ? `site-header-nav-mobile-group${
                            hasActiveRoom ? " site-header-nav-mobile-group--active" : ""
                          }`
                        : undefined
                    }
                  >
                    <Link
                      href={item.href}
                      className="site-header-nav-link"
                      aria-current={active ? "page" : undefined}
                      onClick={closeMobileMenu}
                    >
                      {item.title}
                    </Link>

                    {isStoriesParent ? (
                      <ul
                        className="site-header-nav-mobile-submenu"
                        aria-label={
                          localeCopy.rooms.join(", ")
                        }
                      >
                        {roomItems.map((room) => {
                          const roomActive = isActive(room.href);
                          return (
                            <li key={room.href}>
                              <Link
                                href={room.href}
                                className="site-header-nav-link site-header-nav-room-link"
                                aria-current={roomActive ? "page" : undefined}
                                onClick={closeMobileMenu}
                              >
                                {room.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </details>
        </div>

        <details ref={languageMenuRef} className="site-language-selector">
          <summary
            className="site-header-lang"
            aria-label={languageLabel}
            title={languageLabel}
          >
            <GlobeIcon />
            <span className="site-language-code">{locale.toUpperCase()}</span>
            <span className="site-language-chevron" aria-hidden="true">▾</span>
          </summary>
          <nav className="site-language-panel" aria-label={languageLabel}>
            <p className="site-language-heading">{languageLabel}</p>
            <ul>
              {supportedLocales.map((language) => (
                <li key={language}>
                  <Link
                    href={languageHref(language)}
                    hrefLang={language}
                    lang={language}
                    aria-current={language === locale ? "page" : undefined}
                    onClick={() => {
                      languageMenuRef.current?.removeAttribute("open");
                      closeMobileMenu();
                    }}
                  >
                    <span>{languageNames[language]}</span>
                    <small>{language.toUpperCase()}</small>
                    {language === locale ? <span aria-hidden="true">✓</span> : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>

      {!isHome ? (
        <nav
          className="site-header-subnav-desktop"
          aria-label={localeCopy.rooms.join(", ")}
        >
          <div className="container site-header-subnav-inner">
            <ul>
              {roomItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
