import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import useInput from '../../../hooks/useInput';
import { getQuestionState, postQuestion } from '../apis/postQuestion';

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
  // const [requestCount, setRequestCount] = useState(0);
  const [requestCount] = useState(0);
  const [answerId] = useState('');
  const [maxRequesrCount] = useState(60);
  // const [maxRequesrCount, setMaxRequestCount] = useState(60);

  // // 요청 횟수를 카운트하는 함수
  // const countRequest = () => setCnt((prev) => prev + 1);

  // // 요청 횟수와 남은 요청을 비교하는 함수
  // const checkCountRequest = () => {
  //   if (requestCount < maxRequesrCount) {
  //     setRequestQuestion(setRequestQuestion(false));
  //   } else {
  //     setRequestQuestion(true);
  //     // 에러 추가 후 에러로 바꿔야 할 부분
  //     setStage('finish');
  //   }
  // };

  // // 질문 재시도시 남은 횟수 변경하는 함수
  // const setRetryRequest = (retryCount) => {
  //   requestCount(0);
  //   setMaxRequestCount(retryCount);
  // };

  // 질문 요청 시 작동하는 함수
  const getGptAnswerId = async () => {
    console.log('반복중이니?');
    if (!quesionId) return null;
    const { data } = await getQuestionState(quesionId);
    return data;
  };

  // 최대 요청 횟수
  const { refetch } = useQuery({
    queryFn: getGptAnswerId(),
    // async () => {
    //   setCnt((prev) => prev + 1);
    //   const { data } = await getQuestionState(quesionId);

    //   if (requestCount < maxRequesrCount) setRequestQuestion(true);
    //   else {
    //     // 임시로 시간초과가 발생했지만 대답완료 페이지로 이동
    //     setStage('finish');
    //     setRequestQuestion(false);
    //   }

    //   // 수정해야 하는 부분
    //   if (data.answer?.length > 0) {
    //     setCnt(100);
    //     setRequestQuestion(false);
    //     answerId(data.answer);
    //     setTimeout(() => {
    //       setStage('finish');
    //     }, 2000);
    //   }
    // },

    queryKey: ['getId'],
    enabled: false,
    refetchInterval: requestQuestion ? 1000 : false,
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

  const progress = Math.floor((requestCount / maxRequesrCount) * 100);
  return {
    stage,
    QuestionFormData,
    SubmitQuestion,
    progress,
    answerId,
    quesionId,
  };
};

export default useQuestion;
