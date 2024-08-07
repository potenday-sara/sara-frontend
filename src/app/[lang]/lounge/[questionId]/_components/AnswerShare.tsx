'use client';

import { cva } from 'class-variance-authority';
import React from 'react';
import Share from '@/app/[lang]/lounge/[questionId]/_asset/share.svg';
import LinkShare from '@/app/[lang]/question/answer/_asset/share/share.svg';
import { useTranslation } from '@/app/_hooks/useTranslation';

type Prps = {
  type?: 'ONLY_LOGO' | 'HYBRID';
};

const ShareButtonClassName = cva(
  'flex items-center justify-center gap-2 px-3 h-[44px] rounded-[36px] border border-solid bg-black-#f4',
);

export default function AnswerShare({ type = 'HYBRID' }: Prps) {
  const handleClickShare = async () => {
    const url = window.location.href;
    await navigator.clipboard.writeText(url);
    alert('링크가 복사되었습니다.');
  };

  const [{ t }] = useTranslation('lounge');
  return (
    <div>
      {type === 'ONLY_LOGO' ? (
        <button
          onClick={handleClickShare}
          type="button"
          className="flex-1 flex rounded-[12px] w-[56px] h-[56px] flex-col items-center justify-center gap-1 bg-black-#f4"
        >
          <LinkShare className="w-[32px] h-[32px]" />
        </button>
      ) : (
        <button className={ShareButtonClassName()} onClick={handleClickShare} type="button">
          <Share fill="#fff" />
          <span className="font-12-medium-100">{t('general_share_title')}</span>
        </button>
      )}
    </div>
  );
}
