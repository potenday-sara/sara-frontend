'use client';

import React from 'react';
import Kakao from '@/app/[lang]/lounge/[questionId]/_asset/kakao.svg';
import shareKaKao from '@/app/_utils/shareKaKao';
import KaKaoShare from '@/app/[lang]/question/answer/_asset/share/kakao-share.svg';
import { useTranslation } from '@/app/_hooks/useTranslation';

type Props = {
  questionId: string;
  type: 'ONLY_LOGO' | 'HYBRID';
};

export default function AnswerKakaoShare({ questionId, type = 'HYBRID' }: Props) {
  const [{ t }] = useTranslation('lounge');

  return (
    <div>
      {type === 'ONLY_LOGO' ? (
        <button
          type="button"
          onClick={() => shareKaKao(questionId)}
          className="bg-sky-50 rounded-[10px] flex-1 flex flex-col items-center justify-center gap-1"
        >
          <KaKaoShare />
        </button>
      ) : (
        <button
          onClick={() => shareKaKao(questionId)}
          className="flex justify-center items-center gap-2 p-3 rounded-[36px] shrink-0 bg-yellow-kakao"
        >
          <Kakao />
          <span className="font-12-medium-100">{t('general_share_kakao')}</span>
        </button>
      )}
    </div>
  );
}
