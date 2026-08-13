"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationConfig } from "@/config/navigation";

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const isKorean =
    pathname === "/ko" || pathname.startsWith("/ko/");

  const navItems = isKorean
    ? navigationConfig.ko
    : navigationConfig.en;

  const homeHref = isKorean ? "/ko/" : "/";
  const languageHref = isKorean ? "/" : "/ko/";

  const languageLabel = isKorean
    ? "영문 홈페이지로 이동"
    : "한글 홈페이지로 이동";

  const closeMobileMenu = () => {
    mobileMenuRef.current?.removeAttribute("open");
  };

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container">
        <Link
          href={homeHref}
          className="site-header-logo"
          aria-label={
            isKorean ? "조성연 홈페이지" : "Esther Cho home"
          }
          onClick={closeMobileMenu}
        >
          <Image
            src="/brand/esther-cho-wordmark-silver-transparent.png"
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
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="site-header-nav-link"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header-nav-mobile">
          <details ref={mobileMenuRef}>
            <summary>{isKorean ? "메뉴" : "MENU"}</summary>

            <ul className="site-header-nav-mobile-menu">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="site-header-nav-link"
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
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
        >
          <GlobeIcon />
        </Link>
      </div>
    </header>
  );
}
