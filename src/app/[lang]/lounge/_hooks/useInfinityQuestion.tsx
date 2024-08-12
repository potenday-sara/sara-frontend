import { useInfiniteQuery } from '@tanstack/react-query';
import getQuestionList, { GetQuestionListRequestTypes } from '../../../../apis/question/getQuestionList';
import { KEYS } from '../../../../apis/key';

export const LIMIT = 10;

const useQuestionList = ({ order, type, limit, language }: Omit<GetQuestionListRequestTypes, 'offset'>) => {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getQuestionList({ order, type, offset: pageParam, limit, language }),
    queryKey: KEYS.QUESTION({ order, type, limit, language }).key,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length * LIMIT;
    },
  });
};

export default useQuestionList;
