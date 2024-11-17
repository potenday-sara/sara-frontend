'use client';

import { cva } from 'class-variance-authority';
import { memo, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import MainSara from '@/asset/character/MainSara.svg';
import MainMara from '@/asset/character/MainMara.svg';
import SaraKo from '@/asset/character/sara-ko.svg';
import SaraEn from '@/asset/character/sara-en.svg';
import MaraKo from '@/asset/character/mara-ko.svg';
import MaraEn from '@/asset/character/mara-en.svg';
import SaraJp from '@/asset/character/sara-jp.svg';
import MaraJp from '@/asset/character/mara-jp.svg';
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

  const getLogoByLang = (character: Theme) => {
    if (lang === 'en') {
      return character === 'sara' ? <SaraEn /> : <MaraEn />;
    }
    if (lang === 'jp') {
      return character === 'sara' ? <SaraJp /> : <MaraJp />;
    }
    return character === 'sara' ? <SaraKo /> : <MaraKo />;
  };

  const generateLabel = useMemo(() => {
    if (lang === 'en') {
      return (
        <div className="flex items-baseline gap-1">
          <div>{t('home_sara_button')}</div>
          <div className="w-[64px]">
            <Logo logo={type} />
          </div>
        </div>
      );
    }
    return (
      <div className="flex items-baseline gap-1">
        <div className="w-[64px]">
          <Logo logo={type} />
        </div>
        <div>{t('home_sara_button')}</div>
      </div>
    );
  }, [lang, t]);

  return (
    <div className={MainCharacterClassNames({ type })}>
      {type === 'sara' ? (
        <div style={{ opacity: theme === type ? 1 : 0.5 }} className="flex flex-col items-center">
          {getLogoByLang('sara')}
          <MainSara />
        </div>
      ) : (
        <div style={{ opacity: theme === type ? 1 : 0.5 }} className="flex flex-col items-center">
          {getLogoByLang('mara')}
          <MainMara />
        </div>
      )}
      <button type="button" className={MainButtonClassNames({ type })} onClick={handleClick}>
        <div className={getCssByTheme(type, ['text-sara-primary', 'text-mara-primary'], 'font-15-title-100 op')}>
          {generateLabel}
        </div>
      </button>
    </div>
  );
}

export default MainCharacter;
