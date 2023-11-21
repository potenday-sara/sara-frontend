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

    return data;
  };

  const { data, isLoading, isError } = useQuery(['Rank', type], () =>
    getRank(type),
  );

  return { data, isLoading, isError };
};

export default useRank;
