import React, { MouseEvent } from 'react';
import Balloon from '@/app/_components/balloon/Ballon';
import Dot from '@/app/_asset/dot.svg';
import X from '@/app/_asset/x.svg';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { Theme } from '@/feature/question/ThemeContext';
import { useTranslation } from '@/app/_hooks/useTranslation';

interface Props {
  position: 'top' | 'bottom';
  top: number;
  stage: number;
  onClickNextButton?: () => void;
  onClickPrevButton?: () => void;
  onClickEndButton?: () => void;
  onClickCloseButton: () => void;
  title: string;
  theme: Theme;
  description?: string;
}

export default function OnboardBalloon({
  title,
  onClickPrevButton,
  description,
  position,
  top,
  stage,
  theme,
  onClickCloseButton,
  onClickEndButton,
  onClickNextButton,
}: Props) {
  const [{ t }] = useTranslation('question');
  const balloonPosition = position === 'top' ? 'bubble-left-bottom' : 'bubble-left-top';
  const handleClickNextButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (onClickNextButton) {
      onClickNextButton();
    }
  };
  const handleClickPrevButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (onClickPrevButton) {
      onClickPrevButton();
    }
  };
  return (
    <div
      style={{
        position: 'absolute',
        top: position === 'top' ? top - 20 : top - 100,
        left: 10,
        zIndex: 999999999999,
        transform: position === 'top' ? 'translateY(-100%)' : 'translateY(100%)',
      }}
    >
      <Balloon
        position={balloonPosition}
        classNames="!py-3 !px-[14px] w-[312px] h-auto bg-white text-black blur-dark border-transparent"
      >
        <div>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-start">
              <h3 className="font-15-title-140 text-white whitespace-pre-wrap">{title}</h3>
              <button className="mt-1" type="button">
                <X />
              </button>
            </div>
            <p className="font-12-medium-140 text-white opacity-70 whitespace-pre-wrap">{description}</p>
          </div>
          <div className="flex items-end justify-between text-white mt-3">
            <div className="flex gap-[3px]">
              {new Array(4).fill(0).map((value, index) => (
                <div
                  className={
                    index <= stage ? getCssByTheme(theme, ['text-sara-primary', 'text-mara-primary'], '') : 'text-white'
                  }
                >
                  <Dot key={`${value}_dot`} />
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              {onClickPrevButton && (
                <button
                  onClick={handleClickPrevButton}
                  type="button"
                  className={getCssByTheme(
                    theme,
                    ['bg-sara-secondary text-sara-primary', 'bg-mara-secondary text-mara-primary'],
                    'font-12-title-100 rounded-[6px]  py-[6px] px-2',
                  )}
                >
                  {t('tutorial_button_previous')}
                </button>
              )}
              {onClickNextButton && (
                <button
                  onClick={handleClickNextButton}
                  type="button"
                  className={getCssByTheme(
                    theme,
                    ['bg-sara-primary', 'bg-mara-primary'],
                    'font-12-title-100 rounded-[6px] py-[6px] px-2',
                  )}
                >
                  {t('tutorial_button_next')}
                </button>
              )}
              {onClickEndButton && (
                <button
                  onClick={onClickEndButton}
                  type="button"
                  className={getCssByTheme(
                    theme,
                    ['bg-sara-primary', 'bg-mara-primary'],
                    'font-12-title-100 rounded-[6px] py-[6px] px-2',
                  )}
                >
                  {t('tutorial_button_done')}
                </button>
              )}
            </div>
          </div>
        </div>
      </Balloon>
    </div>
  );
}
