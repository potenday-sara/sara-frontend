import React from 'react';
import PropTypes, { any } from 'prop-types';
import SectionLayout from '../../../layouts/SectionLayout';
// import ChatBoxLayout from '../../organisms/SaramarService';
import TrendItemsLayout from '../../../layouts/TrendItemsLayout';
import StyledQuestionTemplate from './styles';

export default function QuestionTemplate({ type, children }) {
  return (
    <StyledQuestionTemplate type={type}>
      {/* <SectionLayout type={type} /> */}
      <div></div>
      {children}
      <TrendItemsLayout type={type} />
    </StyledQuestionTemplate>
  );
}

QuestionTemplate.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  children: any,
};
