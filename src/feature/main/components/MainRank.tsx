import React, { useContext } from 'react';
import { cva } from 'class-variance-authority';
import Button from '@/components/atoms/Button';
import Logo from '@/components/atoms/Logo/Logo';

type Props = {
  theme: 'sara' | 'mara';
};

const MainRankButton = cva('flex-1 py-[19px] flex justify-center', {
  variants: {
    theme: {
      sara: 'text-sara-primary',
      mara: 'text-mara-primary',
    },
  },
});

function MainRank({ theme }: Props) {
  return (
    <div className="w-full">
      <div className="buttons flex w-full">
        <Button className={MainRankButton({ theme: 'sara' })} onClick={() => {}} label={<Logo logo="sara" />} />
        <Button className={MainRankButton({ theme: 'mara' })} onClick={() => {}} label={<Logo logo="mara" />} />
      </div>
      <div className="bg-black-#f4">
        <ul className="w-full flex px-[15px] py-2 overflow-auto gap-1 hide-scrollbar">
          <li className="px-[15px] py-2 rounded-[18px] bg-sara-primary font-14-title-100 text-white flex-shrink-0">
            자취필수품
          </li>
          <li className="px-[15px] py-2 rounded-[18px] bg-sara-primary font-14-title-100 text-white flex-shrink-0">
            자취필수품
          </li>
          <li className="px-[15px] py-2 rounded-[18px] bg-sara-primary font-14-title-100 text-white flex-shrink-0">
            자취필수품
          </li>
          <li className="px-[15px] py-2 rounded-[18px] bg-sara-primary font-14-title-100 text-white flex-shrink-0">
            자취필수품
          </li>
          <li className="px-[15px] py-2 rounded-[18px] bg-sara-primary font-14-title-100 text-white flex-shrink-0">
            자취필수품
          </li>
          <li className="px-[15px] py-2 rounded-[18px] bg-sara-primary font-14-title-100 text-white flex-shrink-0">
            자취필수품
          </li>
          <li className="px-[15px] py-2 rounded-[18px] bg-sara-primary font-14-title-100 text-white flex-shrink-0">
            자취필수품
          </li>
          <li className="px-[15px] py-2 rounded-[18px] bg-sara-primary font-14-title-100 text-white flex-shrink-0">
            자취필수품
          </li>
        </ul>
        <ul className="flex flex-col gap-[1px]">
          <li className="flex bg-white items-center h-[64px] gap-3 px-4">
            <div className="px-3 py-2 rounded-lg flex justify-center items-center bg-sara-secondary font-15-title-100">
              1
            </div>
            <div>안녕</div>
          </li>
          <li className="flex bg-white items-center h-[64px] gap-3 px-4">
            <div className="px-3 py-2 rounded-lg flex justify-center items-center bg-sara-secondary font-15-title-100">
              1
            </div>
            <div>안녕</div>
          </li>
          <li className="flex bg-white items-center h-[64px] gap-3 px-4">
            <div className="px-3 py-2 rounded-lg flex justify-center items-center bg-sara-secondary font-15-title-100">
              1
            </div>
            <div>안녕</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(MainRank);
