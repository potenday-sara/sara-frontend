import { useMutation, useQueryClient, useQuery } from 'react-query';
import axios from '../../../lib/axios';

const POSTComment = async ({ questionId, comment }) => {
  const data = await axios.post(`/questions/${questionId}/comments/`, { content: comment, nickname: '익명' });
  return data;
};

const GETComments = async (questionId) => {
  const { data } = await axios.get(`/questions/${questionId}/comments/`);
  return data;
};

export const usePostComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ questionId, comment }) => POSTComment({ questionId, comment }),
    onSettled: (d, e, variables) => {
      queryClient.invalidateQueries(['GETComments', variables.questionId]);
    },
    onMutate: ({ questionId, comment }) => {
      queryClient.setQueryData(['GETComments', questionId], (old) => {
        return [...old, { content: comment, nickname: '익명' }];
      });
    },
  });
};

export const useGetComments = (questionId) => {
  return useQuery({
    queryKey: ['GETComments', questionId],
    queryFn: () => GETComments(questionId),
  });
};
