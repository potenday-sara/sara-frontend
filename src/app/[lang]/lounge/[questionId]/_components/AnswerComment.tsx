import React from 'react';
import MaraComment from '@/app/[lang]/lounge/[questionId]/_asset/mara-comment.svg';
import SaraComment from '@/app/[lang]/lounge/[questionId]/_asset/sara-comment.svg';

export type Comment = {
  id: string;
  nickname: string;
  content: string;
};

type AnswerCommentProps = {
  comment: Comment;
  type: 'mara' | 'sara';
};

export default function AnswerComment({ comment, type }: AnswerCommentProps) {
  return (
    <div className="flex gap-2 w-full">
      <div className="img">{type === 'mara' ? <MaraComment /> : <SaraComment />}</div>
      <div className="flex flex-col gap-1">
        <span className="font-12-medium-100 text-black-#999">{comment.nickname}</span>
        <p className="font-12-medium-100 break-words">{comment.content}</p>
      </div>
    </div>
  );
}
