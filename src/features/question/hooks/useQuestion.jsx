import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import useInput from '../../../hooks/useInput';
import getAnswer from '../apis/getAnswer';
import { getQuestionState, postQuestion } from '../apis/postQuestion';

// stage 상태
const StageState = {
  INITIAL: 'initial',
  PROCESS: 'process',
  FINISH: 'finish',
  ERROR: 'error',
};

// 최대 요청 시도 횟수
const MaxRequestCount = 15;

// 재시도 시 질문 최대 재시도 횟수
const MaxRequestCountOfRetry = 10;

// 남은 시간(퍼센트)를 개산하는 함수
const computeProgress = (nowProgress, maxProgress) => Math.max(100 - Math.floor((nowProgress / maxProgress) * 100), 0);

/**
 * 질문 전송 및 데이터 관리 훅
 * @returns QuestionFormData
 */
const useQuestion = (type) => {
  const [stage, setStage] = useState(StageState.INITIAL);
  const { value: ItemValue, onChange: ItemChange, setValue: setItemValue } = useInput('');
  const { value: ContentsValue, onChange: ContentsChange, setValue: setContentsValue } = useInput('');
  const [quesionId, setQuestionId] = useState('');
  const [requestQuestion, setRequestQuestion] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [answerId, setAnswerId] = useState('');
  const [progress, setProgress] = useState(0);
  const [maxRequestCount, setMaxRequestCount] = useState(MaxRequestCount);
  const [retryRequestCount, setRetryRequestCount] = useState(0);

  // questionID를 바뀌면, Question 응답을 True로 바꾸어 React Query를 작동시키는 코드(액션)
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

  // 요청 횟수가 증가할때 마다 Progess를 증가시키는 코드(액션)
  useEffect(() => {
    if (isMouted.current) {
      setProgress(computeProgress(requestCount, maxRequestCount));
    } else {
      isMouted.current = true;
    }
  }, [requestCount]);

  // 질문 재시도시 남은 횟수 변경하는 함수(액션)
  const setRetryRequest = () => {
    setMaxRequestCount(MaxRequestCountOfRetry);
    setRequestCount(0);
    setRequestQuestion(true);
    setStage(StageState.PROCESS);
    setRetryRequestCount((prev) => prev + 1);
  };

  // 답변 받는 쿼리(액션)
  const { data: gptAnswer } = useQuery({
    queryKey: ['getAnswer', answerId],
    queryFn: () => getAnswer(answerId),
    enabled: !!answerId,
  });

  // 답변 생성 여부 확인 쿼리(액션)
  const { remove: DeleteAnswer } = useQuery({
    queryKey: ['getId', quesionId, type],
    queryFn: async () => {
      const { data } = await getQuestionState(quesionId);
      // 요청 횟수 1회 증가(액션)
      setRequestCount((prev) => prev + 1);

      // 질문에 답이 있는 경우
      if (data?.answer?.length > 0) {
        // 답 저장 후 로직 종료
        setAnswerId(data.answer);
        setRequestQuestion(false);
        setTimeout(() => {
          setStage(StageState.FINISH);
        }, 3000);

        // 정답 id로 요청보내기(액션)
        return data;
      }

      // 요청 횟수 비교
      if (requestCount >= maxRequestCount) {
        // 실패로직 추가
        setRequestQuestion(false);
        setStage(StageState.ERROR);
      }
      return data;
    },

    enabled: requestQuestion,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  // 액션
  const { mutate } = useMutation(postQuestion, {
    onSuccess: ({ data }) => {
      DeleteAnswer();
      setQuestionId(data.id);
    },
  });

  // 액션
  const QuestionFormData = {
    ItemValue,
    ItemChange,
    ContentsValue,
    ContentsChange,
  };

  // 액션
  const SubmitQuestion = () => {
    setMaxRequestCount(MaxRequestCount);
    mutate({ ItemValue, ContentsValue, type });
    setStage(StageState.PROCESS);
  };

  // 액션
  const refreshForm = () => {
    setQuestionId('');
    setAnswerId('');
    setItemValue('');
    setContentsValue('');
    setStage(StageState.INITIAL);
    setRequestCount(0);
    setProgress(0);
  };

  // 액션
  const retryForm = () => {
    setQuestionId('');
    setAnswerId('');
    setStage(StageState.INITIAL);
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
    retryForm,
    retryRequestCount,
  };
};

export default useQuestion;
