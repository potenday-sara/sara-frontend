import React from 'react';
import { styled } from 'styled-components';
import ChatBoxLayout from './ChatboxLayout';
import SectionLayout from './SectionLayout';
import TrendItemsLayout from './TrendItemsLayout';
import PropTypes from 'prop-types';

const StyledQuestionLayout = styled.main`
  position: relative;
  width: 100%;
  gap: 64px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  align-items: center;
`;

export default function QuestionLayout({ $type }) {
  return (
    <StyledQuestionLayout>
      <SectionLayout $type={$type} />
      <ChatBoxLayout $type={$type} />
      <TrendItemsLayout $type={$type} />
    </StyledQuestionLayout>
  );
}

QuestionLayout.propTypes = {
  $type: PropTypes.any,
};
