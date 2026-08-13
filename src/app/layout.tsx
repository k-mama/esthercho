import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DocumentLanguage } from "@/components/document-language";
import "@/styles/tokens.css";
import "@/styles/global.css";

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
      <body>
        <DocumentLanguage />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
