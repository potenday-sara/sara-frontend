import React from 'react';
import StyledFeedback from './styles';
import PropTypes from 'prop-types';
import FeedbackSelect from '../../molecules/FeedbackSelect';
import Text from '../../../../../components/atoms/Text';

export default function QuestionEmotionForm({ type }) {
  const firstChar = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <StyledFeedback>
      <Text label={`${firstChar} 가 도움이 되셨나요?`} bold={'lg'} />
      <FeedbackSelect type={type} />
    </StyledFeedback>
  );
}

QuestionEmotionForm.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
};
