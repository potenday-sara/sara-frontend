import axios from '../../../lib/axios';

export const getQuestions = ($type) => {
  let type = $type === '/sara' ? 'SARA' : 'MARA';
  return axios({
    method: 'get',
    url: `/${type}/questions`,
  });
};
