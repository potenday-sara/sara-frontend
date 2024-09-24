import React from 'react';
import { cva } from 'class-variance-authority';
import LeftArrow from '@/app/_asset/left-arrow.svg';
import RightArrow from '@/app/_asset/right-arrow.svg';
import getCssByTheme from '@/app/_utils/getCssByTheme';

const PaginationClassName = cva('flex items-center justify-center rounded-[8px] w-8 h-8', {
  variants: {
    theme: {
      sara: 'bg-sara-secondary',
      mara: 'bg-mara-secondary',
    },
  },
});

const PaginationArrowClassName = cva('', {
  variants: {
    theme: {
      sara: 'text-sara-primary opacity-100',
      mara: 'text-mara-primary opacity-100',
    },
    disActive: {
      true: 'opacity-50',
    },
  },
});

type PaginationProps = {
  nowPage: number;
  maxPage: number;
  leftClick: () => void;
  rightClick: () => void;
  type: 'sara' | 'mara';
};

function Pagination({ nowPage, maxPage, leftClick, rightClick, type }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        type="button"
        className={PaginationClassName({ theme: type })}
        onClick={leftClick}
        disabled={nowPage === 1}
      >
        <LeftArrow className={PaginationArrowClassName({ theme: type, disActive: nowPage === 1 })} />
      </button>

      <span
        className={getCssByTheme(type, ['text-sara-primary', 'text-mara-primary'], '"font-14-medium-140 align-middle"')}
      >
        {nowPage} / {maxPage}
      </span>
      <button
        type="button"
        className={PaginationClassName({ theme: type })}
        onClick={rightClick}
        disabled={nowPage === maxPage}
      >
        <RightArrow className={PaginationArrowClassName({ theme: type, disActive: nowPage === maxPage })} />
      </button>
    </div>
  );
}

export default Pagination;
