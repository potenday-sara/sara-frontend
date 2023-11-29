import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import useInput from '../../../hooks/useInput';
import { getQuestionState, postQuestion } from '../apis/postQuestion';
import getAnswer from '../apis/getAnswer';

/**
 * 질문 전송 및 데이터 관리 훅
 * @returns QuestionFormData
 */
const useQuestion = (type) => {
  // initial, process, finish, error(추가 예정)
  const [stage, setStage] = useState('initial');
  const { value: ItemValue, onChange: ItemChange } = useInput('');
  const { value: ContentsValue, onChange: ContentsChange } = useInput('');
  const [quesionId, setQuestionId] = useState('');
  const [requestQuestion, setRequestQuestion] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [answerId, setAnswerId] = useState('');
  const [maxRequesrCount] = useState(3);
  // const [maxRequesrCount, setMaxRequestCount] = useState(60);

  // // 요청 횟수를 카운트하는 함수
  const countRequest = () => setRequestCount((prev) => prev + 1);

  // // 질문 재시도시 남은 횟수 변경하는 함수
  // const setRetryRequest = (retryCount) => {
  //   requestCount(0);
  //   setMaxRequestCount(retryCount);
  // };

  // 답변 받는 쿼리
  const { data: gptAnswer } = useQuery({
    queryFn: () => getAnswer(answerId),
    queryKey: ['getAnswer', answerId],
  });

  // 답변 생성 여부 확인 쿼리
  const { refetch: GetAnswerState } = useQuery({
    queryFn: async () => {
      const { data } = await getQuestionState(quesionId);

      // 요청 횟수 1회 증가
      countRequest();

      // 질문에 답이 있는 경우
      if (data?.answer?.length > 0) {
        // 답 저장 후 로직 종료
        setAnswerId(data.answer);
        setRequestQuestion(false);
        setStage('finish');
        // 정답 id로 요청보내기
        return data;
      }

      // 요청 횟수 비교
      if (requestCount >= maxRequesrCount) {
        setAnswerId('5417465a-6f01-4498-bfa9-40d583cf6935');
        setStage('finish');
        setRequestQuestion(false);
      }
      return data;
    },

    queryKey: ['getId', quesionId],
    enabled: requestQuestion,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  const { mutate } = useMutation(postQuestion, {
    onSuccess: ({ data }) => {
      setQuestionId(data.id);
      setRequestQuestion(true);
      GetAnswerState();
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

  const progress = Math.floor((requestCount / maxRequesrCount) * 100);
  return {
    stage,
    QuestionFormData,
    SubmitQuestion,
    progress,
    answerId,
    quesionId,
    gptAnswer,
  };
};

export default useQuestion;
