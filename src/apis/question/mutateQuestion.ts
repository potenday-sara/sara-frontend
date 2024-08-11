import { Theme } from '@/feature/question/ThemeContext';
import { ClientQuestionAPI } from '@/apis/question/index';
import { API_LOCALE } from '@/app/_hooks/useTranslation';

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
  language: API_LOCALE;
}

const postQuestion = ({ content, product, type, language }: POSTQuestionRequestTypes) =>
  ClientQuestionAPI.post('/').data({ content, product, type, language }).build().call<POSTQuestionResponseTypes>();

export default postQuestion;
