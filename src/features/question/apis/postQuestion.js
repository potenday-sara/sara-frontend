import axios from '../../../lib/axios';
import apis from './index';

export const postQuestion = async ({ ItemValue, ContentsValue, type }) => {
  return await axios({
    url: apis.questions,
    method: 'post',
    data: {
      product: ItemValue,
      content: ContentsValue,
      type: type,
    },
  });
};
