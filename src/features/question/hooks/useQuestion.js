import { useMutation, useQuery } from 'react-query';
import useInput from '../../../hooks/useInput';
import { useEffect, useRef, useState } from 'react';
import { getQuestionState, postQuestion } from '../apis/postQuestion';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  console.log(callback);
  console.log('hi');

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    const timerId = setInterval(tick, delay);
    return () => clearInterval(timerId);
  }, [delay]);
};

/**
 * 질문 전송 및 데이터 관리 훅
 * @returns QuestionFormData
 */
const useQuestion = (type) => {
  const [stage, setStage] = useState('initial');
  const { value: ItemValue, onChange: ItemChange } = useInput('');
  const { value: ContentsValue, onChange: ContentsChange } = useInput('');
  const [quesionId, setQuestionId] = useState('');
  const [requestQuestion, setRequestQuestion] = useState(false);
  const [cnt, setCnt] = useState(0);
  const [answer, setAnswer] = useState('');
  const [MAX_CNT, setMAX_CNT] = useState(50);
  // 최대 요청 횟수

  const { data, refetch, remove } = useQuery({
    queryFn: async () => {
      setCnt((prev) => prev + 1);
      const { data } = await getQuestionState(quesionId);
      if (cnt < MAX_CNT) setRequestQuestion(true);
      else setRequestQuestion(false);

      // 수정해야 하는 부분
      if (data.answer?.length > 0) {
        setCnt(100);
        console.log(data.answer);
        setAnswer(data.answer);
        setTimeout(() => {
          setStage('finish');
        }, 2000);
      }
    },

    queryKey: ['getId'],
    enabled: requestQuestion ? true : false,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  const { mutate } = useMutation(postQuestion, {
    onSuccess: ({ data }) => {
      setQuestionId(data.id);
      setRequestQuestion(true);
      setStage('process');
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
    const data = mutate({ ItemValue, ContentsValue, type });
  };

  let progress = Math.floor((cnt / MAX_CNT) * 100);
  return { stage, QuestionFormData, SubmitQuestion, progress, answer };
};

export default useQuestion;
