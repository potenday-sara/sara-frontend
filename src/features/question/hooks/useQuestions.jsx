import { useQuery } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';

const useQuestions = (type) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getOtherQuestion', type],
    queryFn: async () => {
      const { data: resData } = await axios.get(apis.questions);
      return resData;
    },
  });

  return { data, isLoading };
};

export default useQuestions;
