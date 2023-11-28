import axios from '../../../lib/axios';
import apis from './index';

export const postQuestion = async ({ ItemValue, ContentsValue, type }) => {
  const data = await axios.post(apis.questions, {
    product: ItemValue,
    content: ContentsValue,
    type,
  });

  return data;
};

export const getQuestionState = async (id) => {
  const data = await axios.get(apis.questionsId(id));
  return data;
};
