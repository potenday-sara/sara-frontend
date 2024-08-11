'use client';

import React from 'react';
import MainCharacter from '@/feature/main/components/MainCharacter';
import Progressbar from '@/components/atoms/Progressbar';
import { useSaraMara } from '@/feature/main/hooks/useSaraMara';
import MainRank from '@/feature/main/components/MainRank';
import { TrendData } from '@/feature/main/constants/trend';
import { Locale } from '@/app/i18n/i18n.config';
import Modal from '@/app/_components/modal';
import LocaleOnboard from '@/app/[lang]/main/_components/LocaleOnboard';

type Props = {
  trend: TrendData;
  lang: Locale;
};

function MainTemplate({ trend, lang }: Props) {
  const { theme, progress, handleThemeAction } = useSaraMara();
  const [isOnboardModalOpen, setIsOnboardModalOpen] = React.useState(true);

  const handleCloseOnboard = () => {
    setIsOnboardModalOpen(false);
  };

  return (
    <main>
      <MainCharacter type="sara" theme={theme} />
      <Progressbar transition="none" start="left" color={theme} height="3px" width="100%" progress={progress} />
      <MainCharacter type="mara" theme={theme} />
      <MainRank theme={theme} trend={trend} handleThemeAction={handleThemeAction} />
      {isOnboardModalOpen && (
        <Modal onClose={handleCloseOnboard} top={100}>
          <LocaleOnboard onRequestClose={handleCloseOnboard} />
        </Modal>
      )}
    </main>
  );
}

export default React.memo(MainTemplate);
