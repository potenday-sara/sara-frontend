import React, { memo } from 'react';
import Progressbar from '@/components/atoms/Progressbar';
import { Theme } from '@/feature/question/ThemeContext';
import useQuestionLoading from '@/app/question/progress/_hooks/useQuestionLoading';

type Props = {
  theme: Theme;
  questionId: string;
};

function QuestionProgress({ theme, questionId }: Props) {
  const { progress } = useQuestionLoading({ questionId, theme });

  return (
    <Progressbar
      progress={progress}
      width="100%"
      height="14px"
      color={theme}
      start="right"
      // transition="width 0.5s"
      className="rounded-[12px]"
      reverse
    />
  );
}

export default memo(QuestionProgress);
