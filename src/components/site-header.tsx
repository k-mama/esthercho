"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationConfig } from "@/config/navigation";
import { LanguagePicker } from "@/components/language-picker";
import { localeFromPath } from "@/i18n/path";
import { isNewLocale, translatedPath } from "@/i18n/locales";
import { localizedWebsiteContent } from "@/i18n/translations";
import { internationalInterface } from "@/i18n/interface";

export function SiteHeader() {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const locale = localeFromPath(pathname);
  const isKorean = locale === "ko";
  const isHome =
    pathname === "/" || pathname === "/home" || pathname === "/home/" ||
    pathname === "/ko" || pathname === "/ko/" || pathname === "/ko/home" ||
    pathname === "/ko/home/" ||
    (isNewLocale(locale) && (pathname === `/${locale}` || pathname === `/${locale}/`));

  const localCopy = isNewLocale(locale) ? localizedWebsiteContent[locale] : null;
  const labels = isNewLocale(locale) ? internationalInterface[locale] : null;
  const navItems = localCopy
    ? (["stories", "books", "studio", "about"] as const).map((room) => ({
        title: localCopy.nav[room],
        href: translatedPath(locale, room),
      }))
    : isKorean ? navigationConfig.ko : navigationConfig.en;
  const roomItems = localCopy
    ? (["notes", "archive"] as const).map((room) => ({
        title: localCopy.nav[room],
        href: translatedPath(locale, room),
      }))
    : isKorean ? navigationConfig.roomsKo : navigationConfig.roomsEn;
  const homeHref = translatedPath(locale);
  const closeMobileMenu = () => {
    mobileMenuRef.current?.removeAttribute("open");
  };

  const isActive = (href: string) => {
    const route = href.endsWith("/") ? href.slice(0, -1) : href;
    return pathname === route || pathname.startsWith(`${route}/`);
  };

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return (
    <header className={`site-header${isHome ? "" : " site-header--with-subnav"}`}>
      <div className="container site-header-main-row">
        <Link
          href={homeHref}
          className="site-header-logo"
          aria-label={labels ? labels.officialSite : isKorean ? "조성연 홈페이지" : "Esther Cho home"}
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
          aria-label={labels?.primaryNavigation ?? (isKorean ? "주요 메뉴" : "Main")}
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
            <summary>{labels?.menu ?? (isKorean ? "메뉴" : "MENU")}</summary>

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
                          labels?.roomNavigation ?? (isKorean ? "이야기의 하위 메뉴" : "Stories sub-navigation")
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

        <LanguagePicker />

      </div>

      {!isHome ? (
        <nav
          className="site-header-subnav-desktop"
          aria-label={labels?.roomNavigation ?? (isKorean ? "집 안의 다른 방" : "More rooms")}
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
