import { useMutation, useQueryClient } from 'react-query';
import axios from '../../../../lib/axios';

const POSTLike = async (questionId) => {
  const data = await axios.post(`/questions/${questionId}/like/`);
  return data;
};

const DELETELike = async (questionId) => {
  const data = await axios.delete(`/questions/${questionId}/like/`);
  return data;
};

export const usePostLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (questionId) => POSTLike(questionId),
    onMutate: (questionId) => {
      queryClient.setQueryData(['getQuestion', questionId], (old) => {
        return { ...old, like_count: old.like_count + 1 };
      });
    },
    onSettled: (data, error, variables) => {
      queryClient.invalidateQueries(['getQuestion', variables.questionId]);
    },
  });
};

export const useDeleteLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (questionId) => DELETELike(questionId),
    onMutate: (questionId) => {
      queryClient.setQueryData(['getQuestion', questionId], (old) => {
        return { ...old, like_count: old.like_count - 1 };
      });
    },
    onSettled: (data, error, variables) => {
      queryClient.invalidateQueries(['getQuestion', variables.questionId]);
    },
  });
};
