import { useMutation } from 'react-query';
import { ClientQuestionAPI } from '@/apis/question/index';

export interface POSTQuestionResponseTypes {
  id: string;
}

export interface POSTQuestionRequestTypes {
  content: string;
  product: string;
  type: string;
}

const postQuestion = ({ content, product, type }: POSTQuestionRequestTypes) =>
  ClientQuestionAPI.post('/').data({ content, product, type }).build().call<POSTQuestionResponseTypes>();

export default postQuestion;
