import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';

const useEmotionFeedback = (id) => {
  const [isFeedback, setIsFeedback] = useState(false);
  const [nowSelected, setNowSelected] = useState(null);
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

  return { nowSelected, getNowSelectedFeedback, isFeedback, mutate };
};

export default useEmotionFeedback;
