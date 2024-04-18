import { useMemo, useState } from 'react';
import { useGetComments, usePostComment } from '../apis/comments';

export default function useComment(questionId) {
  const { mutate: createComment } = usePostComment();
  const { data: commentsData, isLoading: commentsLoading } = useGetComments(questionId);

  const [page, setPage] = useState(1);

  const showingComments = useMemo(() => {
    if (!commentsData) return [];
    const reverseData = [...commentsData].reverse();
    return reverseData.slice((page - 1) * 5, 5 * page);
  }, [page, commentsData]);

  const maxPage = useMemo(() => {
    if (!commentsData) return 0;
    return Math.floor(commentsData.length % 5 === 0 ? commentsData.length / 5 : commentsData.length / 5 + 1);
  }, [commentsData]);

  const handlePageChange = (type = 'next') => {
    if (type === 'prev' && page === 1) return;
    if (type === 'next' && page === maxPage) return;
    if (type === 'prev') {
      setPage((prev) => prev - 1);
    }
    if (type === 'next') {
      setPage((prev) => prev + 1);
    }
  };

  const handleCreateComment = (comment) => {
    if (comment.length > 300) {
      alert('댓글은 300자 이내로 작성해주세요');
      return;
    }
    createComment({ questionId, comment });
  };

  return {
    commentsData,
    handleCreateComment,
    handlePageChange,
    page,
    maxPage,
    showingComments,
    commentsLoading,
  };
}
