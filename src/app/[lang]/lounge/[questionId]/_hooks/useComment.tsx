'use client';

import { useCallback, useMemo, useState } from 'react';
import { Comment } from '@/app/lounge/[questionId]/_components/AnswerComment';
import getNickname from '@/app/lounge/[questionId]/_utils/getNickname';
import postComment from '@/apis/question/postComment';

const useComment = (questionId: string, commentList: Comment[]) => {
  const nickname = getNickname('nickname') || '익명';
  const [commentListState, setCommentListState] = useState<Comment[]>(commentList);
  const [page, setPage] = useState(1);

  const handleCreateComment = async (comment: string) => {
    setCommentListState((prev) => [...prev, { id: 'temp', nickname, content: comment }]);
    try {
      await postComment({ questionId, nickname, content: comment });
    } catch (error) {
      setCommentListState((prev) => prev.filter((item) => item.id !== 'temp'));
      alert('댓글을 작성하는 중 오류가 발생했습니다');
    }
  };

  const showingComments = useMemo(() => {
    if (!commentListState) return [];
    const reverseData = [...commentListState].reverse();
    return reverseData.slice((page - 1) * 5, 5 * page);
  }, [page, commentListState]);

  const maxPage = useMemo(() => {
    if (!commentListState) return 0;
    return Math.floor(
      commentListState.length % 5 === 0 ? commentListState.length / 5 : commentListState.length / 5 + 1,
    );
  }, [commentListState]);

  const handlePageChange = useCallback(
    (type: 'prev' | 'next' = 'next') => {
      if (type === 'prev' && page === 1) return;
      if (type === 'next' && page === maxPage) return;
      if (type === 'prev') {
        setPage((prev) => prev - 1);
      }
      if (type === 'next') {
        setPage((prev) => prev + 1);
      }
    },
    [page],
  );

  return { commentListState, handleCreateComment, showingComments, maxPage, handlePageChange, page };
};

export default useComment;
