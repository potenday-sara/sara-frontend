'use client';

import { useEffect, useState } from 'react';
import i18next, { FlatNamespace, KeyPrefix } from 'i18next';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
  UseTranslationOptions,
  UseTranslationResponse,
  FallbackNs,
} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useParams } from 'next/navigation';
import { getOptions, languages } from '@/app/i18n/setting';
import { Locale } from '@/app/i18n/i18n.config';

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: string, namespace: string) => import(`@/dictionaries/${language}/${namespace}.json`)),
  )
  .init({
    ...getOptions(),
    lng: 'ko',
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation<Ns extends FlatNamespace, KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined>(
  ns: Ns,
  options?: UseTranslationOptions<KPrefix>,
): [UseTranslationResponse<FallbackNs<Ns>, KPrefix>, Locale] {
  const params = useParams<{ lang: Locale }>();
  const { lang } = params || { lang: 'ko' };
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  if (runsOnServerSide && lang && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang);
  } else {
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    useEffect(() => {
      if (!lang || i18n.resolvedLanguage === lang) return;
      i18n.changeLanguage(lang);
    }, [lang, i18n]);
  }
  return [ret, lang];
}
