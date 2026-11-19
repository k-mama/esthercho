import type { MetadataRoute } from "next";
import { supportedLocales, localizedHref } from "@/config/languages";
export const dynamic = "force-static";
const siteUrl = "https://esthercho.pages.dev";
const translatedPaths = ["", "/about", "/archive", "/books", "/notes", "/stories", "/studio"];
const storyPaths = ["/stories/my-father-dreamed-of-a-tiger", "/stories/the-youngest-daughter-in-every-house"];
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...translatedPaths, ...storyPaths];
  return pages.flatMap(path => {
    const languages = Object.fromEntries(supportedLocales.map(locale => [
      locale, `${siteUrl}${localizedHref(locale,path)}`
    ]));
    return supportedLocales.map(locale => ({
      url: `${siteUrl}${localizedHref(locale,path)}`,
      alternates: {languages},
    }));
  });
}
