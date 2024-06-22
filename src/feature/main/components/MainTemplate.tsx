'use client';

import React from 'react';
import MainCharacter from '@/feature/main/components/MainCharacter';
import Progressbar from '@/components/atoms/Progressbar';
import { useSaraMara } from '@/feature/main/hooks/useSaraMara';

function MainTemplate({}) {
  const { theme, progress } = useSaraMara();

  return (
    <div>
      <MainCharacter type="sara" />
      <Progressbar start="left" color={theme} height="3px" width="100%" progress={progress} />
      <MainCharacter type="mara" />
    </div>
  );
}

export default React.memo(MainTemplate);
