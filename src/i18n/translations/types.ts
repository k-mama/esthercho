import type { RoomKey } from "../locales";

export interface LocalizedCopy {
  mediaAlt?: {
    storiesHero: string; booksHero: string; studioHero: string;
    aboutHero: string; notesHero: string; archiveHero: string;
    coverEnglish: string; coverGerman: string;
    breakfastTable: string; childhoodHouse: string; childhoodGarden: string;
    volunteerPhoto: string; childhoodCollage: string; universityPortrait: string;
    breakfastPhotos: [string, string, string];
    coverStudies: [string, string, string];
    trailerDescription: string;
  };
  nav: Record<RoomKey, string>;
  ui: {
    language: string;
    enter: string;
    explore: string;
    backHome: string;
    readEnglish: string;
    available: string;
    inProgress: string;
    englishPaperback: string;
    germanPaperback: string;
    originalPhotos: string;
    workInProgress: string;
    viewBook: string;
    meetAuthor: string;
    buyAmazon?: string;
  };
  home: {
    kicker: string;
    hero: string;
    introEyebrow: string;
    introTitle: string;
    intro: string;
    bookEyebrow: string;
    bookTitle: string;
    bookBody: string;
    tableEyebrow: string;
    tableTitle: string;
    tableBody: string;
    memoryEyebrow: string;
    memoryTitle: string;
    memoryBody: string;
    careEyebrow: string;
    careTitle: string;
    careBody: string;
    studioEyebrow: string;
    studioTitle: string;
    studioBody: string;
    closingTitle: string;
    trailers?: { eyebrow: string; title: string; description: string }[];
  };
  stories: {
    title: string; subtitle: string;
    introKicker: string; introTitle: string; intro: string;
    openingKicker: string; openingTitle: string; firstTitle: string; firstBody: string;
    otherTitles: [string, string, string, string, string, string];
    availabilityNote: string;
    memoryTitle: string; memoryBody: string;
    lifeChapters?: string[];
    closingTitle: string; closingBody: string;
  };
  books: {
    title: string; subtitle: string;
    childrenKicker: string; childrenDescription: string;
    germanKicker: string; germanDescription: string;
    filmKicker: string; filmHeading: string;
    mannaKicker: string; mannaTitle: string; mannaIntroduction: string;
    makingKicker: string; makingTitle: string; makingIntro: string;
    breakfastHeading: string; breakfastText: string;
    coverHeading: string; coverText: string;
    houseHeading: string; houseText: string;
    mannaMeaningHeading: string; mannaMeaningText: string;
    authorNote: string;
  };
  notes: {
    title: string; subtitle: string;
    tableHeading: string; tableText: string;
    everydayHeading: string; everydayText: string;
    bookHeading: string; bookText: string;
    closing: string;
  };
  archive: {
    title: string; subtitle: string;
    firstHeading: string; firstText: string;
    houseHeading: string; houseText: string;
    childHeading: string; childText: string;
    unseenHeading: string; unseenText: string;
    authenticityHeading: string; authenticityText: string;
    closing: string;
  };
  studio: {
    title: string; subtitle: string;
    originalHeading: string; originalText: string;
    laterHeading: string; laterText: string;
    sourceCaption: string;
    futureHeading: string; futureText: string;
  };
  about: {
    title: string; subtitle: string;
    biography: string;
    educationHeading: string; educationText: string;
    educationTimeline?: {year: string; detail: string}[];
    tableHeading: string; tableText: string;
    careHeading: string; careText: string;
    makingHeading: string; makingText: string;
  };
}
