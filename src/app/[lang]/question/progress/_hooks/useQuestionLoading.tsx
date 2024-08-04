import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import getQuestionState from '@/apis/question/getQuestionState';
import useInterval from '@/app/_hooks/useInterval';
import { useQuestion } from '@/app/[lang]/question/_context/QuestionContext';
import { Theme } from '@/feature/question/ThemeContext';

type Props = {
  questionId: string;
  theme: Theme;
};

const MAX_REQUEST_COUNT = 18;
const MAX_REQUEST_COUNT_FOR_RETRY = 10;

const computeProgress = (nowProgress: number, maxProgress: number) =>
  Math.max(100 - Math.floor((nowProgress / maxProgress) * 100), 0);

export default function useQuestionLoading({ questionId, theme }: Props) {
  const router = useRouter();
  const [requestCount, setRequestCount] = useState<number>(0);
  const { itemName } = useQuestion();

  const progress = useMemo(() => computeProgress(requestCount, MAX_REQUEST_COUNT), [requestCount]);

  const getQuestion = useCallback(async () => {
    try {
      const response = await getQuestionState({ id: questionId });
      setRequestCount((prev) => prev + 1);

      if (response.data.answer !== null) {
        router.push(`/question/answer/?theme=${theme}&answerId=${response.data.answer}&questionId=${questionId}&keyword=${itemName}
        `);
      }
    } catch (e) {
      console.log('e', e);
    }
  }, [questionId]);

  useInterval(getQuestion, 1000, true);

  return { progress };
}
