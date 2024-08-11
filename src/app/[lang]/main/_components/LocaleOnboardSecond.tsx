import React from 'react';
import SaraCircleCharacter from '@/asset/logo/SaraCircleCharacter.svg';
import DontKnow from '@/app/[lang]/main/_asset/dont-know.svg';
import HiSara from '@/app/[lang]/main/_asset/hi-sara.svg';
import HiMara from '@/app/[lang]/main/_asset/hi-mara.svg';
import Dot from '@/app/_asset/dot.svg';

interface Props {
  onClickNextButton: () => void;
  onClickPrevButton: () => void;
}

export default function LocaleOnboardSecond({ onClickNextButton, onClickPrevButton }: Props) {
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

        <p className="font-16-medium-140 text-neutral-700 ">
          Sara(사라) means ‘Just buy it’ in Korean. She’s your AI shopping assistant, here to help you decide whether to
          purchase an item you’re considering. Just let her know what you want to buy and why you’re hesitating, and
          she’ll give you the best advice to make your purchase decision easier and more confident!
        </p>
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
