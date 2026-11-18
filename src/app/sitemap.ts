import type { MetadataRoute } from "next";
import { websiteLocales, translatedPath, type RoomKey } from "@/i18n/locales";

export const dynamic = "force-static";
const siteUrl = "https://esthercho.pages.dev";
const mainRoutes: (RoomKey | undefined)[] = [
  undefined, "about", "archive", "books", "notes", "stories", "studio",
];
const multilingualStoryRoutes = [
  "/stories/my-father-dreamed-of-a-tiger/",
  "/stories/the-youngest-daughter-in-every-house/",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedEntries = mainRoutes.flatMap((room) => {
    const languages = Object.fromEntries(
      websiteLocales.map((locale) => [
        locale.hreflang,
        `${siteUrl}${translatedPath(locale.route, room)}`,
      ]),
    ) as Record<string, string>;
    languages["x-default"] = `${siteUrl}${translatedPath("en", room)}`;
    return websiteLocales.map((locale) => ({
      url: `${siteUrl}${translatedPath(locale.route, room)}`,
      alternates: { languages },
    }));
  });
  return [
    ...localizedEntries,
    ...multilingualStoryRoutes.flatMap((route) => {
      const en = `${siteUrl}${route}`;
      const pt = `${siteUrl}/pt-br${route}`;
      const es = `${siteUrl}/es${route}`;
      const fr = `${siteUrl}/fr${route}`;
      const it = `${siteUrl}/it${route}`;
      const languages = { en, "pt-BR": pt, es, fr, it, "x-default": en };
      return [
        { url: en, alternates: { languages } },
        { url: pt, alternates: { languages } },
        { url: es, alternates: { languages } },
        { url: fr, alternates: { languages } },
        { url: it, alternates: { languages } },
      ];
    }),
  ];
}
