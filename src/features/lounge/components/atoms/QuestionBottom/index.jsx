/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as QuestionComment } from '../../../assets/QuestionComment.svg';
import { ReactComponent as QuestionHeart } from '../../../assets/QuestionHeart.svg';
import * as S from './styles';

export default function QuestionBottom({ like_count, comment_count }) {
  return (
    <S.StyledQuestionBottom>
      <S.StyledQuestionInfo>
        <QuestionHeart className="question-icon" />
        <p>{like_count || 0}</p>
        <QuestionComment className="question-icon" />
        <p>{comment_count || 0}</p>
      </S.StyledQuestionInfo>
      <p className="question-date">2024.00.00</p>
    </S.StyledQuestionBottom>
  );
}

QuestionBottom.propTypes = PropTypes.shape({
  like_count: PropTypes.string,
  comment_count: PropTypes.string,
}).isRequired;
