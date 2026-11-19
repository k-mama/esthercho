export const supportedLocales = ["en", "ko", "de", "es", "fr", "it", "ja", "pt-br"] as const;
export type SiteLocale = (typeof supportedLocales)[number];
export const translationLocales = ["de", "es", "fr", "it", "ja", "pt-br"] as const;
export type TranslationLocale = (typeof translationLocales)[number];

export const languageNames: Record<SiteLocale, string> = {
  en: "English", ko: "한국어", de: "Deutsch", es: "Español",
  fr: "Français", it: "Italiano", ja: "日本語", "pt-br": "Português (Brasil)",
};

export const localeInterface: Record<SiteLocale, {
  primary: [string, string, string, string];
  rooms: [string, string];
  selector: string;
  home: string;
  copyright: string;
  authorPage: string;
  siteDescription: string;
  credit: string;
}> = {
  en: { primary: ["STORIES", "BOOKS", "STUDIO", "ESTHER"], rooms: ["MORNING TABLE", "CHILDHOOD"], selector: "Select website language", home: "Home", copyright: "Official author website", authorPage: "Amazon Author Page", siteDescription: "Esther Cho website information", credit: "Conceived, designed, and built by Emma Kwon" },
  ko: { primary: ["이야기", "책", "작업실", "조성연"], rooms: ["아침 식탁", "어린 시절"], selector: "홈페이지 언어 선택", home: "홈", copyright: "조성연 공식 작가 홈페이지", authorPage: "아마존 작가 소개 페이지", siteDescription: "조성연 작가 홈페이지 정보", credit: "기획 · 디자인 · 개발 Emma Kwon" },
  de: { primary: ["GESCHICHTEN", "BÜCHER", "ATELIER", "ESTHER"], rooms: ["FRÜHSTÜCKSTISCH", "KINDHEIT"], selector: "Sprache der Website wählen", home: "Startseite", copyright: "Offizielle Website der Autorin", authorPage: "Autorinnenprofil bei Amazon", siteDescription: "Informationen über Esther Cho", credit: "Konzept, Design und Entwicklung: Emma Kwon" },
  es: { primary: ["HISTORIAS", "LIBROS", "ESTUDIO", "ESTHER"], rooms: ["MESA DEL DESAYUNO", "INFANCIA"], selector: "Elegir idioma del sitio", home: "Inicio", copyright: "Sitio oficial de la autora", authorPage: "Página de la autora en Amazon", siteDescription: "Información sobre Esther Cho", credit: "Concepto, diseño y desarrollo: Emma Kwon" },
  fr: { primary: ["RÉCITS", "LIVRES", "ATELIER", "ESTHER"], rooms: ["PETIT-DÉJEUNER", "ENFANCE"], selector: "Choisir la langue du site", home: "Accueil", copyright: "Site officiel de l’autrice", authorPage: "Page de l’autrice sur Amazon", siteDescription: "Informations sur Esther Cho", credit: "Conception, design et développement : Emma Kwon" },
  it: { primary: ["STORIE", "LIBRI", "STUDIO", "ESTHER"], rooms: ["A COLAZIONE", "INFANZIA"], selector: "Scegli la lingua del sito", home: "Home", copyright: "Sito ufficiale dell’autrice", authorPage: "Pagina dell’autrice su Amazon", siteDescription: "Informazioni su Esther Cho", credit: "Ideazione, design e sviluppo: Emma Kwon" },
  ja: { primary: ["物語", "本", "アトリエ", "エスター"], rooms: ["朝の食卓", "子ども時代"], selector: "サイトの言語を選択", home: "ホーム", copyright: "作家エスター・チョー公式サイト", authorPage: "Amazon著者ページ", siteDescription: "エスター・チョー公式サイト案内", credit: "企画・デザイン・開発 Emma Kwon" },
  "pt-br": { primary: ["HISTÓRIAS", "LIVROS", "ATELIÊ", "ESTHER"], rooms: ["CAFÉ DA MANHÃ", "INFÂNCIA"], selector: "Escolher o idioma do site", home: "Início", copyright: "Site oficial da autora", authorPage: "Página da autora na Amazon", siteDescription: "Sobre o site de Esther Cho", credit: "Concepção, design e desenvolvimento: Emma Kwon" },
};
export function localeFromPath(pathname: string): SiteLocale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return supportedLocales.find((locale) => locale !== "en" && locale === segment) ?? "en";
}
export function normalizeContentPath(pathname: string) {
  const locale = localeFromPath(pathname);
  const contentPath = locale === "en" ? pathname : pathname.replace(new RegExp(`^/${locale}(?=/|$)`), "");
  return contentPath === "/" || contentPath === "" || contentPath === "/home/" || contentPath === "/home" ? "" : contentPath.replace(/\/$/, "");
}
export function localizedHref(locale: SiteLocale, contentPath = "") {
  const cleanPath = contentPath.split("/").filter(Boolean).join("/");
  const path = cleanPath ? `${cleanPath}/` : "";
  return locale === "en" ? `/${path}` : `/${locale}/${path}`;
}
