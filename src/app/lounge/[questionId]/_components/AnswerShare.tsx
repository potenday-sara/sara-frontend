import { cva } from 'class-variance-authority';
import Share from '@/app/lounge/[questionId]/_asset/share.svg';

const ShareButtonClassName = cva(
  'flex items-center justify-center gap-2 px-3 h-[44px] rounded-[36px] border border-solid bg-black-#f4',
);

export default function AnswerShare() {
  return (
    <button className={ShareButtonClassName()}>
      <Share fill="#fff" />
      <span className="font-12-medium-100">공유하기</span>
    </button>
  );
}
