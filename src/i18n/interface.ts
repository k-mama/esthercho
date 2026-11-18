import type { NewLocale } from "./locales";

export const internationalInterface: Record<NewLocale, {
  chooseLanguage: string;
  menu: string;
  primaryNavigation: string;
  roomNavigation: string;
  skipContent: string;
  officialSite: string;
  footerCredit: string;
  amazonAuthorPage: string;
}> = {
  de: {
    chooseLanguage: "Sprache wählen", menu: "MENÜ",
    primaryNavigation: "Hauptnavigation", roomNavigation: "Weitere Räume",
    skipContent: "Zum Hauptinhalt", officialSite: "Offizielle Website der Autorin Esther Cho",
    footerCredit: "Konzept, Gestaltung und Entwicklung: Emma Kwon",
    amazonAuthorPage: "Amazon-Autorenseite",
  },
  "pt-br": {
    chooseLanguage: "Escolher idioma", menu: "MENU",
    primaryNavigation: "Navegação principal", roomNavigation: "Outros espaços",
    skipContent: "Ir para o conteúdo principal", officialSite: "Site oficial da autora Esther Cho",
    footerCredit: "Concepção, design e desenvolvimento: Emma Kwon",
    amazonAuthorPage: "Página da autora na Amazon",
  },
  es: {
    chooseLanguage: "Elegir idioma", menu: "MENÚ",
    primaryNavigation: "Navegación principal", roomNavigation: "Más espacios",
    skipContent: "Ir al contenido principal", officialSite: "Sitio oficial de la autora Esther Cho",
    footerCredit: "Concepto, diseño y desarrollo: Emma Kwon",
    amazonAuthorPage: "Página de autora en Amazon",
  },
  fr: {
    chooseLanguage: "Choisir la langue", menu: "MENU",
    primaryNavigation: "Navigation principale", roomNavigation: "Autres pièces",
    skipContent: "Aller au contenu principal", officialSite: "Site officiel de l’autrice Esther Cho",
    footerCredit: "Conception, design et développement : Emma Kwon",
    amazonAuthorPage: "Page d’autrice sur Amazon",
  },
  it: {
    chooseLanguage: "Scegli la lingua", menu: "MENU",
    primaryNavigation: "Navigazione principale", roomNavigation: "Altre stanze",
    skipContent: "Vai al contenuto principale", officialSite: "Sito ufficiale dell’autrice Esther Cho",
    footerCredit: "Ideazione, design e sviluppo: Emma Kwon",
    amazonAuthorPage: "Pagina autrice su Amazon",
  },
  ja: {
    chooseLanguage: "言語を選ぶ", menu: "メニュー",
    primaryNavigation: "メインメニュー", roomNavigation: "ほかの部屋",
    skipContent: "本文へ", officialSite: "作家エスター・チョーの公式サイト",
    footerCredit: "企画・デザイン・開発：Emma Kwon",
    amazonAuthorPage: "Amazon著者ページ",
  },
};
