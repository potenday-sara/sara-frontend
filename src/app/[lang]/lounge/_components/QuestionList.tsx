'use client';

import { cva } from 'class-variance-authority';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Tab } from '@/app/[lang]/lounge/page';
import Logo from '@/components/atoms/Logo/Logo';
import QuestionCard from '@/app/[lang]/lounge/_components/QuestionCard';
import useQuestionList, { LIMIT } from '@/app/[lang]/lounge/_hooks/useInfinityQuestion';

type Props = {
  tab: Tab;
};

type FilterButton = '전체' | '사라' | '마라';

const getBackColor = (type: FilterButton) => {
  let bgColorCode = '';
  if (type === '사라') {
    bgColorCode = '#d9ebfc';
  } else if (type === '마라') {
    bgColorCode = '#fddfd9';
  } else {
    bgColorCode = 'rgba(255, 205, 77, 0.5)';
  }

  return `linear-gradient(to top, ${bgColorCode}, #ffffff)`;
};

const getCardStyle = (rank: number) => {
  switch (rank) {
    case 1:
      return { backgroundColor: '#fffaed', color: '#846515', borderColor: '#FFCD4D' };
    case 2:
      return { backgroundColor: '#fafbfc', color: '#285983', borderColor: '#CFD7DE' };
    case 3:
      return { backgroundColor: '#f7f0e8', color: '#B16D1C', borderColor: '#B16D1C' };
    default:
      return { borderColor: '#ccc', backgroundColor: '#fff' };
  }
};

const getRankColor = (rank: number) => {
  switch (rank) {
    case 1:
      return { backgroundColor: '#FFCD4D', color: '#846515' };
    case 2:
      // return 'backgroundColor: #CFD7DE; color: #285983;';
      return { backgroundColor: '#CFD7DE', color: '#285983' };
    case 3:
      // return 'background-color: #B16D1C; color: #FAD9B3;';
      return { backgroundColor: '#B16D1C', color: '#FAD9B3' };
    default:
      return { backgroundColor: '#CCC', color: '#FFF' };
  }
};

const getRankTextColor = (rank: number) => {
  switch (rank) {
    case 1:
      // return '#846515';
      return { color: '#846515' };
    case 2:
      return { color: '#285983' };
    case 3:
      return { color: '#FAD9B3' };
    default:
      return undefined;
  }
};

const TypeButtonClassNames = cva(
  'font-12-title-100 h-[34px] px-3 py-[10px] rounded-[40px] flex justify-center items-center border ',
  {
    variants: {
      전체: {
        true: 'bg-black-#333 text-white',
      },
      사라: {
        true: 'bg-sara-primary text-white',
        false: 'text-black-#999',
      },
      마라: {
        true: 'bg-mara-primary text-white',
        false: 'text-black-#999',
      },
    },
  },
);

const FILTER_MAP = {
  전체: 'all',
  사라: 'sara',
  마라: 'mara',
} as const;

const TAB_MAP = {
  최신: 'time',
  베스트: 'like',
} as const;

export default function QuestionList({ tab }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterButton>('전체');
  const router = useRouter();
  const {
    data: questionList,
    status,
    error,
    fetchNextPage,
  } = useQuestionList({
    order: TAB_MAP[tab],
    type: FILTER_MAP[activeFilter],
    limit: LIMIT,
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

  const handleClickFilter = (filter: FilterButton) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    setActiveFilter('전체');
  }, [tab]);

  const handleClickCard = useCallback((questionId: string) => {
    router.push(`/lounge/${questionId}`);
  }, []);

  if (status === 'pending') return <p>Loading...</p>;
  if (status === 'error') return <p>Error: {error.message}</p>;

  return (
    <div className="h-full flex flex-col flex-1">
      <nav className="flex gap-1 px-4 py-[10px] sticky top-[56px] bg-white">
        <button
          type="button"
          onClick={() => handleClickFilter('전체')}
          className={TypeButtonClassNames({ 전체: activeFilter === '전체' })}
        >
          전체
        </button>
        <button
          type="button"
          onClick={() => handleClickFilter('사라')}
          className={TypeButtonClassNames({ 사라: activeFilter === '사라' })}
        >
          <div className="w-[64px]">
            <Logo logo="sara" />
          </div>
        </button>
        <button
          type="button"
          onClick={() => handleClickFilter('마라')}
          className={TypeButtonClassNames({ 마라: activeFilter === '마라' })}
        >
          <div className="w-[64px]">
            <Logo logo="mara" />
          </div>
        </button>
      </nav>
      <div
        className="flex-1 h-[full] px-4 flex flex-col gap-2 overflow-hidden"
        style={{
          backgroundImage: getBackColor(activeFilter),
        }}
      >
        {TAB_MAP[tab] === 'like' && (
          <>
            {questionList.pages.map((page, index) => (
              <Fragment key={`${index} 123`}>
                {page.data.results.map((question, idx) => (
                  <QuestionCard
                    onClick={handleClickCard}
                    questionId={question.id}
                    style={getCardStyle(idx + index * LIMIT + 1)}
                    rank={
                      <div
                        style={getRankColor(idx + index * LIMIT + 1)}
                        className="rounded-full w-[22px] h-[22px] flex justify-center items-center font-14-title-100 text-center"
                      >
                        {idx + index * LIMIT + 1}
                      </div>
                    }
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
          </>
        )}
        {TAB_MAP[tab] === 'time' && (
          <>
            {questionList.pages.map((page, index) => (
              <Fragment key={`${index} 123`}>
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
          </>
        )}
      </div>
    </div>
  );
}
