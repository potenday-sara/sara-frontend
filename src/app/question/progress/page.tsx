'use client';

import React from 'react';
import SaraCircle from '@/asset/logo/sara-circle.svg';
import MaraCircle from '@/asset/logo/mara-circle.svg';
import { Theme } from '@/feature/question/ThemeContext';
import LoadingLottie from '@/app/question/progress/_components/Loading';
import Progressbar from '@/components/atoms/Progressbar';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { useQuestion } from '@/feature/question/QuestionContext';
import useQuestionLoading from '@/app/question/progress/_hooks/useQuestionLoading';
import QuestionProgress from '@/app/question/progress/_components/QuestionProgress';

const saraRandomTextArray = [
  '질문 내용을 자세하게 물어보면\n더 좋은 답변을 받을 수 있을 거예요!',
  '어떤 상품은 Sara가 잘 모를 수도 있어요...!\n예를 들면... [비트겐슈타인 그란데 사이즈 3종 세트] 같은 거?',
  'Sara의 답변이 마음에 드신다면,\n하단의 평가 버튼을 눌러주세요!\n더 좋은 조언을 주는 데에 힘이 될 거예요!',
  '여기 어딘가에 정말 멋진 상품들이\n있는 거 같아요! 클릭하면 대체 어떤 좋은 일이 일어날까요?\n(엇, 너무 속 보였나...?)',
];
const maraRandomTextArray = [
  '질문 내용을 자세하게 물어보면\n더 좋은 답변을 받을 수 있을 거예요!',
  '어떤 상품은 Mara가 잘 모를 수도 있어요...!\n예를 들면... [비트겐슈타인 그란데 사이즈 3종 세트] 같은 거?',
  'Mara의 답변이 마음에 드신다면,\n하단의 평가 버튼을 눌러주세요!\n더 좋은 조언을 주는 데에 힘이 될 거예요!',
  '여기 어딘가에 정말 멋진 상품들이\n있는 거 같아요! (속닥속닥)근데 Mara는 그게 영 못 마땅한가 봐요...!',
];

const getRandomText = (theme: Theme, index: number) => {
  if (theme === 'sara') {
    return saraRandomTextArray[index];
  }
  return maraRandomTextArray[index];
};

const getChipText = (index: number) => {
  if (index < 2) return '질문 팁';
  return '사용 팁';
};
export default function page({ searchParams }: { searchParams: { type: Theme } }) {
  const theme = searchParams.type;
  const randomIndex = Math.floor(Math.random() * 4);

  const { itemName, itemDescription, questionId } = useQuestion();

  return (
    <div className="w-full pt-8 px-4 pb-4 bg-white rounded-[20px] flex flex-col gap-4 items-center">
      <div className="logo h-[64px]">{theme === 'sara' ? <SaraCircle /> : <MaraCircle />}</div>
      <div className="character w-[148px] flex gap-4 flex-col">
        <LoadingLottie theme={theme} />
        <QuestionProgress questionId={questionId} theme={theme} />
      </div>
      <div className="flex flex-col justify-center items-center gap-3 pb-6 border-b border-gray-100">
        <div
          className={getCssByTheme(
            theme,
            ['text-sara-primary', 'text-mara-primary'],
            'rounded-[6px] border-[1px] border-solid font-12-title-100 p-[6px]',
          )}
        >
          {getChipText(randomIndex)}
        </div>
        <div className="font-16-title-140 whitespace-pre-wrap break-keep text-center">
          {getRandomText(theme, randomIndex)}
        </div>
      </div>
      <div className="divide h-[1px] w-full bg-black-#ddd" />
      <div className="flex flex-col justify-center items-center gap-1">
        <h3 className="font-14-title-100 text-black-#666">나의 질문</h3>
        <h2 className={getCssByTheme(theme, ['text-sara-primary', 'text-mara-primary'], 'font-18-title-100')}>
          {itemName}
        </h2>
        <p className="font-14-medium-140 break-keep text-center">{itemDescription}</p>
      </div>
    </div>
  );
}
