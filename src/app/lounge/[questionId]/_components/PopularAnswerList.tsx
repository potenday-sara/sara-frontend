'use client';

import { Fragment, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import QuestionCard from '@/app/lounge/_components/QuestionCard';
import useQuestionList from '@/app/lounge/_hooks/useInfinityQuestion';

export default function PopularAnswerList() {
  const router = useRouter();
  const {
    data: questionList,
    status,
    error,
    fetchNextPage,
  } = useQuestionList({
    order: 'like',
    type: 'all',
    limit: 5,
  });

  const handleScroll = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      await fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickCard = useCallback((questionId: string) => {
    router.push(`/lounge/${questionId}`);
  }, []);

  if (status === 'pending') return <p>Loading...</p>;
  if (status === 'error') return <p>Error: {error.message}</p>;

  return (
    <div className="flex-1 h-[full] flex flex-col gap-2 overflow-hidden">
      <h3 className="font-14-title-100">인기 질문</h3>
      {questionList.pages.map((page, index) => (
        <Fragment key={`popular ${index}`}>
          {page.data.results.map((question, idx) => (
            <QuestionCard
              onClick={handleClickCard}
              questionId={question.id}
              title={<div className="font-14-title-100">{question.product}</div>}
              content={<div className="font-14-medium-140 w-full truncate">{question.content}</div>}
              likeCount={question.like_count}
              commentCount={question.comment_count}
              createdAt={question.created_at}
              type={question.type}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
}
