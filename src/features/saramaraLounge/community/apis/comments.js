import { useMutation, useQueryClient, useQuery } from 'react-query';
import axios from '../../../../lib/axios';

const POSTComment = async ({ questionId, comment, nickName }) => {
  const data = await axios.post(`/questions/${questionId}/comments/`, { content: comment, nickname: nickName });
  return data;
};

const GETComments = async (questionId) => {
  const { data } = await axios.get(`/questions/${questionId}/comments/`);
  return data;
};

export const usePostComment = (nickName) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ questionId, comment }) => POSTComment({ questionId, comment, nickName }),
    onSettled: (d, e, variables) => {
      queryClient.invalidateQueries(['GETComments', variables.questionId]);
    },
    onMutate: ({ questionId, comment }) => {
      queryClient.setQueryData(['GETComments', questionId], (old) => {
        return [...old, { content: comment, nickname: nickName }];
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
