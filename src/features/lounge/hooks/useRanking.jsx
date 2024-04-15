import { useQuery } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';

const useRank = (questionType, orderType) => {
  const getData = async (type, order) => {
    const { data } = await axios.get(apis.questions, {
      params: { type, order },
    });
    return data;
  };

  const { data, isLoading, isError } = useQuery(
    ['Question', questionType, orderType],
    () => getData(questionType, orderType),
    {
      staleTime: Infinity,
    },
  );

  return { data, isLoading, isError };
};

export default useRank;
