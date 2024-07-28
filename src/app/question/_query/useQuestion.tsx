import { useQuery } from '@tanstack/react-query';
import { KEYS } from '@/apis/key';
import getQuestionList, { GetQuestionListRequestTypes } from '@/apis/question/getQuestionList';

export const useRandomQuestion = ({ type }: Pick<GetQuestionListRequestTypes, 'type'>) => {
  return useQuery({
    queryKey: KEYS.QUESTION({ limit: 100, order: 'time', type }).key,
    queryFn: () => getQuestionList({ limit: 100, order: 'time', type, offset: 0 }),
  });
};
