import Link from "next/link";
import Image from "next/image";
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
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function SiteHeader() {
  const navItems = navigationConfig.mainNav;

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="site-header-logo" aria-label="Esther Cho home">
          <Image
            src="/brand/esther-cho-wordmark-navy-transparent.png"
            alt=""
            width={1383}
            height={431}
            className="site-header-wordmark-image"
            aria-hidden="true"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="site-header-nav-desktop" aria-label="Main">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="site-header-nav-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="site-header-nav-mobile">
          <details>
            <summary>MENU</summary>
            <ul className="site-header-nav-mobile-menu">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="site-header-nav-link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>

        <div
          className="site-header-lang"
          aria-label="Language selector. English is currently selected."
        >
          <GlobeIcon />
          <span>EN</span>
        </div>
      </div>
    </header>
  );
}