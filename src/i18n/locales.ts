export const LOCALES = {
  en: {
    code: 'en',
    name: 'English',
    direction: 'ltr',
  },
  ko: {
    code: 'ko',
    name: '한국어',
    direction: 'ltr',
  },
} as const;

export type Locale = keyof typeof LOCALES;

export const DEFAULT_LOCALE: Locale = 'en';
