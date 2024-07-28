'use client';

import { cva } from 'class-variance-authority';
import { useState, memo } from 'react';
import { useRouter } from 'next/navigation';
import MainSara from '@/asset/character/MainSara.svg';
import MainMara from '@/asset/character/MainMara.svg';
import { Theme } from '@/feature/main/hooks/useSaraMara';
import Button from '@/components/atoms/Button';
import Logo from '@/components/atoms/Logo/Logo';
import getCssByTheme from '@/app/_utils/getCssByTheme';

type MainCharacterProps = {
  type: Theme;
  theme: Theme;
};

const MainCharacterClassNames = cva('flex flex-col items-center py-[15px] gap-[15px] justify-center gap', {
  variants: {
    type: {
      sara: 'bg-sara-secondary',
      mara: 'bg-mara-secondary',
    },
  },
});

const MainButtonClassNames = cva('py-4 flex justify-center bg-white w-[360px] rounded-md', {
  variants: {
    type: {
      sara: 'text-sara-primary',
      mara: 'text-mara-primary',
    },
  },
});

function MainCharacter({ type, theme }: MainCharacterProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/question?theme=${type}`);
  };

  return (
    <div className={MainCharacterClassNames({ type })}>
      {type === 'sara' ? (
        <div style={{ opacity: theme === type ? 1 : 0.5 }}>
          <MainSara />
        </div>
      ) : (
        <div style={{ opacity: theme === type ? 1 : 0.5 }}>
          <MainMara />
        </div>
      )}
      <Button
        className={MainButtonClassNames({ type })}
        onClick={handleClick}
        label={
          <div
            className={getCssByTheme(
              type,
              ['text-sara-primary', 'text-mara-primary'],
              'flex items-baseline font-15-title-100 gap-1 op',
            )}
          >
            <div className="w-[64px]">
              <Logo logo={type} />
            </div>
            <div>에게 물어보기</div>
          </div>
        }
      />
    </div>
  );
}

export default memo(MainCharacter);
