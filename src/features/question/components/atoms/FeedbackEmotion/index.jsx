import React, { cloneElement } from 'react';
import StyledFeedbackEmotion from './styles';
import Text from '../../../../../components/atoms/Text';

function FeedbackEmotion({ emotion, children, score, label, ...rest }) {
  return (
    <StyledFeedbackEmotion {...rest}>
      {cloneElement(emotion, { fill: 'red'})}
      {children}
    </StyledFeedbackEmotion>
  );
}

const Label = ({ label }) => {
  return <Text label={label} bold={'sm'} size={'xs'} />;
};

FeedbackEmotion.Label = Label;

export default FeedbackEmotion;
