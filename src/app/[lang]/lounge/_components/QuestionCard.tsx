import React, { ReactNode } from 'react';
import { Theme } from '@/feature/question/ThemeContext';
import SaraChip from '@/app/[lang]/lounge/_asset/SaraChip.svg';
import MaraChip from '@/app/[lang]/lounge/_asset/MaraChip.svg';
import Comment from '@/app/[lang]/lounge/_asset/QuestionComment.svg';
import Heart from '@/app/[lang]/lounge/_asset/QuestionHeart.svg';
import { formatDate } from '@/app/_utils/getTimeStamp';

interface Props {
  title: ReactNode;
  content: ReactNode;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  type: Theme;
  questionId: string;
  onClick: (questionId: string) => void;
  rank?: ReactNode;
  style?: React.CSSProperties;
}

function QuestionCard({
  rank,
  onClick,
  title,
  content,
  likeCount,
  commentCount,
  createdAt,
  type,
  style,
  questionId,
}: Props) {
  return (
    <div
      className="w-full bg-white cursor-pointer h-[108px] flex flex-col p-4 rounded-[12px] border border-solid border-black-#ddd"
      style={style}
      onClick={() => onClick(questionId)}
    >
      <div className="card-header flex gap-[6px] items-center mb-[10px]">
        {rank}
        {title}
        {type === 'sara' ? <SaraChip /> : <MaraChip />}
      </div>
      <div className="mb-4 w-full">{content}</div>
      <div>
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="heart flex gap-[2px] items-center">
              <Heart />
              <span className="font-12-medium-100 text-black-#333">{likeCount}</span>
            </div>
            <div className="comment flex gap-[2px] items-center">
              <Comment />
              <span className="font-12-medium-100 text-black-#333">{commentCount}</span>
            </div>
          </div>
          <div className="created-at font-12-medium-100 text-black-#999">{formatDate(createdAt)}</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(QuestionCard);
