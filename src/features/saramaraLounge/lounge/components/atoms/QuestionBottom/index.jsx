/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as QuestionComment } from '../../../assets/QuestionComment.svg';
import { ReactComponent as QuestionHeart } from '../../../assets/QuestionHeart.svg';
import * as S from './styles';

export default function QuestionBottom({ likeCount, commentCount, createdAt }) {
  return (
    <S.StyledQuestionBottom>
      <S.StyledQuestionInfo>
        <QuestionHeart className="question-icon" />
        <p>{likeCount || 0}</p>
        <QuestionComment className="question-icon" />
        <p>{commentCount || 0}</p>
      </S.StyledQuestionInfo>
      <p className="question-date">{createdAt?.substring(0, 10) || '2024.00.00'}</p>
    </S.StyledQuestionBottom>
  );
}

QuestionBottom.propTypes = PropTypes.shape({
  likeCount: PropTypes.number,
  commentCount: PropTypes.number,
  createdAt: PropTypes.string,
}).isRequired;
