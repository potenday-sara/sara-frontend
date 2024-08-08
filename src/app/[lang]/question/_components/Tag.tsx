import React from 'react';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { Theme } from '@/feature/question/ThemeContext';

type Props = {
  type: Theme;
  theme: Theme;
  isActive: boolean;
  onClick: (type: Theme) => void;
};

function Tag({ type, isActive, theme, onClick }: Props) {
  return (
    <div
      onClick={() => onClick(type)}
      className={getCssByTheme(
        type,
        ['mt-8 text-sara-primary bg-sara-secondary', 'mt-[80px] text-mara-primary bg-mara-secondary'],
        `z-50 mt-8 cursor-pointer absolute flex right-0  justify-center items-center w-12 h-12 rounded-tl-lg rounded-bl-lg ${
          isActive ? 'bg-white' : ''
        } ${theme === 'sara' ? 'tag-shadow-sara' : 'tag-shadow-mara'}`,
      )}
    >
      {type === 'sara' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="currentColor">
          <path
            d="M0.75 24H13.0256L15.2575 19.3577L17.5624 24H29.25L27.5331 22.7737L15.3439 0L2.55271 22.7737L0.75 24Z"
            fillOpacity={isActive ? undefined : 0.4}
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0H10.8613L12 1.22628L13.1387 0H24V24H0V0Z" fillOpacity={isActive ? undefined : 0.4} />
        </svg>
      )}
    </div>
  );
}

export default Tag;
