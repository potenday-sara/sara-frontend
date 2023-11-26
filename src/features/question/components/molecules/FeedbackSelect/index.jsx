import React from 'react';
import PropTypes from 'prop-types';
import StyledFeedbackSelect from './styles';

import { ReactComponent as Good } from '../../../../../images/feedback/good.svg';
import { ReactComponent as Bad } from '../../../../../images/feedback/bad.svg';
import { ReactComponent as Soso } from '../../../../../images/feedback/soso.svg';
import FeedbackEmotion from '../../atoms/FeedbackEmotion';

export default function FeedbackSelect({ type }) {
  const feedbackOptions = [
    [<Good />, '도움이 됐어요', 'good'],
    [<Soso />, '그럭저럭...?!', 'soso'],
    [<Good />, '별로에요 우우~', 'bad'],
  ];
  return (
    <StyledFeedbackSelect>
      {feedbackOptions.map(([option, label, score], idx) => {
        return (
          <FeedbackEmotion
            className={score}
            fill={type}
            emotion={option}
            key={idx}
          >
            <FeedbackEmotion.Label label={label}></FeedbackEmotion.Label>
          </FeedbackEmotion>
        );
      })}
    </StyledFeedbackSelect>
  );
}

FeedbackSelect.propTypes = {
  type: PropTypes.oneOf(['sara', 'maras']),
};
