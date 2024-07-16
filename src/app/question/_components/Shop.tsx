import React from 'react';
import { useQuestion } from '@/app/question/_context/QuestionContext';
import BaroSara from '@/app/question/_asset/baro-sara.svg';
import BaroMara from '@/app/question/_asset/bara-mara.svg';
import { Theme, useSaraMara } from '@/feature/question/ThemeContext';
import Dropdown from '@/app/_components/dropdown';
import SelectInput from '@/app/_components/input/SelectInput';
import useShop from '@/app/question/_hooks/useShop';

interface Props {}

export default function Shop({}: Props) {
  const { itemName } = useQuestion();
  const { theme } = useSaraMara();
  const { categories } = useShop();

  console.log('categories', categories);
  return (
    <div className="w-full relative bg-white rounded-[24px] pt-4 px-4 py-10 flex flex-col gap-2">
      <div className="flex items-end justify-between">
        <Dropdown trigger={<SelectInput theme={theme} value="1243" />}>
          {categories?.map((category) => <Dropdown.Item label={category.name} key={category.id} />)}
        </Dropdown>
        <div className="mb-[9px]">{theme === 'sara' ? <BaroSara /> : <BaroMara />}</div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="cursor-pointer h-[98px] rounded-[16px] p-[10px] items-center border border-solid border-black-#eee flex gap-4">
          <div className="image w-[76px]" />
          <div className="flex-1 flex flex-col gap-[6px]">
            <p className="font-14-title-100 text-black-#666 two-line-truncate">삼성전자 세라믹</p>
            <p className="font-14-title-100">116,800원</p>
            <p>로켓배송</p>
          </div>
        </div>
      </div>
    </div>
  );
}
