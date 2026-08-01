"use client";

import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  const isKorean = pathname === "/ko" || pathname.startsWith("/ko/");

  const copy = isKorean
    ? {
        officialSite: "조성연 공식 작가 홈페이지",
        siteLabel: "사이트 제작 기록",
        credit:
          "이 이야기의 집은 Emma Kwon이 기획하고, 디자인하고, 개발했습니다.",
        roles:
          "기획 · 크리에이티브 디렉션 · 콘텐츠 설계 · 웹디자인 · 웹개발 · 프로젝트 총괄",
        identity:
          "『BORN RARE』 저자. Emma Kwon은 Eunjung Kwon의 작가명입니다.",
        siteAria: "조성연 작가 홈페이지 정보",
        colophonAria: "웹사이트 제작자 정보",
      }
    : {
        officialSite: "Official author website",
        siteLabel: "SITE COLOPHON",
        credit:
          "This house of stories was conceived, designed, and built by Emma Kwon.",
        roles:
          "Concept · Creative Direction · Editorial Architecture · Web Design · Development · Project Direction",
        identity:
          "Author of BORN RARE. Emma Kwon is the author name of Eunjung Kwon.",
        siteAria: "Esther Cho website information",
        colophonAria: "Website creator information",
      };

  return (
    <footer className="site-footer">
      <div className="container site-footer-grid">
        <section
          className="site-footer-site"
          aria-label={copy.siteAria}
        >
          <p className="site-footer-name">ESTHER CHO</p>
          <p className="site-footer-description">
            {copy.officialSite}
          </p>
          <p className="site-footer-copyright">
            © 2026 Esther Cho
          </p>
        </section>

        <section
          className="site-footer-colophon"
          aria-label={copy.colophonAria}
        >
          <p className="site-footer-kicker">
            {copy.siteLabel}
          </p>

          <p className="site-footer-credit">
            {copy.credit}
          </p>

          <p className="site-footer-roles">
            {copy.roles}
          </p>

          <p className="site-footer-maker-identity">
            {copy.identity}
          </p>
        </section>
      </div>
    </footer>
  );
}