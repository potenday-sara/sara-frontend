'use client';

import React, { cloneElement } from 'react';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { Theme } from '@/feature/question/ThemeContext';
import { CONSTANTS_TEXT } from '@/app/question/answer/_constants';
import Select from '@/app/_components/select';
import SaraGood from '@/app/question/answer/_asset/feedback/sara/good.svg';
import SaraSoso from '@/app/question/answer/_asset/feedback/sara/soso.svg';
import SaraBad from '@/app/question/answer/_asset/feedback/sara/bad.svg';
import MaraGood from '@/app/question/answer/_asset/feedback/mara/good.svg';
import MaraSoso from '@/app/question/answer/_asset/feedback/mara/soso.svg';
import MaraBad from '@/app/question/answer/_asset/feedback/mara/bad.svg';
import SaraGoodSelect from '@/app/question/answer/_asset/feedback/sara/saragoodselect.svg';
import SaraSosoSelect from '@/app/question/answer/_asset/feedback/sara/sarasososelect.svg';
import SaraBadSelect from '@/app/question/answer/_asset/feedback/sara/sarabadselect.svg';
import MaraGoodSelect from '@/app/question/answer/_asset/feedback/mara/maragoodselect.svg';
import MaraSosoSelect from '@/app/question/answer/_asset/feedback/mara/marasososelect.svg';
import MaraBadSelect from '@/app/question/answer/_asset/feedback/mara/marabadselect.svg';
import useToast from '@/app/_hooks/useToast';
import Toast from '@/app/_components/toast';
import postQuestionFeedback from '@/apis/question/postQuestionFeedback';

type Props = {
  theme: Theme;
  questionId: string;
};

const saraFeedbackOptions = [
  [<SaraGood />, '도움이 됐어요', 1, <SaraGoodSelect />],
  [<SaraSoso />, '그럭저럭..?!', 0, <SaraSosoSelect />],
  [<SaraBad />, '영 별로에요', -1, <SaraBadSelect />],
];

const maraFeedbackOptions = [
  [<MaraGood />, '도움이 됐어요', 1, <MaraGoodSelect />],
  [<MaraSoso />, '그럭저럭..?!', 0, <MaraSosoSelect />],
  [<MaraBad />, '영 별로에요', -1, <MaraBadSelect />],
];

export default function EmotionFeedback({ theme, questionId }: Props) {
  const feedbackOptions = theme === 'sara' ? saraFeedbackOptions : maraFeedbackOptions;

  const [selectValue, setSelectValue] = React.useState(1);
  const { isToast, handleToastOpen } = useToast(800);

  const handleEmotionClick = async (value: 0 | 1 | -1) => {
    setSelectValue(value);
    handleToastOpen();
    try {
      await postQuestionFeedback({ question: questionId, feedback: value });
    } catch (e) {
      console.log('e', e);
    }
  };
  return (
    <form
      className={getCssByTheme(
        theme,
        ['bg-sky-50', 'bg-red-50'],
        'flex flex-col gap-2 w-full items-center p-2 rounded-[12px]',
      )}
    >
      <h3 className="font-12-title-100 text-black-#999">{CONSTANTS_TEXT.emotion_feedback_label[theme].ko}</h3>
      {/* <FeedbackSelect type={type} quesionId={quesionId} /> */}
      <Select onChange={() => {}} value="1">
        <Select.List className="flex gap-6 items-center ">
          {feedbackOptions.map(([icon, text, value, selectIcon]) => (
            <div
              onClick={() => handleEmotionClick(value as 0 | 1 | -1)}
              className="relative flex gap-1 cursor-pointer flex-col items-center w-[68px] font-12-medium-100 text-black-#666"
              key={text as string}
            >
              {cloneElement(selectValue === value ? (selectIcon as any) : (icon as any), {
                stroke: `${
                  theme === 'sara'
                    ? value === selectValue
                      ? '#007BED'
                      : '#E5F2FD'
                    : value === selectValue
                      ? '#EF2B00'
                      : '#FDEAE5'
                }`,
              })}
              <span>{text}</span>
              {isToast && selectValue === value && (
                <Toast width={130}>
                  <span className="text-white font-12-medium-100">평가가 반영되었어요!</span>
                </Toast>
              )}
            </div>
          ))}
        </Select.List>
      </Select>
    </form>
  );
}
