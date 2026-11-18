import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InternationalHome } from "@/components/international-pages";
import { alternatesFor, isNewLocale, newLocaleCodes } from "@/i18n/locales";
import { localizedWebsiteContent } from "@/i18n/translations";

export const dynamicParams = false;
export function generateStaticParams() {
  return newLocaleCodes.map((locale) => ({ locale }));
}
type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isNewLocale(locale)) return {};
  const t = localizedWebsiteContent[locale];
  const url = `https://esthercho.pages.dev/${locale}/`;
  return {
    title: { absolute: `Esther Cho · ${t.home.hero}` },
    description: t.home.intro,
    alternates: { canonical: url, languages: { ...alternatesFor(), "x-default": "https://esthercho.pages.dev/" } },
    openGraph: {
      type: "website",
      url,
      locale: locale === "pt-br" ? "pt_BR" : locale === "es" ? "es_419" : locale === "fr" ? "fr_FR" : locale === "it" ? "it_IT" : locale === "ja" ? "ja_JP" : undefined,
      title: `Esther Cho · ${t.home.hero}`,
      description: t.home.intro,
      images: ["/media/home/esther-house-entry-poster.jpg"],
    },
  };
}
export default async function LocalizedHome({ params }: Props) {
  const { locale } = await params;
  if (!isNewLocale(locale)) notFound();
  return <InternationalHome locale={locale} />;
}
