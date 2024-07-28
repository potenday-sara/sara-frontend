import React, { Suspense } from 'react';
import { redirect } from 'next/navigation';
import getAnswer from '@/apis/answers/getAnswer';
import SaraCircle from '@/asset/logo/sara-circle.svg';
import MaraCircle from '@/asset/logo/mara-circle.svg';
import SaraCircleCharacter from '@/asset/logo/SaraCircleCharacter.svg';
import MaraCircleCharacter from '@/asset/logo/MaraCircleCharacter.svg';
import SaraAnswer from '@/app/question/answer/_asset/sara-answer.svg';
import MaraAnswer from '@/app/question/answer/_asset/mara-answer.svg';
import LinkShare from '@/app/question/answer/_asset/share/share.svg';
import KaKaoShare from '@/app/question/answer/_asset/share/kakao-share.svg';

import getCssByTheme from '@/app/_utils/getCssByTheme';
import { Theme } from '@/feature/question/ThemeContext';
import EmotionFeedback from '@/app/question/answer/_components/EmotionFeedback';
import Logo from '@/components/atoms/Logo/Logo';
import TextFeedback from '@/app/question/answer/_components/TextFeedback';
import shareKaKao from '@/app/_utils/shareKaKao';
import AnswerKakaoShare from '@/app/lounge/[questionId]/_components/AnswerKakaoShare';
import AnswerShare from '@/app/lounge/[questionId]/_components/AnswerShare';

type Props = {
  searchParams: {
    theme: Theme;
    answerId: string;
    questionId: string;
  };
};

const handleGetAnswer = async (answerId: string) => {
  return getAnswer({ answerId });
};

export default async function page({ searchParams }: Props) {
  const theme: Theme = searchParams.theme || 'sara';

  const { questionId } = searchParams;

  if (!questionId) {
    redirect(`/question/?theme=${theme}`);
  }

  const data = await handleGetAnswer(searchParams.answerId);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full pt-8 px-4 pb-4 bg-white rounded-[20px] flex flex-col gap-4 items-center relative">
        <div className="logo h-[64px]">{theme === 'sara' ? <SaraCircle /> : <MaraCircle />}</div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="font-14-title-100 text-black-#666">나의 질문</h3>
          <h2 className={getCssByTheme(theme, ['text-sara-primary', 'text-mara-primary'], 'font-18-title-100')}>
            {data.product}
          </h2>
          <p className="font-14-medium-140 break-keep text-center text-black-#666">{data.question}</p>
        </div>
        <div className="divide h-[1px] w-full bg-black-#ddd" />
        <div className="character w-[148px] flex gap-4 flex-col items-center">
          {theme === 'sara' ? <SaraCircleCharacter /> : <MaraCircleCharacter />}
          {theme === 'sara' ? <SaraAnswer /> : <MaraAnswer />}
        </div>
        <p className="font-14-medium-140 text-black-#333">{data.content}</p>
        <EmotionFeedback theme={theme} questionId={questionId} />

        <div className="share flex flex-col items-center gap-3">
          <h2 className="text-black-#666 font-14-title-100">공유하기</h2>
          <div className="flex gap-6 w-full">
            <div className="flex items-center flex-col justify-center gap-2">
              <AnswerShare type="ONLY_LOGO" />
              <span className="font-12-medium-100 text-black-#999">링크 복사</span>
            </div>
            <div className="flex items-center flex-col justify-center gap-2">
              <AnswerKakaoShare questionId={questionId} type="ONLY_LOGO" />
              <span className="font-12-medium-100 text-black-#999">카카오톡</span>
            </div>
          </div>
        </div>
        <TextFeedback theme={theme} />
      </div>
    </Suspense>
  );
}
