import { isNewLocale, isRoomKey, type RoomKey, type WebsiteLocale } from "./locales";

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
