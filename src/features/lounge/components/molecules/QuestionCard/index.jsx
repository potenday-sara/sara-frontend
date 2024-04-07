import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as MaraChip } from '../../../assets/MaraChip.svg';
import { ReactComponent as SaraChip } from '../../../assets/SaraChip.svg';
import QuestionBottom from '../../atoms/QuestionBottom';
import * as S from './styles';

export default function QuestionCard({ questionData }) {
  const { product, content, type } = questionData;
  const getTypeChip = () => {
    if (type === 'sara') return <SaraChip />;
    if (type === 'mara') return <MaraChip />;
    return null;
  };

  return (
    <S.StyledQuestionCard>
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
