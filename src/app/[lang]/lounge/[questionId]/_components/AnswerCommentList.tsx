'use client';

import { ChangeEvent, ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { Theme } from '@/feature/question/ThemeContext';
import Pagination from '@/app/_components/pagination';
import AnswerComment, { Comment } from '@/app/[lang]/lounge/[questionId]/_components/AnswerComment';
import CommentSubmit from '@/app/[lang]/lounge/[questionId]/_asset/comment-submit.svg';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import useComment from '@/app/[lang]/lounge/[questionId]/_hooks/useComment';
import SaraEmpty from '@/app/[lang]/lounge/[questionId]/_asset/empty-sara.svg';
import MaraEmpty from '@/app/[lang]/lounge/[questionId]/_asset/empty-mara.svg';
import { useTranslation } from '@/app/_hooks/useTranslation';

interface Props {
  type: Theme;
  commentList: Comment[];
  questionId: string;
}

export default function AnswerCommentList({ type, commentList, questionId }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {
    handleCreateComment,
    commentListState,
    showingComments: displayCommentList,
    maxPage,
    handlePageChange,
    page,
  } = useComment(questionId, commentList);
  const [value, setValue] = useState('');
  const [{ t }] = useTranslation('lounge');
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = '50px';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    adjustTextareaHeight();
  };

  const onSubmit = async (e: unknown) => {
    if (typeof e === 'object' && e !== null && 'preventDefault' in e && typeof e.preventDefault === 'function') {
      (e as Event).preventDefault();
    }
    setValue('');
    await handleCreateComment(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-14-medium-140">
        {t('detail_reply_title')} {commentListState.length}
      </h2>
      <div className="flex flex-col gap-[6px]">
        <div className="min-h-[140px] flex flex-col gap-5">
          {commentListState.length === 0 && (
            <div className="flex justify-center items-center h-full">
              {type === 'sara' ? <SaraEmpty /> : <MaraEmpty />}
            </div>
          )}
          {displayCommentList.map((comment) => (
            <AnswerComment key={comment.id} comment={comment} type={type} />
          ))}
        </div>
        {commentListState.length > 5 && (
          <Pagination
            nowPage={page}
            maxPage={maxPage}
            leftClick={() => handlePageChange('prev')}
            rightClick={() => handlePageChange('next')}
            type={type}
          />
        )}
      </div>
      <form onSubmit={onSubmit} className="w-full bg-gray-#f9f9 flex gap-1 px-2 items-start rounded-[8px]">
        <textarea
          onChange={handleChangeTextarea}
          value={value}
          ref={textareaRef}
          className="w-full h-[50px] pt-4 resize-none p-3 overflow-hidden font-14-medium-100 bg-transparent focus:outline-none"
        />
        <div className="flex items-center gap-3">
          <div className="font-12-medium-100 text-gray-#ddd">{value.length}/300</div>
          <button
            onClick={onSubmit}
            type="submit"
            className={getCssByTheme(type, ['text-sara-primary', 'text-mara-primary'], 'py-3')}
          >
            <CommentSubmit />
          </button>
        </div>
      </form>
    </div>
  );
}
