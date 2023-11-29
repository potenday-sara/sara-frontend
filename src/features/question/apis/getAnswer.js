import apis from '.';
import axios from '../../../lib/axios';

const getAnswer = (id) => {
  return axios.get(apis.getAnswer(id));
};

export default getAnswer;
