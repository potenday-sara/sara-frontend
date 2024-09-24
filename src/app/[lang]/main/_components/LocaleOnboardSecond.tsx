import React from 'react';
import SaraCircleCharacter from '@/asset/logo/SaraCircleCharacter.svg';
import DontKnow from '@/app/[lang]/main/_asset/dont-know.svg';
import HiSara from '@/app/[lang]/main/_asset/hi-sara.svg';
import HiMara from '@/app/[lang]/main/_asset/hi-mara.svg';
import Dot from '@/app/_asset/dot.svg';
import { Locale } from '@/app/i18n/i18n.config';
import { useTranslation } from '@/app/_hooks/useTranslation';

interface Props {
  onClickNextButton: () => void;
  onClickPrevButton: () => void;
  lang: Locale;
}

export default function LocaleOnboardSecond({ lang, onClickNextButton, onClickPrevButton }: Props) {
  const [{ t }] = useTranslation('main');

  return (
    <>
      <div className="gap-2 h-[235px] bg-primary-100 flex flex-col p-8 items-center ">
        <div className="w-[105px]">
          <SaraCircleCharacter />
        </div>
        <DontKnow />
      </div>
      <div className="flex flex-col gap-4 bg-white px-4 py-8 w-full">
        <div className="m-auto">
          <HiSara />
        </div>

        <p className="font-16-medium-140 text-neutral-700 ">{t('introduce_2')}</p>
      </div>
      <div className="flex justify-between items-end px-2.5">
        <div className="flex gap-[3px]">
          {new Array(3).fill(0).map((value, index) => (
            <div className={index <= 1 ? 'text-sara-primary' : 'text-black-#ddd'}>
              <Dot key={`${value}_dot`} />
            </div>
          ))}
        </div>

        <div className="flex gap-1">
          <button
            type="button"
            onClick={onClickPrevButton}
            className="rounded-[6px] bg-sara-secondary py-2.5 px-3 text-sara-primary font-14-title-100"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={onClickNextButton}
            className="rounded-[6px] bg-sara-primary py-2.5 px-3 text-white font-14-title-100"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
