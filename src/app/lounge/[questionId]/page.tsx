import React from 'react';
import getQuestion from '@/apis/question/getQuestion';
import SaraTitle from '@/app/lounge/[questionId]/_asset/saratitle.svg';
import MaraTitle from '@/app/lounge/[questionId]/_asset/maratitle.svg';
import SaraCircleCharacter from '@/asset/logo/SaraCircleCharacter.svg';
import MaraCircleCharacter from '@/asset/logo/MaraCircleCharacter.svg';
import getAnswer from '@/apis/answers/getAnswer';
import Like from '@/app/lounge/[questionId]/_components/Like';
import AnswerShare from '@/app/lounge/[questionId]/_components/AnswerShare';
import Kakao from '@/features/saramaraLounge/community/components/atoms/button/Kakao';
import AnswerKakaoShare from '@/app/lounge/[questionId]/_components/AnswerKakaoShare';
import Logo from '@/components/atoms/Logo/Logo';
import AnswerCommentList from '@/app/lounge/[questionId]/_components/AnswerCommentList';
import getCommentList from '@/apis/question/getCommentList';
import { Comment } from '@/app/lounge/[questionId]/_components/AnswerComment';
import QueryProvider from '@/app/lounge/[questionId]/_components/QueryProvider';
import PopularAnswerList from '@/app/lounge/[questionId]/_components/PopularAnswerList';

interface Props {
  params: {
    questionId: string;
  };
}

export default async function page({ params }: Props) {
  const { questionId } = params;

  const handleGetQuestion = async () => {
    const question = await getQuestion({ id: questionId });
    const answer = await getAnswer({ answerId: question.answer });
    const commentList = await getCommentList({ questionId });

    return { ...question, answer: answer.content, commentList };
  };

  const answer = await handleGetQuestion();

  return (
    <div className="p-4 flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div>{answer.type === 'sara' ? <SaraTitle /> : <MaraTitle />}</div>
        <h1 className="font-20-title-140">{answer.product}</h1>
        <p className="font-14-medium-140 text-black-#666">{answer.content}</p>
      </div>
      <div className="divider" />
      <div className="flex flex-col items-center gap-5">
        <div className="character w-[148px]">
          {answer.type === 'sara' ? <SaraCircleCharacter /> : <MaraCircleCharacter />}
        </div>
        <p className="font-14-medium-140 text-black-#333">{answer.answer}</p>
      </div>
      <div className="flex justify-between">
        <Like count={answer.like_count} questionId={answer.id} />
        <div className="flex gap-2">
          <AnswerShare />
          <AnswerKakaoShare questionId={questionId} />
        </div>
      </div>
      <div className="flex gap-1 h-[70px] w-full">
        <button
          type="button"
          className="text-sara-primary rounded-[10px] font-14-title-100 flex-1 bg-sara-secondary rounded-10 flex flex-col items-center justify-center gap-[6px]"
        >
          <Logo logo="sara" />
          <span>{answer.type === 'sara' ? '에게 나도 질문하기' : '에게 물어볼까?'}</span>
        </button>
        <button
          type="button"
          className="text-mara-primary rounded-[10px] font-14-title-100 flex-1 bg-mara-secondary rounded-10 flex flex-col items-center justify-center gap-[6px]"
        >
          <Logo logo="mara" />
          <span>{answer.type === 'mara' ? '에게 나도 질문하기' : '에게 물어볼까?'}</span>
        </button>
      </div>
      <div className="divider" />
      <AnswerCommentList type={answer.type} commentList={answer.commentList} questionId={questionId} />
      <QueryProvider>
        <PopularAnswerList />
      </QueryProvider>
    </div>
  );
}
