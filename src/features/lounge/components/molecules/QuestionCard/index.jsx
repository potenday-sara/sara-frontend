import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as MaraChip } from '../../../assets/MaraChip.svg';
import { ReactComponent as SaraChip } from '../../../assets/SaraChip.svg';
import LoungeContext from '../../../stores/LoungeStore';
import QuestionBottom from '../../atoms/QuestionBottom';
import * as S from './styles';

export default function QuestionCard({ questionData, idx }) {
  const {
    product,
    content,
    type,
    id,
    like_count: likeCount,
    comment_count: commentCount,
    created_at: createdAt,
  } = questionData;
  const { sortType } = useContext(LoungeContext);
  const getTypeChip = () => {
    if (type === 'sara') return <SaraChip />;
    if (type === 'mara') return <MaraChip />;
    return null;
  };
  const navigate = useNavigate('');

  return (
    <S.StyledQuestionCard $sortType={sortType} $rank={idx + 1} onClick={() => navigate(`/question/${id}`)}>
      <S.StyledQuestionName>
        {idx < 3 && sortType === 'like' && <S.StyledRanknumber $rank={idx + 1}>{idx + 1}</S.StyledRanknumber>}
        <p>{product}</p>
        {getTypeChip()}
      </S.StyledQuestionName>
      <S.StyledReason>{content}</S.StyledReason>
      <QuestionBottom likeCount={likeCount} commentCount={commentCount} createdAt={createdAt} />
    </S.StyledQuestionCard>
  );
}

QuestionCard.propTypes = {
  questionData: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    product: PropTypes.string,
    type: PropTypes.string,
    answer: PropTypes.string,
    like_count: PropTypes.number,
    comment_count: PropTypes.number,
    created_at: PropTypes.string,
  }).isRequired,
  idx: PropTypes.number.isRequired,
};
