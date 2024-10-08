'use client';

import React from 'react';
import Image from 'next/image';
import { buttons } from 'polished';
import SaraBeforeHover from '@/app/[lang]/question/_asset/saraBeforeHover.png';
import SaraHover from '@/app/[lang]/question/_asset/saraHover.png';
import MaraBeforeHover from '@/app/[lang]/question/_asset/maraBeforeHover.png';
import MaraHover from '@/app/[lang]/question/_asset/maraHover.png';
import useHover from '@/app/_hooks/useHover';
import { Theme } from '@/feature/question/ThemeContext';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { useOnboard } from '@/app/[lang]/question/_context/OnboardContext';
import { useTranslation } from '@/app/_hooks/useTranslation';

type Props = {
  theme: Theme;
};

function FloatingButton({ theme }: Props) {
  const [isOpened, setIsOpened] = React.useState(false);
  const { handleStartOnboard } = useOnboard();

  const [{ t }] = useTranslation('question');
  const handleOnboardClick = () => {
    handleStartOnboard();
    setIsOpened(false);
  };
  return (
    <div className="relative">
      <div
        onClick={() => setIsOpened(!isOpened)}
        className={getCssByTheme(
          theme,
          ['bg-sara-secondary floating-shadow-sara', 'bg-mara-secondary floating-shadow-mara'],
          'w-[68px] h-[68px] relative flex justify-center items-center rounded-tr-[10px] rounded-br-[10px]        ',
        )}
        // className={isHovered ? 'hover-ani' : 'non-hover-ani'}
      >
        {!isOpened ? (
          <button type="button">
            <Image
              alt={theme === 'sara' ? 'sara' : 'mara'}
              width={52}
              height={52}
              src={theme === 'sara' ? SaraBeforeHover : MaraBeforeHover}
            />
          </button>
        ) : (
          <button type="button">
            <Image
              alt={theme === 'sara' ? 'sara' : 'mara'}
              width={52}
              height={52}
              src={theme === 'sara' ? SaraHover : MaraHover}
            />
          </button>
        )}
      </div>
      {isOpened && (
        <div
          className={getCssByTheme(
            theme,
            [
              'bg-sara-secondary text-sara-primary border-sara-25% tag-shadow-sara',
              'bg-mara-secondary border-mara-25% text-mara-primary tag-shadow-mara',
            ],
            'mt-[10px]  p-4 border border-solid  rounded-tr-[10px] rounded-br-[10px]',
          )}
        >
          <h3 className="font-14-title-100 mb-[10px]">{t(`floating_help_title_${theme}`)}</h3>
          <div className="font-12-title-100 flex flex-col gap-1">
            <div
              className={getCssByTheme(
                theme,
                ['bg-sara-25%', 'bg-mara-25%'],
                'py-[10px] pl-2 w-[180px] rounded-[6px] cursor-pointer',
              )}
              onClick={() => window.open('https://forms.gle/wZ6r3Vo5E4vBLsGz7')}
            >
              {t('floating_help_tutorial_common')}
            </div>
            <div
              onClick={handleOnboardClick}
              className={getCssByTheme(
                theme,
                ['bg-sara-25%', 'bg-mara-25%'],
                'py-[10px] pl-2 w-[180px] rounded-[6px] cursor-pointer',
              )}
            >
              {t('floating_help_introduction_common')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingButton;
