import React, { useContext } from 'react';
import { Theme } from '../../../../../../Styles';
import useRank from '../../../hooks/useRanking';
import LoungeContext from '../../../stores/LoungeStore';
import QuestionCard from '../../molecules/QuestionCard';
import StyledQuestionCards from './styled';

function QuestionCards() {
  const { type, sortType } = useContext(LoungeContext);
  const { data: questionDatas, isLoading: questionLoading } = useRank(type, sortType);
  const getBackColor = () => {
    if (type === 'sara') return Theme.color.saraSecondary;
    if (type === 'mara') return Theme.color.maraSecondary;
    return 'rgba(255, 205, 77, 0.5)';
  };

  return (
    <StyledQuestionCards $backColor={getBackColor()}>
      {!questionLoading &&
        questionDatas?.results.map((data, idx) => {
          return <QuestionCard questionData={data} idx={idx} key={[data.id, idx]} />;
        })}
    </StyledQuestionCards>
  );
}

export default QuestionCards;
