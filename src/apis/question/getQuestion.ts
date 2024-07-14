import { ServerQuestionAPI } from '@/apis/question/index';
import { Theme } from '@/feature/question/ThemeContext';

export interface GetQuestionListResponseTypes {
  id: string;
  content: string;
  product: string;
  type: Theme;
  answer: string;
  like_count: number;
  comment_count: number;
  created_at: string;
}

export interface GetQuestionListRequestTypes {
  id: string;
}

const getQuestion = ({ id }: GetQuestionListRequestTypes) =>
  ServerQuestionAPI.get(`/${id}/`)
    .options({
      cache: 'no-store',
      next: {
        revalidate: 0,
        tage: [],
      },
    })
    .build()
    .call<GetQuestionListResponseTypes>();

export default getQuestion;
