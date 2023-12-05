import { useQuery } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';

const useRank = (rankType) => {
  const getRank = async (type) => {
    const { data } = await axios.get(apis.rank, {
      params: {
        type,
      },
    });

    return data;
  };

  const { data, isLoading, isError } = useQuery(['Rank', rankType], () => getRank(rankType), {
    staleTime: 10000,
  });

  return { data, isLoading, isError };
};

export default useRank;
