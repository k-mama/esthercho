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

function koreanPath(path: string) {
  return path === "/" ? "/ko/" : `/ko${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return localizedRoutes.flatMap((path) => {
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
}
