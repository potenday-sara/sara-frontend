'use client';

import React from 'react';
import MainCharacter from '@/feature/main/components/MainCharacter';
import Progressbar from '@/components/atoms/Progressbar';
import { useSaraMara } from '@/feature/main/hooks/useSaraMara';
import MainRank from '@/feature/main/components/MainRank';
import { TrendData } from '@/feature/main/constants/trend';
import { Locale } from '@/app/i18n/i18n.config';

type Props = {
  trend: TrendData;
  lang: Locale;
};

function MainTemplate({ trend, lang }: Props) {
  const { theme, progress, handleThemeAction } = useSaraMara();

  return (
    <main>
      <MainCharacter type="sara" theme={theme} />
      <Progressbar transition="none" start="left" color={theme} height="3px" width="100%" progress={progress} />
      <MainCharacter type="mara" theme={theme} />
      <MainRank theme={theme} trend={trend} handleThemeAction={handleThemeAction} />
    </main>
  );
}

export default React.memo(MainTemplate);
