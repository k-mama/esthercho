/**
 * Website locale registry. Book manuscript translations use their own separate
 * editorial review and must never be inferred from a published website locale.
 */
export const websiteLocales = [
  { route: "en", htmlLang: "en", hreflang: "en", name: "English", nativeName: "English" },
  { route: "ko", htmlLang: "ko", hreflang: "ko", name: "한국어", nativeName: "한국어" },
  { route: "de", htmlLang: "de", hreflang: "de", name: "Deutsch", nativeName: "Deutsch" },
  { route: "pt-br", htmlLang: "pt-BR", hreflang: "pt-BR", name: "Português (Brasil)", nativeName: "Português (Brasil)" },
  { route: "es", htmlLang: "es", hreflang: "es", name: "Español", nativeName: "Español" },
  { route: "fr", htmlLang: "fr", hreflang: "fr", name: "Français", nativeName: "Français" },
  { route: "it", htmlLang: "it", hreflang: "it", name: "Italiano", nativeName: "Italiano" },
  { route: "ja", htmlLang: "ja", hreflang: "ja", name: "日本語", nativeName: "日本語" },
] as const;

export const newLocaleCodes = ["de", "pt-br", "es", "fr", "it", "ja"] as const;
export type NewLocale = (typeof newLocaleCodes)[number];
export type WebsiteLocale = (typeof websiteLocales)[number]["route"];
export const roomKeys = ["stories", "books", "studio", "about", "notes", "archive"] as const;
export type RoomKey = (typeof roomKeys)[number];

export function isNewLocale(code: string): code is NewLocale {
  return (newLocaleCodes as readonly string[]).includes(code);
}
export function isRoomKey(code: string): code is RoomKey {
  return (roomKeys as readonly string[]).includes(code);
}

/** Use the same page in another language; keep English/Korean URL stability. */
export function translatedPath(locale: WebsiteLocale, room?: RoomKey): string {
  const root = locale === "en" ? "/" : `/${locale}/`;
  return room ? `${root}${room}/` : root;
}

export function alternatesFor(room?: RoomKey) {
  return Object.fromEntries(
    websiteLocales.map((item) => [
      item.hreflang,
      `https://esthercho.pages.dev${translatedPath(item.route, room)}`,
    ]),
  ) as Record<string, string>;
}
