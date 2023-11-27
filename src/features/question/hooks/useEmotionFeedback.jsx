import { useMutation } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';
import { useState } from 'react';

const useEmotionFeedback = (id) => {
  const [isFeedback, setIsFeedback] = useState(false);
  const [nowSelected, setNowSelected] = useState(null);
  const { mutate } = useMutation(
    async () => {
      console.log(apis.questionFeedback(id));
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
        console.log('피드백완료');
        setIsFeedback(true);
      },
    },
  );

  const getNowSelectedFeedback = (id) => {
    setNowSelected(id);
    mutate();
  };

  return { nowSelected, getNowSelectedFeedback, isFeedback, mutate };
};

export default useEmotionFeedback;
