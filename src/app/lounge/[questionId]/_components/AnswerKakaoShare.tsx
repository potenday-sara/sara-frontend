'use client';

import { useEffect } from 'react';
import Kakao from '@/app/lounge/[questionId]/_asset/kakao.svg';
import shareKaKao from '@/app/_utils/shareKaKao';

type Props = {
  questionId: string;
};

export default function AnswerKakaoShare({ questionId }: Props) {
  return (
    <button
      onClick={() => shareKaKao(questionId)}
      className="flex justify-center items-center gap-2 p-3 rounded-[36px] shrink-0 bg-yellow-kakao"
    >
      <Kakao />
      <span className="font-12-medium-100">카카오톡 공유</span>
    </button>
  );
}
