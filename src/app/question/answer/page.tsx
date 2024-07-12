import React from 'react';
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
  const data = await handleGetAnswer(searchParams.answerId);

  return (
    <div className="w-full pt-8 px-4 pb-4 bg-white rounded-[20px] flex flex-col gap-4 items-center">
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
      <div className="flex gap-1 h-[70px] w-full">
        <button
          type="button"
          className="text-sara-primary rounded-[10px] font-14-title-100 flex-1 bg-sara-secondary rounded-10 flex flex-col items-center justify-center gap-1"
        >
          <Logo logo="sara" />
          <span>{theme === 'sara' ? '에게 한번 더!' : '에게도 물어볼까?'}</span>
        </button>
        <button
          type="button"
          className="text-mara-primary rounded-[10px] font-14-title-100 flex-1 bg-mara-secondary rounded-10 flex flex-col items-center justify-center gap-1"
        >
          <Logo logo="mara" />
          <span>{theme === 'mara' ? '에게 한번 더!' : '에게도 물어볼까?'}</span>
        </button>
      </div>
      <div className="share flex flex-col items-center gap-3">
        <h2 className="text-black-#666 font-14-title-100">공유하기</h2>
        <div className="flex gap-6 w-full">
          <div className="flex items-center flex-col justify-center gap-2">
            <button
              type="button"
              className="flex-1 flex rounded-[12px] w-[56px] h-[56px] flex-col items-center justify-center gap-1 bg-black-#f4"
            >
              <LinkShare className="w-[32px] h-[32px]" />
            </button>
            <span className="font-12-medium-100 text-black-#999">링크 복사</span>
          </div>
          <div className="flex items-center flex-col justify-center gap-2">
            <button
              type="button"
              className="bg-sky-50 rounded-[10px] flex-1 flex flex-col items-center justify-center gap-1"
            >
              <KaKaoShare />
            </button>
            <span className="font-12-medium-100 text-black-#999">카카오톡</span>
          </div>
        </div>
      </div>
      <TextFeedback theme={theme} />
    </div>
  );
}
