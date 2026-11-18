import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InternationalRoom } from "@/components/international-pages";
import { alternatesFor, isNewLocale, isRoomKey, newLocaleCodes, roomKeys } from "@/i18n/locales";
import { localizedWebsiteContent } from "@/i18n/translations";

export const dynamicParams = false;
export function generateStaticParams() {
  return newLocaleCodes.flatMap((locale) => roomKeys.map((room) => ({ locale, room })));
}
type Props = { params: Promise<{ locale: string; room: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, room } = await params;
  if (!isNewLocale(locale) || !isRoomKey(room)) return {};
  const t = localizedWebsiteContent[locale][room];
  const url = `https://esthercho.pages.dev/${locale}/${room}/`;
  return {
    title: `${t.title} · Esther Cho`,
    description: t.subtitle,
    alternates: {
      canonical: url,
      languages: { ...alternatesFor(room), "x-default": `https://esthercho.pages.dev/${room}/` },
    },
    openGraph: {
      type: "website",
      url,
      title: `${t.title} · Esther Cho`,
      description: t.subtitle,
      images: ["/media/home/esther-house-entry-poster.jpg"],
    },
  };
}
export default async function LocalizedRoom({ params }: Props) {
  const { locale, room } = await params;
  if (!isNewLocale(locale) || !isRoomKey(room)) notFound();
  return <InternationalRoom locale={locale} room={room} />;
}
