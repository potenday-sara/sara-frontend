export const i18n = {
  defaultLocale: 'ko',
  locales: ['en', 'ko', 'jp'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
