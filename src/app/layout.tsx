import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RoomThreshold } from "@/components/room-threshold";
import { DocumentLanguage } from "@/components/document-language";
import houseStyles from "./house-curation.module.css";
import "@/styles/tokens.css";
import "@/styles/global.css";
import "@/styles/korean.css";
import "@/styles/shell-redteam.css";
import "@/styles/home-shell-polish.css";
import "@/styles/home-geometry-contrast.css";
import "@/styles/home-video-lock.css";
import "@/styles/home-mobile-studio-fix.css";
import "@/styles/mobile-menu-glass.css";
import "@/styles/desktop-subnav-hover.css";
import "@/styles/room-interiors.css";
import "@/styles/room-photo-composition.css";
import "@/styles/remaining-room-interiors.css";
import "@/styles/room-exits.css";
import "@/styles/mobile-room-balance.css";
import "@/styles/mobile-room-rhythm.css";
import "@/styles/interface-finish.css";

const siteUrl = "https://esthercho.pages.dev";
const socialPreviewImage = "/media/home/esther-house-entry-poster.jpg";
const faviconUrl = "/favicon-esther-cho.png?v=20260813-1948";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Esther Cho",
    title: "Esther Cho",
    description:
      "Enter Esther Cho's house of stories, shaped by faith, memory, childhood, and ordinary life.",
    images: [
      {
        url: socialPreviewImage,
        alt: "The entrance to Esther Cho's house",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esther Cho",
    description:
      "Enter Esther Cho's house of stories, shaped by faith, memory, childhood, and ordinary life.",
    images: [socialPreviewImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language}>
      <body className={houseStyles.root}>
        <DocumentLanguage />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <RoomThreshold />
        <SiteFooter />
      </body>
    </html>
  );
}
