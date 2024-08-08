'use client';

import { cva } from 'class-variance-authority';
import { useState } from 'react';
import LineHeart from '@/app/[lang]/lounge/[questionId]/_asset/line_heart.svg';
import { getIsLike, handleSetIsLike } from '@/app/[lang]/lounge/[questionId]/_utils/handleIsLike';
import postIsLike from '@/apis/question/postIsLike';
import deleteIsLike from '@/apis/question/deleteIsLike';

// count: PropTypes.number.isRequired,
//   onClick: PropTypes.func.isRequired,
//   isLike: PropTypes.bool.isRequired,
interface Props {
  count: number;
  questionId: string;
}

const LabelClassName = cva('font-14-medium-140', {
  variants: {
    isLike: {
      true: 'text-white',
      false: 'text-black-#666',
    },
  },
});

const ButtonClassName = cva('flex items-center h-[44px] px-3 gap-2 rounded-[36px] border border-solid', {
  variants: {
    isLike: {
      true: 'bg-mara-primary border-mara-primary',
      false: 'bg-white border-black-#ddd',
    },
  },
});

export default function Like({ count, questionId }: Props) {
  const [isLike, setIsLike] = useState(() => getIsLike(questionId));
  const [likeCount, setLikeCount] = useState(count);

  const handleLike = async () => {
    if (!isLike) {
      setIsLike(true);
      handleSetIsLike(questionId, true);
      setLikeCount(likeCount + 1);
      await postIsLike({ questionId });
      return;
    }

    setIsLike(false);
    handleSetIsLike(questionId, false);
    setLikeCount(likeCount - 1);
    await deleteIsLike({ questionId });
  };

  return (
    <button className={ButtonClassName({ isLike })} type="button" onClick={handleLike}>
      <LineHeart fill="white" />
      <span className={LabelClassName({ isLike })}>{likeCount}</span>
    </button>
  );
}
