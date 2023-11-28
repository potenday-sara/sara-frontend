import axios from '../../../lib/axios';

export const postScore = (id, score) => {
  const data = {
    score,
    questionId: id,
  };

  return axios({ method: 'post', url: '/assess/score', data });
};
