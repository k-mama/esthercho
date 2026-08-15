import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DocumentLanguage } from "@/components/document-language";
import "@/styles/tokens.css";
import "@/styles/global.css";
import "@/styles/shell-redteam.css";

const siteUrl = "https://esthercho.pages.dev";
const socialPreviewImage = "/media/home/esther-house-entry-poster.jpg";
const faviconUrl = "/brand/esther-cho-favicon-32.png?v=20260815";

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
      <body>
        <DocumentLanguage />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
