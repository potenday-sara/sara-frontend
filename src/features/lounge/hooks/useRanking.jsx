import { useQuery } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';

const useRank = (questionType) => {
  const getData = async (type) => {
    if (type === 'all') {
      const { data } = await axios.get(apis.questions);
      return data;
    }
    const { data } = await axios.get(apis.questions, {
      params: { type },
    });
    return data;
  };

  const { data, isLoading, isError } = useQuery(['Question', questionType], () => getData(questionType), {
    staleTime: Infinity,
  });

  return { data, isLoading, isError };
};

export default useRank;
