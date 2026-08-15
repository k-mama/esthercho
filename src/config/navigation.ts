const englishPrimaryNavigation = [
  { title: "STORIES", href: "/stories/" },
  { title: "BOOKS", href: "/books/" },
  { title: "STUDIO", href: "/studio/" },
  { title: "ESTHER", href: "/about/" },
];

const koreanPrimaryNavigation = [
  { title: "이야기", href: "/ko/stories/" },
  { title: "책", href: "/ko/books/" },
  { title: "작업실", href: "/ko/studio/" },
  { title: "조성연", href: "/ko/about/" },
];

const englishRoomNavigation = [
  { title: "MORNING TABLE", href: "/notes/" },
  { title: "CHILDHOOD", href: "/archive/" },
];

const koreanRoomNavigation = [
  { title: "아침 식탁", href: "/ko/notes/" },
  { title: "어린 시절", href: "/ko/archive/" },
];

export const navigationConfig = {
  mainNav: englishPrimaryNavigation,
  en: englishPrimaryNavigation,
  ko: koreanPrimaryNavigation,
  roomsEn: englishRoomNavigation,
  roomsKo: koreanRoomNavigation,
};
