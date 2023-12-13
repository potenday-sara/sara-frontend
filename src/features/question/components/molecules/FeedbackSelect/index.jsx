import React from 'react';
import PropTypes from 'prop-types';
import StyledFeedbackSelect from './styles';
import { ReactComponent as Good } from '../../../../../images/feedback/good.svg';
import { ReactComponent as Bad } from '../../../../../images/feedback/bad.svg';
import { ReactComponent as Soso } from '../../../../../images/feedback/soso.svg';
import FeedbackEmotion from '../../atoms/FeedbackEmotion';
import useEmotionFeedback from '../../../hooks/useEmotionFeedback';
import Toast from '../../../../../components/molecules/Toast';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';
import Select from '../../../../../components/molecules/Select';
import { css } from 'styled-components';

const feedbackOptions = [
  [<Good />, '도움이 됐어요', 1],
  [<Soso />, '그럭저럭...?!', 0],
  [<Bad />, '별로에요 우우~', -1],
];

const feedbackStyle = css`
  position: relative;
  width: 100%;
  display: flex;
  gap: 24px;
  justify-content: center;
`;

export default function FeedbackSelect({ type, quesionId }) {
  const { nowSelected, setNowSelectedFeedback, isToast } = useEmotionFeedback(quesionId);

  return (
    <StyledFeedbackSelect>
      <Select value={nowSelected}>
        <Select.List cssstyle={feedbackStyle}>
          {feedbackOptions.map(([option, label, score], idx) => {
            return (
              <FeedbackEmotion
                type={type}
                emotion={option}
                key={['Emotion', idx]}
                isActivated={nowSelected === score}
                onClick={() => setNowSelectedFeedback(score)}
              >
                <FeedbackEmotion.Label label={label} />
                {isToast && nowSelected === score && (
                  <Toast style={{ width: 130 }}>
                    <Text label="평가가 반영되었어요!" color={Theme.color.white} size="12px" bold="400" />
                  </Toast>
                )}
              </FeedbackEmotion>
            );
          })}
        </Select.List>
      </Select>
    </StyledFeedbackSelect>
  );
}

FeedbackSelect.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  quesionId: PropTypes.string.isRequired,
};

FeedbackSelect.defaultProps = {};
