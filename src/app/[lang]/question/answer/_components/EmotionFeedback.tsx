'use client';

import React, { cloneElement } from 'react';
import { useRouter } from 'next/navigation';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { Theme } from '@/feature/question/ThemeContext';
import { CONSTANTS_TEXT } from '@/app/[lang]/question/answer/_constants';
import Select from '@/app/_components/select';
import SaraGood from '@/app/[lang]/question/answer/_asset/feedback/sara/good.svg';
import SaraSoso from '@/app/[lang]/question/answer/_asset/feedback/sara/soso.svg';
import SaraBad from '@/app/[lang]/question/answer/_asset/feedback/sara/bad.svg';
import MaraGood from '@/app/[lang]/question/answer/_asset/feedback/mara/good.svg';
import MaraSoso from '@/app/[lang]/question/answer/_asset/feedback/mara/soso.svg';
import MaraBad from '@/app/[lang]/question/answer/_asset/feedback/mara/bad.svg';
import SaraGoodSelect from '@/app/[lang]/question/answer/_asset/feedback/sara/saragoodselect.svg';
import SaraSosoSelect from '@/app/[lang]/question/answer/_asset/feedback/sara/sarasososelect.svg';
import SaraBadSelect from '@/app/[lang]/question/answer/_asset/feedback/sara/sarabadselect.svg';
import MaraGoodSelect from '@/app/[lang]/question/answer/_asset/feedback/mara/maragoodselect.svg';
import MaraSosoSelect from '@/app/[lang]/question/answer/_asset/feedback/mara/marasososelect.svg';
import MaraBadSelect from '@/app/[lang]/question/answer/_asset/feedback/mara/marabadselect.svg';
import useToast from '@/app/_hooks/useToast';
import Toast from '@/app/_components/toast';
import postQuestionFeedback from '@/apis/question/postQuestionFeedback';
import Logo from '@/components/atoms/Logo/Logo';
import { useTranslation } from '@/app/_hooks/useTranslation';

type Props = {
  theme: Theme;
  questionId: string;
};

export default function EmotionFeedback({ theme, questionId }: Props) {
  const [{ t }, lang] = useTranslation('answer');

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

  const router = useRouter();
  const saraFeedbackOptions = [
    [<SaraGood />, t('answer_feedback_good'), 1, <SaraGoodSelect />],
    [<SaraSoso />, t('answer_feedback_normal'), 0, <SaraSosoSelect />],
    [<SaraBad />, t('answer_feedback_bad'), -1, <SaraBadSelect />],
  ];

  const maraFeedbackOptions = [
    [<MaraGood />, t('answer_feedback_good'), 1, <MaraGoodSelect />],
    [<MaraSoso />, t('answer_feedback_normal'), 0, <MaraSosoSelect />],
    [<MaraBad />, t('answer_feedback_bad'), -1, <MaraBadSelect />],
  ];
  const feedbackOptions = theme === 'sara' ? saraFeedbackOptions : maraFeedbackOptions;

  return (
    <>
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
                    <span className="text-white font-12-medium-100">{t('answer_feedback_toast')}</span>
                  </Toast>
                )}
              </div>
            ))}
          </Select.List>
        </Select>
      </form>
      <div className="flex gap-1 h-[70px] w-full">
        <button
          type="button"
          onClick={() => router.push(`/${lang}/question/?theme=sara`)}
          className="text-sara-primary rounded-[10px] font-14-title-100 flex-1 bg-sara-secondary rounded-10 flex flex-col items-center justify-center gap-1"
        >
          <div className="w-[64px]">
            <Logo logo="sara" />
          </div>
          <span>{theme === 'sara' ? t('answer_retry') : t('answer_opposite')}</span>
        </button>
        <button
          type="button"
          onClick={() => router.push(`${lang}/question/?theme=mara`)}
          className="text-mara-primary rounded-[10px] font-14-title-100 flex-1 bg-mara-secondary rounded-10 flex flex-col items-center justify-center gap-1"
        >
          <div className="w-[64px]">
            <Logo logo="mara" />
          </div>
          <span>{theme === 'mara' ? t('answer_retry') : t('answer_opposite')}</span>
        </button>
      </div>
    </>
  );
}
