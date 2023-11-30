import React from 'react';
import PropTypes from 'prop-types';
import StyledFeedbackSelect from './styles';
import { ReactComponent as Good } from '../../../../../images/feedback/good.svg';
import { ReactComponent as Bad } from '../../../../../images/feedback/bad.svg';
import { ReactComponent as Soso } from '../../../../../images/feedback/soso.svg';
import FeedbackEmotion from '../../atoms/FeedbackEmotion';
import useEmotionFeedback from '../../../hooks/useEmotionFeedback';

export default function FeedbackSelect({ type, quesionId }) {
  const { nowSelected, getNowSelectedFeedback } = useEmotionFeedback(quesionId);
  const feedbackOptions = [
    [<Good />, '도움이 됐어요', 1],
    [<Soso />, '그럭저럭...?!', 0],
    [<Bad />, '별로에요 우우~', -1],
  ];

  return (
    <StyledFeedbackSelect>
      {feedbackOptions.map(([option, label, score], idx) => {
        return (
          <FeedbackEmotion
            type={type}
            emotion={option}
            key={['Emotion', idx]}
            isActivated={nowSelected === score}
            onClick={() => getNowSelectedFeedback(score)}
          >
            <FeedbackEmotion.Label label={label} />
          </FeedbackEmotion>
        );
      })}
    </StyledFeedbackSelect>
  );
}

FeedbackSelect.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  quesionId: PropTypes.string.isRequired,
};

FeedbackSelect.defaultProps = {};
