import React from 'react';
import SaraMara from '@/app/[lang]/main/_asset/sara-mara.svg';
import FirstTime from '@/app/[lang]/main/_asset/first-time.svg';
import Dot from '@/app/_asset/dot.svg';

interface Props {
  onClickNextButton: () => void;
}

export default function LocaleOnboardFirst({ onClickNextButton }: Props) {
  return (
    <>
      <div className="gap-2 h-[235px] bg-primary-100 flex flex-col p-8 items-center ">
        <SaraMara />
        <FirstTime />
      </div>

      <div className="flex flex-col gap-4 bg-white px-4 py-8 w-full">
        <p className="font-16-medium-140 text-black-#999 ">
          Let me introduce our Characters and theme of this Service! Follow us!
        </p>
      </div>
      <div className="flex justify-between items-end px-2.5">
        <div className="flex gap-[3px]">
          {new Array(3).fill(0).map((value, index) => (
            <div className={index <= 0 ? 'text-sara-primary' : 'text-black-#ddd'}>
              <Dot key={`${value}_dot`} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onClickNextButton}
          className="rounded-[6px] bg-sara-primary py-2.5 px-3 text-white font-14-title-100"
        >
          Next
        </button>
      </div>
    </>
  );
}
