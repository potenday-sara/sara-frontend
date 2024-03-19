import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import StyledFeedbackSelect from './styles';
import { ReactComponent as SaraGood } from '../../../../../images/feedback/sara/good.svg';
import { ReactComponent as SaraBad } from '../../../../../images/feedback/sara/bad.svg';
import { ReactComponent as SaraSoso } from '../../../../../images/feedback/sara/soso.svg';
import { ReactComponent as MaraGood } from '../../../../../images/feedback/mara/good.svg';
import { ReactComponent as MaraBad } from '../../../../../images/feedback/mara/bad.svg';
import { ReactComponent as MaraSoso } from '../../../../../images/feedback/mara/soso.svg';
import { ReactComponent as MaraBadSelect } from '../../../../../images/feedback/mara/marabadselect.svg';
import { ReactComponent as MaraGoodSelect } from '../../../../../images/feedback/mara/maragoodselect.svg';
import { ReactComponent as MaraSosoSelect } from '../../../../../images/feedback/mara/marasososelect.svg';
import { ReactComponent as SaraBadSelect } from '../../../../../images/feedback/sara/sarabadselect.svg';
import { ReactComponent as SaraGoodSelect } from '../../../../../images/feedback/sara/saragoodselect.svg';
import { ReactComponent as SaraSosoSelect } from '../../../../../images/feedback/sara/sarasososelect.svg';
import FeedbackEmotion from '../../atoms/FeedbackEmotion';
import useEmotionFeedback from '../../../hooks/useEmotionFeedback';
import Toast from '../../../../../components/molecules/Toast';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';
import Select from '../../../../../components/molecules/Select';

const saraFeedbackOptions = [
  [<SaraGood />, '도움이 됐어요', 1, <SaraGoodSelect />],
  [<SaraSoso />, '그럭저럭..?!', 0, <SaraSosoSelect />],
  [<SaraBad />, '영 별로에요', -1, <SaraBadSelect />],
];

const maraFeedbackOptions = [
  [<MaraGood />, '도움이 됐어요', 1, <MaraGoodSelect />],
  [<MaraSoso />, '그럭저럭..?!', 0, <MaraSosoSelect />],
  [<MaraBad />, '영 별로에요', -1, <MaraBadSelect />],
];
const feedbackStyle = css`
  position: relative;
  width: 100%;
  display: flex;
  gap: 24px;
  justify-content: center;
`;

export default function FeedbackSelect({ type, quesionId }) {
  const params = useParams();
  const routeQuestioniId = params.questionId;
  const { nowSelected, setNowSelectedFeedback, isToast } = useEmotionFeedback(quesionId || routeQuestioniId);

  const feedbackOptions = type === 'sara' ? saraFeedbackOptions : maraFeedbackOptions;
  return (
    <StyledFeedbackSelect>
      <Select value={nowSelected}>
        <Select.List cssstyle={feedbackStyle}>
          {feedbackOptions.map(([option, label, score, selectedOption], idx) => {
            return (
              <FeedbackEmotion
                type={type}
                emotion={nowSelected === score ? selectedOption : option}
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
