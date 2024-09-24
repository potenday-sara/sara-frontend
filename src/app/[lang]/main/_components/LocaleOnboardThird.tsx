import React from 'react';
import MaraCircleCharacter from '@/asset/logo/MaraCircleCharacter.svg';
import YouKnow from '@/app/[lang]/main/_asset/you-know.svg';
import HiMara from '@/app/[lang]/main/_asset/hi-mara.svg';
import Dot from '@/app/_asset/dot.svg';
import { Locale } from '@/app/i18n/i18n.config';
import { useTranslation } from '@/app/_hooks/useTranslation';

interface Props {
  onClickPrevButton: () => void;
  onClickCloseButton: () => void;
  lang: Locale;
}

export default function LocaleOnboardThird({ lang, onClickPrevButton, onClickCloseButton }: Props) {
  const [{ t }] = useTranslation('main');

  return (
    <>
      <div className="gap-2 h-[235px] bg-secondary-50 flex flex-col p-8 items-center ">
        <div className="w-[105px]">
          <MaraCircleCharacter />
        </div>
        <YouKnow />
      </div>
      <div className="flex flex-col gap-4 bg-white px-4 py-8 w-full">
        <div className="m-auto">
          <HiMara />
        </div>

        <p className="font-16-medium-140 text-neutral-700 ">{t('introduce_3')}</p>
      </div>
      <div className="flex justify-between items-end px-2.5">
        <div className="flex gap-[3px]">
          {new Array(3).fill(0).map((value, index) => (
            <div className={index <= 2 ? 'text-sara-primary' : 'text-black-#ddd'}>
              <Dot key={`${value}_dot`} />
            </div>
          ))}
        </div>

        <div className="flex gap-1">
          <button
            type="button"
            onClick={onClickPrevButton}
            className="rounded-[6px] bg-mara-secondary py-2.5 px-3 text-mara-primary font-14-title-100"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={onClickCloseButton}
            className="rounded-[6px] bg-mara-primary py-2.5 px-3 text-white font-14-title-100"
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
}
