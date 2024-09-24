import { Theme } from '@/feature/question/ThemeContext';
import { ClientQuestionAPI } from '@/apis/question/index';
import { GetQuestionResponseTypes } from '@/apis/question/getQuestionState';
import { API_LOCALE } from '@/app/_hooks/useTranslation';

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
  language: API_LOCALE;
}

const getQuestionState = ({ limit, offset, order, type, language }: GetQuestionListRequestTypes) =>
  ClientQuestionAPI.get('/')
    .params({ limit, offset, order, type, language })
    .build()
    .call<GetQuestionListResponseTypes>();

export default getQuestionState;
