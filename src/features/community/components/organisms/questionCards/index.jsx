import React from 'react';
import QuestionCards from '../../../../lounge/components/organisms/QuestionCards';
import * as S from './styles';

export default function CommunityQuestionCards() {
  return (
    <S.StyledCommunityQuestionCards>
      <p>인기 질문</p>
      <QuestionCards />
    </S.StyledCommunityQuestionCards>
  );
}
