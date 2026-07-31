const englishNavigation = [
  { title: "STORIES", href: "/stories/" },
  { title: "BOOKS", href: "/books/" },
  { title: "CHILDHOOD", href: "/archive/" },
  { title: "STUDIO", href: "/studio/" },
  { title: "MORNING TABLE", href: "/notes/" },
  { title: "ESTHER", href: "/about/" },
];

const koreanNavigation = [
  { title: "이야기", href: "/ko/stories/" },
  { title: "책", href: "/ko/books/" },
  { title: "어린 시절", href: "/ko/archive/" },
  { title: "스튜디오", href: "/ko/studio/" },
  { title: "아침 식탁", href: "/ko/notes/" },
  { title: "조성연", href: "/ko/about/" },
];

export const navigationConfig = {
  mainNav: englishNavigation,
  en: englishNavigation,
  ko: koreanNavigation,
};
