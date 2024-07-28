import { Theme } from '@/feature/question/ThemeContext';
import { ClientQuestionAPI } from '@/apis/question/index';
import { GetQuestionResponseTypes } from '@/apis/question/getQuestionState';

export interface GetQuestionListResponseTypes {
  count: string;
  next: string | null;
  previous: string | null;
  results: GetQuestionResponseTypes[];
}

export interface GetQuestionListRequestTypes {
  limit: number;
  offset: number;
  order: 'time' | 'like';
  type: 'all' | 'sara' | 'mara';
}

const getQuestionState = ({ limit, offset, order, type }: GetQuestionListRequestTypes) =>
  ClientQuestionAPI.get('/').params({ limit, offset, order, type }).build().call<GetQuestionListResponseTypes>();

export default getQuestionState;
