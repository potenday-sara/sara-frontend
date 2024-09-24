import { Theme } from '@/feature/question/ThemeContext';
import { ClientQuestionAPI } from '@/apis/question/index';

export interface GetQuestionResponseTypes {
  id: string;
  comment_count: number;
  content: string;
  created_at: string;
  like_count: number;
  product: string;
  answer: string | null;
  type: Theme;
}

export interface GetQuestionRequestTypes {
  id: string;
}

const getQuestionState = ({ id }: GetQuestionRequestTypes) =>
  ClientQuestionAPI.get(`/${id}`).build().call<GetQuestionResponseTypes>();

export default getQuestionState;
