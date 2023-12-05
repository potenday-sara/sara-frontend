import { useEffect, useRef, useState } from 'react';
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
  const { value: ItemValue, onChange: ItemChange, setValue: setItemValue } = useInput('');
  const { value: ContentsValue, onChange: ContentsChange, setValue: setContentsValue } = useInput('');
  const [quesionId, setQuestionId] = useState('');
  const [requestQuestion, setRequestQuestion] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [answerId, setAnswerId] = useState('');
  const [progress, setProgress] = useState(0);
  // const [maxRequestCount, setMaxRequestCount] = useState(17);
  const maxCount = 15;
  const [maxRequestCount, setMaxRequestCount] = useState(maxCount);

  // 질문 재시도 횟수
  const retryCount = 10;
  // questionID를 바꾼 후에, Question 응답을 받는 코드
  const isMouted = useRef(false);
  useEffect(() => {
    if (isMouted.current) {
      if (quesionId) {
        setRequestQuestion(true);
      } else {
        setRequestQuestion(false);
        setAnswerId('');
      }
    } else {
      isMouted.current = true;
    }
  }, [quesionId]);

  // 요청 횟수가 증가할때 마다 progress변경
  useEffect(() => {
    if (isMouted.current) {
      setProgress(Math.max(100 - Math.floor((requestCount / maxRequestCount) * 100), 0));
    } else {
      isMouted.current = true;
    }
  }, [requestCount]);

  // 질문 재시도시 남은 횟수 변경하는 함수
  const setRetryRequest = () => {
    setMaxRequestCount(retryCount);
    setRequestCount(0);
    setRequestQuestion(true);
    setStage('process');
  };

  // 답변 받는 쿼리
  const { data: gptAnswer } = useQuery({
    queryKey: ['getAnswer', answerId],
    queryFn: () => getAnswer(answerId),
  });

  // 답변 생성 여부 확인 쿼리
  const { remove: DeleteAnswer } = useQuery({
    queryFn: async () => {
      const { data } = await getQuestionState(quesionId);
      // 요청 횟수 1회 증가
      setRequestCount((prev) => prev + 1);

      // 질문에 답이 있는 경우
      if (data?.answer?.length > 0) {
        // 답 저장 후 로직 종료
        setAnswerId(data.answer);
        setRequestQuestion(false);
        setTimeout(() => {
          setStage('finish');
        }, 3000);

        // 정답 id로 요청보내기
        return data;
      }

      // 요청 횟수 비교
      if (requestCount >= maxRequestCount) {
        // 실패로직 추가
        setRequestQuestion(false);
        setStage('error');
      }
      return data;
    },

    queryKey: ['getId', quesionId, type],
    enabled: requestQuestion,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  const { mutate } = useMutation(postQuestion, {
    onSuccess: ({ data }) => {
      DeleteAnswer();
      setQuestionId(data.id);
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
    setMaxRequestCount(maxCount);
    mutate({ ItemValue, ContentsValue, type });
    setStage('process');
  };

  const refreshForm = () => {
    setItemValue('');
    setContentsValue('');
    setQuestionId('');
    setAnswerId('');
    setStage('initial');
    setRequestCount(0);
    setProgress(0);
  };

  return {
    stage,
    refreshForm,
    QuestionFormData,
    SubmitQuestion,
    progress,
    answerId,
    quesionId,
    gptAnswer,
    setRetryRequest,
  };
};

export default useQuestion;
