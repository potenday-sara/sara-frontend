import { GetQuestionListRequestTypes } from '@/apis/question/getQuestionList';

export const KEYS = {
  QUESTION: ({ limit, order, type }: Omit<GetQuestionListRequestTypes, 'offset'>) => {
    const keys = ['QUESTION', limit, order, type];
    return {
      key: keys,
    };
  },
};
