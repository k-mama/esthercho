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
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F7F8FA"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block", width: 18, height: 18 }}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c2.2 2.45 3.35 5.45 3.35 9S14.2 18.55 12 21c-2.2-2.45-3.35-5.45-3.35-9S9.8 5.45 12 3Z" />
      <path d="M3 12h18" />
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
          aria-label={languageLabel}
          title={languageLabel}
          onClick={closeMobileMenu}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 38,
            height: 38,
            flex: "0 0 38px",
            borderRadius: "999px",
            background: "rgba(7, 27, 50, 0.72)",
            border: "1px solid rgba(247, 248, 250, 0.42)",
            boxShadow: "0 2px 14px rgba(3, 15, 30, 0.28)",
            color: "#F7F8FA",
            textDecoration: "none",
            position: "relative",
            zIndex: 999,
          }}
        >
          <GlobeIcon />
        </Link>
      </div>
    </header>
  );
}
