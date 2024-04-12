import { useQuery } from 'react-query';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getQuestionState } from '../../question/apis/postQuestion';
import getAnswer from '../../question/apis/getAnswer';

const useCommunityQuestion = () => {
  const [searchParams] = useSearchParams();

  const questionId = useMemo(() => searchParams.get('questionId'), [searchParams]);

  const { data: QuestionData, isLoading: QuestionLoading } = useQuery({
    queryKey: ['getQuestion', questionId],
    queryFn: async () => {
      const { data } = await getQuestionState(questionId);
      return data;
    },
    enabled: !!questionId,
  });

  const { data: answerData, isLoading: AnswerLoading } = useQuery({
    queryKey: ['getAnswer', QuestionData?.answer],
    queryFn: async () => {
      const { data } = await getAnswer(QuestionData?.answer);
      return data;
    },
    enabled: !!QuestionData?.answer,
  });

  const isLoading = useMemo(() => {
    return QuestionLoading || AnswerLoading || !questionId;
  });

  return {
    questionId,
    QuestionData,
    answerData,
    isLoading,
  };
};

export default useCommunityQuestion;
