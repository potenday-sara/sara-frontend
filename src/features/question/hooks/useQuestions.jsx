import { useQuery } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';

const useQuestions = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getOtherQuestion'],
    queryFn: async () => {
      const { data } = await axios.get(apis.questions);
      return data;
    },
  });

  return { data, isLoading };
};

export default useQuestions;
