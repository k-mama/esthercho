import { isNewLocale, isRoomKey, translatedPath, type RoomKey, type WebsiteLocale } from "./locales";

export function localeFromPath(pathname: string): WebsiteLocale {
  const first = pathname.split("/").filter(Boolean)[0];
  if (first === "ko") return "ko";
  return first && isNewLocale(first) ? first : "en";
}

export function roomFromPath(pathname: string): RoomKey | undefined {
  const segments = pathname.split("/").filter(Boolean);
  const locale = localeFromPath(pathname);
  const firstRoom = locale === "en" ? segments[0] : segments[1];
  return firstRoom && isRoomKey(firstRoom) ? firstRoom : undefined;
}

const publishedStorySlugs = new Set([
  "my-father-dreamed-of-a-tiger",
  "the-youngest-daughter-in-every-house",
]);

/** Keep the same article where both translations exist; otherwise fall back to its room. */
export function switchLanguagePath(pathname: string, targetLocale: WebsiteLocale): string {
  const current = localeFromPath(pathname);
  const parts = pathname.split("/").filter(Boolean);
  const room = roomFromPath(pathname);
  const slug = parts[parts.length - 1];

  if (
    room === "stories" &&
    publishedStorySlugs.has(slug) &&
    (current === "en" || current === "pt-br" || current === "es" || current === "fr" || current === "it" || current === "ja" || current === "de") &&
    (targetLocale === "en" || targetLocale === "pt-br" || targetLocale === "es" || targetLocale === "fr" || targetLocale === "it" || targetLocale === "ja" || targetLocale === "de")
  ) {
    return targetLocale === "en" ? `/stories/${slug}/` : `/${targetLocale}/stories/${slug}/`;
  }
  return translatedPath(targetLocale, room);
}
