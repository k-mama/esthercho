"use client";

import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  const isKorean = pathname === "/ko" || pathname.startsWith("/ko/");

  return (
    <footer className="site-footer">
      <div className="container">
        <p className="site-footer-name">ESTHER CHO</p>
        <p>
          {isKorean ? "조성연 공식 작가 홈페이지" : "Official author website"}
        </p>
        <p>&copy; 2026 Esther Cho</p>
      </div>
    </footer>
  );
}
