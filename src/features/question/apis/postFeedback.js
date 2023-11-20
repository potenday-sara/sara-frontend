import axios from '../../../lib/axios';

export const postFeedback = (id, content) => {
  const data = {
    questionId: id,
    content,
  };

  return axios({ method: 'post', url: '/assess/content', data: data });
};
