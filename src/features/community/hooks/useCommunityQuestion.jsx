import { useQuery } from 'react-query';
import { getQuestionState } from '../../question/apis/postQuestion';
import getAnswer from '../../question/apis/getAnswer';

const useCommunityQuestion = (questionId) => {
  const { data: QuestionData } = useQuery({
    queryKey: ['getQuestion', questionId],
    queryFn: async () => {
      const { data } = await getQuestionState(questionId);
      return data;
    },
    enabled: !!questionId,
  });

  const { data: answerData } = useQuery({
    queryKey: ['getAnswer', QuestionData.answer],
    queryFn: async () => {
      const { data } = await getAnswer(QuestionData.answer);
      return data;
    },
    enabled: !!QuestionData.answer,
  });

  return {
    QuestionData,
    answerData,
  };
};

export default useCommunityQuestion;
