'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { Theme } from '@/feature/question/ThemeContext';
import { useTranslation } from '@/app/_hooks/useTranslation';

type TextFeedbackProps = {
  theme: Theme;
};

const TextFeedbackButtonClassName = cva(`text-white font-14-title-140 p-2 rounded-[8px]`, {
  variants: {
    state: {
      saraAble: 'bg-sara-primary',
      maraAble: 'bg-mara-primary',
      saraDisable: 'bg-sara-secondary',
      maraDisable: 'bg-mara-secondary',
    },
  },
});

export default function TextFeedback({ theme }: TextFeedbackProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [feedBack, setFeedBack] = useState<string>('');
  const [{ t }] = useTranslation('answer');

  const handleSetFeedBack = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedBack(e.target.value);
  }, []);

  useEffect(() => {
    if (!textareaRef.current) return;
    // console.log(DefaultHeight);
    textareaRef.current.style.height = 'auto'; // 높이를 자동으로 설정하여 스크롤 높이를 계산
    const minHeight = Math.max(textareaRef.current.scrollHeight, 90);
    textareaRef.current.style.height = `${minHeight}px`;
  }, [feedBack]);

  // 첫글자를 대문자로 변환
  const bigTheme = theme.charAt(0).toUpperCase() + theme.slice(1);
  const buttonState: 'saraAble' | 'maraAble' | 'saraDisable' | 'maraDisable' =
    feedBack.length > 0 ? `${theme}Able` : `${theme}Disable`;

  return (
    <div className="share flex flex-col items-center gap-3 w-full px-[22px]">
      <h2 className="text-black-#666 font-14-title-100">피드백 보내기</h2>
      <div className=" w-full flex flex-col rounded-[10px] border border-solid border-gray-100 overflow-hidden">
        <textarea
          ref={textareaRef}
          onChange={handleSetFeedBack}
          id="input"
          placeholder={t(`answer_opinion_placeholder_${theme}`)}
          value={feedBack}
          rows={2}
          className="question-base-input-text-left resize-none font-14-medium-140 p-[24px] border-b-[1px] border-gray-100 overflow-hidden"
        />
        <div className="flex justify-end gap-3 p-2 text-black-#ddd font-12-medium-100 items-center">
          <span>{feedBack.length} / 500</span>
          <button
            type="submit"
            disabled={feedBack.length === 0}
            className={TextFeedbackButtonClassName({ state: buttonState })}
          >
            {t('answer_opinion_submit')}
          </button>
        </div>
      </div>
    </div>
  );
}
