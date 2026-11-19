"use client";

import { usePathname } from "next/navigation";
import { localeFromPath, localeInterface } from "@/config/languages";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const labels = localeInterface[locale];
  const copy = {
    officialSite: labels.copyright,
    credit: labels.credit,
    siteAria: labels.siteDescription,
    amazonAuthor: labels.authorPage,
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
          <a
            className="site-footer-author-link"
            href="https://www.amazon.com/author/sungyeoncho"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.amazonAuthor} <span aria-hidden="true">↗</span>
          </a>
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
