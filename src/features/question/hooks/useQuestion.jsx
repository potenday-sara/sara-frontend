import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import useInput from '../../../hooks/useInput';
import { getQuestionState, postQuestion } from '../apis/postQuestion';

/**
 * 질문 전송 및 데이터 관리 훅
 * @returns QuestionFormData
 */
const useQuestion = (type) => {
  const [stage, setStage] = useState('initial');
  const { value: ItemValue, onChange: ItemChange } = useInput('');
  const { value: ContentsValue, onChange: ContentsChange } = useInput('');
  // const [quesionId, setQuestionId] = useState('');
  const [quesionId, setQuestionId] = useState('8c4770e0-6680-4927-88fd-8c30b4bb2871');
  const [requestQuestion, setRequestQuestion] = useState(false);
  const [cnt, setCnt] = useState(0);
  const [answer, setAnswer] = useState('');
  const [MAX_CNT] = useState(60);
  // 최대 요청 횟수

  const { refetch } = useQuery({
    queryFn: async () => {
      setCnt((prev) => prev + 1);
      const { data } = await getQuestionState(quesionId);
      if (cnt < MAX_CNT) setRequestQuestion(true);
      else {
        // 임시로 시간초과가 발생했지만 대답완료 페이지로 이동
        setStage('finish');
        setRequestQuestion(false);
      }

      // 수정해야 하는 부분
      if (data.answer?.length > 0) {
        setCnt(100);
        setRequestQuestion(false);
        setAnswer(data.answer);
        setTimeout(() => {
          setStage('finish');
        }, 2000);
      }
    },

    queryKey: ['getId'],
    enabled: requestQuestion,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  const { mutate } = useMutation(postQuestion, {
    onSuccess: ({ data }) => {
      setQuestionId(data.id);
      setRequestQuestion(true);
      refetch();
    },
  });

  const QuestionFormData = {
    ItemValue,
    ItemChange,
    ContentsValue,
    ContentsChange,
  };

  const SubmitQuestion = (event) => {
    event.preventDefault();
    mutate({ ItemValue, ContentsValue, type });
    setStage('process');
  };

  const progress = Math.floor((cnt / MAX_CNT) * 100);
  return {
    stage,
    QuestionFormData,
    SubmitQuestion,
    progress,
    answer,
    quesionId,
  };
};

export default useQuestion;
