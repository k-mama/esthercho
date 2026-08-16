"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationConfig } from "@/config/navigation";

function GlobeIcon() {
  return (
    <Image
      src="/brand/esther-language-globe-silver-transparent.png"
      alt=""
      width={1254}
      height={1254}
      aria-hidden="true"
      style={{
        display: "block",
        width: 22,
        height: 22,
        objectFit: "contain",
        filter: "drop-shadow(0 1px 4px rgba(3, 15, 30, 0.3))",
      }}
    />
  );
}

const mirroredRooms = new Set([
  "/home",
  "/stories",
  "/books",
  "/studio",
  "/about",
  "/archive",
  "/notes",
]);

function normalizePath(pathname: string) {
  if (pathname === "/") return "/home";
  return pathname.length > 1 && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
}

function getParentRoom(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  return segments.length > 0 ? `/${segments[0]}` : "/home";
}

function englishCanonicalPath(path: string) {
  return path === "/home" ? "/" : `${path}/`;
}

function koreanCanonicalPath(path: string) {
  return path === "/home" ? "/ko/" : `/ko${path}/`;
}

function getLanguageHref(pathname: string, isKorean: boolean) {
  const normalized = normalizePath(pathname);

  if (isKorean) {
    const englishPath = normalized.replace(/^\/ko/, "") || "/home";

    if (mirroredRooms.has(englishPath)) {
      return englishCanonicalPath(englishPath);
    }

    const parentRoom = getParentRoom(englishPath);
    return mirroredRooms.has(parentRoom)
      ? englishCanonicalPath(parentRoom)
      : "/";
  }

  if (mirroredRooms.has(normalized)) {
    return koreanCanonicalPath(normalized);
  }

  const parentRoom = getParentRoom(normalized);
  return mirroredRooms.has(parentRoom)
    ? koreanCanonicalPath(parentRoom)
    : "/ko/";
}

export function SiteHeader() {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const isKorean = pathname === "/ko" || pathname.startsWith("/ko/");
  const isHome =
    pathname === "/" ||
    pathname === "/home" ||
    pathname === "/home/" ||
    pathname === "/ko" ||
    pathname === "/ko/" ||
    pathname === "/ko/home" ||
    pathname === "/ko/home/";

  const navItems = isKorean ? navigationConfig.ko : navigationConfig.en;
  const roomItems = isKorean
    ? navigationConfig.roomsKo
    : navigationConfig.roomsEn;

  const homeHref = isKorean ? "/ko/" : "/";
  const languageHref = getLanguageHref(pathname, isKorean);

  const languageLabel = isKorean
    ? "영문 홈페이지로 이동"
    : "한글 홈페이지로 이동";

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
          aria-label={isKorean ? "조성연 홈페이지" : "Esther Cho home"}
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
          aria-label={isKorean ? "주요 메뉴" : "Main"}
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
            <summary>{isKorean ? "메뉴" : "MENU"}</summary>

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
                          isKorean ? "이야기의 하위 메뉴" : "Stories sub-navigation"
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

        <Link
          href={languageHref}
          hrefLang={isKorean ? "en" : "ko"}
          className="site-header-lang"
          aria-label={languageLabel}
          title={languageLabel}
          onClick={closeMobileMenu}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 30,
            height: 30,
            flex: "0 0 30px",
            background: "transparent",
            border: 0,
            boxShadow: "none",
            textDecoration: "none",
            position: "relative",
            zIndex: 999,
          }}
        >
          <GlobeIcon />
        </Link>
      </div>

      {!isHome ? (
        <nav
          className="site-header-subnav-desktop"
          aria-label={isKorean ? "집 안의 다른 방" : "More rooms"}
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
