import { Theme } from '@/feature/question/ThemeContext';
import { ClientQuestionAPI } from '@/apis/question/index';

export interface POSTQuestionResponseTypes {
  id: string;
  comment_count: number;
  content: string;
  created_at: string;
  like_count: number;
  product: string;
  type: Theme;
}

export interface POSTQuestionRequestTypes {
  content: string;
  product: string;
  type: Theme;
}

const postQuestion = ({ content, product, type }: POSTQuestionRequestTypes) =>
  ClientQuestionAPI.post('/').data({ content, product, type }).build().call<POSTQuestionResponseTypes>();

export default postQuestion;
