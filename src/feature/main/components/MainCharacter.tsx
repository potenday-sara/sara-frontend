'use client';

import { cva } from 'class-variance-authority';
import { memo } from 'react';
import { useRouter } from 'next/navigation';
import MainSara from '@/asset/character/MainSara.svg';
import MainMara from '@/asset/character/MainMara.svg';
import { Theme } from '@/feature/main/hooks/useSaraMara';
import Logo from '@/components/atoms/Logo/Logo';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { useTranslation } from '@/app/_hooks/useTranslation';

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
  const [{ t }, lang] = useTranslation('main');

  const handleClick = () => {
    router.push(`/${lang}/question?theme=${type}`);
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
      <button type="button" className={MainButtonClassNames({ type })} onClick={handleClick}>
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
          <div>{t('home_sara_button')}</div>
        </div>
      </button>
    </div>
  );
}

export default memo(MainCharacter);
