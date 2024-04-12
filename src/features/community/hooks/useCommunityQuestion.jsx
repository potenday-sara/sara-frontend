import { useQuery } from 'react-query';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getQuestionState } from '../../question/apis/postQuestion';
import getAnswer from '../../question/apis/getAnswer';
import { useDeleteLike, usePostLike } from '../apis/like';

const useCommunityQuestion = () => {
  const [searchParams] = useSearchParams();
  const [like, setLike] = useState(false);

  const questionId = useMemo(() => searchParams.get('questionId'), [searchParams]);

  const { mutate: postLike } = usePostLike(questionId);
  const { mutate: deleteLike } = useDeleteLike(questionId);

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

  const handleLike = () => {
    if (like) {
      deleteLike(questionId);
      setLike(false);
    } else {
      postLike(questionId);
      setLike(true);
    }
  };

  const isLoading = useMemo(() => {
    return QuestionLoading || AnswerLoading || !questionId;
  });

  return {
    questionId,
    QuestionData,
    handleLike,
    answerData,
    isLoading,
    like,
  };
};

export default useCommunityQuestion;
