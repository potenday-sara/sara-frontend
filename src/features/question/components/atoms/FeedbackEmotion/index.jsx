import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import StyledFeedbackEmotion from './styles';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

function FeedbackEmotion({ emotion, isActivated, type, children, ...rest }) {
  return (
    <StyledFeedbackEmotion {...rest}>
      <div className="svg">
        {cloneElement(emotion, {
          stroke: `${
            type === 'sara'
              ? isActivated
                ? Theme.color.saraPrimary
                : Theme.color.saraSecondary
              : isActivated
                ? Theme.color.maraPrimary
                : Theme.color.maraSecondary
          }`,
        })}
      </div>
      {children}
    </StyledFeedbackEmotion>
  );
}

FeedbackEmotion.propTypes = {
  emotion: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActivated: PropTypes.bool,
  id: PropTypes.string,
};

FeedbackEmotion.defaultProps = {
  children: null,
  onClick: undefined,
  className: '',
  isActivated: false,
  id: '',
};

function Label({ label }) {
  return <Text label={label} bold="500" size="13px" color={Theme.color.darkGray} />;
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
};

FeedbackEmotion.Label = Label;

export default FeedbackEmotion;
