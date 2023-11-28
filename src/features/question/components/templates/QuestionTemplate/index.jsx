import React from 'react';
import PropTypes, { any } from 'prop-types';
// import ChatBoxLayout from '../../organisms/SaramarService';
import TrendItemsLayout from '../../../layouts/TrendItemsLayout';
import StyledQuestionTemplate from './styles';
import QuestionSlider from '../../organisms/QuestionSlider';
import CoupangRecommend from '../../organisms/CoupangRecommend';

export default function QuestionTemplate({ type, children }) {
  return (
    <StyledQuestionTemplate type={type}>
      <QuestionSlider type={type} />
      {children}
      <CoupangRecommend type={type} />
    </StyledQuestionTemplate>
  );
}

QuestionTemplate.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  children: any,
};
