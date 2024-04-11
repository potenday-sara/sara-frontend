import React, { useContext } from 'react';
import { Theme } from '../../../../../Styles';
import useRank from '../../../hooks/useRanking';
import LoungeContext from '../../../stores/LoungeStore';
import QuestionCard from '../../molecules/QuestionCard';
import StyledQuestionCards from './styled';

function QuestionCards() {
  const { type } = useContext(LoungeContext);
  const { data: questionDatas, isLoading: questionLoading } = useRank(type);
  const getBackColor = () => {
    if (type === 'sara') return Theme.color.saraSecondary;
    if (type === 'mara') return Theme.color.maraSecondary;
    return 'rgba(255, 205, 77, 0.5)';
  };

  // console.log('data:', type, questionDatas);
  return (
    <StyledQuestionCards $backColor={getBackColor()}>
      {!questionLoading &&
        questionDatas?.map((data, idx) => {
          return <QuestionCard questionData={data} key={[data.id, idx]} />;
        })}
    </StyledQuestionCards>
  );
}

export default QuestionCards;
