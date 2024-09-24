import React from 'react';
import PropTypes from 'prop-types';
import BottomArrow from '@/app/_asset/bottom-arrow.svg';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { Theme } from '@/feature/question/ThemeContext';

type SelectInputProps = {
  value: string;
  theme: Theme;
};

function SelectInput({ value, theme }: SelectInputProps) {
  return (
    <div className="cursor-pointer relative z-50 w-[140px] flex items-center border border-solid rounded-[8px] px-2 border-black-#ddd">
      <input
        className={getCssByTheme(
          theme,
          ['text-sara-primary', 'text-mara-primary'],
          'w-full py-[10px] rounded-[8px] gap-2 font-14-medium-140 outline-none cursor-pointer',
        )}
        value={value}
        type="select"
        readOnly
      />
      <div className="text-black-#ddd">
        <BottomArrow />
      </div>
    </div>
  );
}

export default SelectInput;
