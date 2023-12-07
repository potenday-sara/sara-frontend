import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';
import useToast from '../../../hooks/useToast';

const useEmotionFeedback = (id) => {
  const [isFeedback, setIsFeedback] = useState(false);
  const [nowSelected, setNowSelected] = useState(null);
  const { isToast, openToast } = useToast(800);
  const isMounted = useRef(false);

  const { mutate } = useMutation(
    async () => {
      await axios.post(apis.questionFeedback(id), {
        feedback: nowSelected,
        question: id,
      });
    },
    {
      onSuccess: () => {
        setIsFeedback(true);
        openToast();
      },
    },
  );

  useEffect(() => {
    if (isMounted.current) {
      mutate();
    } else {
      isMounted.current = true;
    }
  }, [nowSelected]);

  const getNowSelectedFeedback = (score) => {
    setNowSelected(score);
  };

  return { nowSelected, getNowSelectedFeedback, isFeedback, mutate, isToast };
};

export default useEmotionFeedback;
