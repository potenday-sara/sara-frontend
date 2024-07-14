'use client';

import Kakao from '@/app/lounge/[questionId]/_asset/kakao.svg';

export default function AnswerKakaoShare() {
  return (
    <button className="flex justify-center items-center gap-2 p-3 rounded-[36px] shrink-0 bg-yellow-kakao">
      <Kakao />
      <span className="font-12-medium-100">카카오톡 공유</span>
    </button>
  );
}
