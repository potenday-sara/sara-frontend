import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as MaraChip } from '../../../assets/MaraChip.svg';
import { ReactComponent as SaraChip } from '../../../assets/SaraChip.svg';
import QuestionBottom from '../../atoms/QuestionBottom';
import * as S from './styles';

export default function QuestionCard({ questionData }) {
  const { product, content, type, id } = questionData;
  const getTypeChip = () => {
    if (type === 'sara') return <SaraChip />;
    if (type === 'mara') return <MaraChip />;
    return null;
  };
  const navigate = useNavigate('');

  return (
    <S.StyledQuestionCard onClick={() => navigate(`/question/${id}`)}>
      <S.StyledQuestionName>
        <p>{product}</p>
        {getTypeChip()}
      </S.StyledQuestionName>
      <S.StyledReason>{content}</S.StyledReason>
      <QuestionBottom />
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
  }).isRequired,
};
