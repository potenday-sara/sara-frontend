import { SeverAnswerAPI } from '@/apis/answers/index';

export interface GetQuestionResponseTypes {
  id: string;
  question: string;
  product: string;
  content: string;
}

export interface GetQuestionRequestTypes {
  answerId: string;
}

const getQuestionState = ({ answerId }: GetQuestionRequestTypes) =>
  SeverAnswerAPI.get(`/${answerId}/`).build().call<GetQuestionResponseTypes>();

export default getQuestionState;
