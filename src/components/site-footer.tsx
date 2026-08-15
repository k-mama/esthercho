"use client";

import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  const isKorean =
    pathname === "/ko" || pathname.startsWith("/ko/");

  const copy = isKorean
    ? {
        officialSite: "조성연 공식 작가 홈페이지",
        credit: "기획 · 디자인 · 개발 Emma Kwon",
        siteAria: "조성연 작가 홈페이지 정보",
      }
    : {
        officialSite: "Official author website",
        credit: "Conceived, designed, and built by Emma Kwon",
        siteAria: "Esther Cho website information",
      };

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <section
          className="site-footer-site"
          aria-label={copy.siteAria}
        >
          <p className="site-footer-name">ESTHER CHO</p>
          <p className="site-footer-description">{copy.officialSite}</p>
          <p className="site-footer-copyright">© 2026 Esther Cho</p>
        </section>

        <p className="site-footer-colophon">
          <span>{copy.credit}</span>
          <span aria-hidden="true"> · </span>
          <a href="mailto:emmaestro123@gmail.com">
            emmaestro123@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
