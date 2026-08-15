import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://esthercho.pages.dev";

const localizedRoutes = [
  "/",
  "/about/",
  "/archive/",
  "/books/",
  "/notes/",
  "/stories/",
  "/studio/",
] as const;

const englishOnlyRoutes = [
  "/stories/my-father-dreamed-of-a-tiger/",
  "/stories/the-youngest-daughter-in-every-house/",
] as const;

function koreanPath(path: string) {
  return path === "/" ? "/ko/" : `/ko${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedEntries = localizedRoutes.flatMap((path) => {
    const enUrl = `${siteUrl}${path}`;
    const koUrl = `${siteUrl}${koreanPath(path)}`;
    const languages = {
      en: enUrl,
      ko: koUrl,
    };

    return [
      {
        url: enUrl,
        alternates: { languages },
      },
      {
        url: koUrl,
        alternates: { languages },
      },
    ];
  });

  const englishOnlyEntries = englishOnlyRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
  }));

  return [...localizedEntries, ...englishOnlyEntries];
}
