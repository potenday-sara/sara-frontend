import { i18n } from '@/app/i18n/i18n.config';

export const languages = [...i18n.locales];
export const defaultNS = 'main';

export function getOptions(lng = i18n.defaultLocale, ns: string | string[] = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng: i18n.defaultLocale,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
