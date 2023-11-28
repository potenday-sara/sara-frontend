import { useQuery } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';

const useQuestions = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getOtherQuestion'],
    queryFn: async () => {
      const { data: resData } = await axios.get(apis.questions);
      return resData;
    },
  });

  return { data, isLoading };
};

export default useQuestions;
