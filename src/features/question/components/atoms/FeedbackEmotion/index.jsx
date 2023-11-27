import React, { cloneElement } from 'react';
import StyledFeedbackEmotion from './styles';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';
import PropTypes from 'prop-types';

function FeedbackEmotion({
  emotion,
  isActivated,
  type,
  children,
  score,
  ...rest
}) {
  return (
    <StyledFeedbackEmotion {...rest}>
      {cloneElement(emotion, {
        fill: `${
          type === 'sara'
            ? isActivated
              ? Theme.color.saraPrimary
              : Theme.color.saraSecondary
            : isActivated
              ? Theme.color.maraPrimary
              : Theme.color.maraSecondary
        }`,
      })}
      {children}
    </StyledFeedbackEmotion>
  );
}

FeedbackEmotion.propTypes = {
  emotion: PropTypes.node,
  type: PropTypes.oneOf(['sara', 'mara']),
  children: PropTypes.node,
  score: PropTypes.oneOf(['bad', 'soso', 'good']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActivated: PropTypes.bool,
  id: PropTypes.string,
};

const Label = ({ label }) => {
  return <Text label={label} bold={'sm'} size={'xs'} />;
};

FeedbackEmotion.Label = Label;

export default FeedbackEmotion;
