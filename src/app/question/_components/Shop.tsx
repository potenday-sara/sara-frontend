import React from 'react';
import { useQuestion } from '@/app/question/_context/QuestionContext';
import BaroSara from '@/app/question/_asset/baro-sara.svg';
import BaroMara from '@/app/question/_asset/bara-mara.svg';
import { useSaraMara } from '@/feature/question/ThemeContext';
import Dropdown from '@/app/_components/dropdown';
import { Theme } from '@/Styles';
import SelectInput from '@/app/_components/input/SelectInput';

interface Props {}

export default function Shop({}: Props) {
  const { itemName } = useQuestion();
  const { theme } = useSaraMara();
  return (
    <div className="w-full relative bg-white rounded-[24px] pt-4 px-4 py-10 flex flex-col">
      <div className="flex items-end justify-between">
        <Dropdown trigger={<SelectInput theme={theme} value="1243" />}>
          <Dropdown.Item label="1234" key="1234" />
        </Dropdown>
        <div className="mb-[9px]">{theme === 'sara' ? <BaroSara /> : <BaroMara />}</div>
      </div>
      <div>맵</div>
    </div>
  );
}
