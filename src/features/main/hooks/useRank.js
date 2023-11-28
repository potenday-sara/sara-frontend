import { useQuery } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';

const useRank = (type) => {
  const getRank = async (type) => {
    const { data } = await axios({
      method: 'get',
      url: apis.rank,
      params: {
        type: type,
      },
    });

    return data?.slice(0, 5);
  };

  const { data, isLoading, isError } = useQuery(
    ['Rank', type],
    () => getRank(type),
    {
      staleTime: 10000,
    },
  );

  return { data, isLoading, isError };
};

export default useRank;
