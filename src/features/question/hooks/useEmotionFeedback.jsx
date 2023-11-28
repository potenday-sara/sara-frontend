import { useState } from 'react';
import { useMutation } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';

const useEmotionFeedback = (id) => {
  const [isFeedback, setIsFeedback] = useState(false);
  const [nowSelected, setNowSelected] = useState(null);
  const { mutate } = useMutation(
    async () => {
      if (!nowSelected) return;
      const score = {
        bad: -1,
        soso: 0,
        good: 1,
      };
      await axios.post(apis.questionFeedback(id), {
        feedback: score[nowSelected],
        question: id,
      });
    },
    {
      onSuccess: () => {
        setIsFeedback(true);
      },
    },
  );

  const getNowSelectedFeedback = (score) => {
    setNowSelected(score);
    mutate();
  };

  return { nowSelected, getNowSelectedFeedback, isFeedback, mutate };
};

export default useEmotionFeedback;
