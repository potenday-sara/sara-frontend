import { styled } from "styled-components";
import PropTypes from "prop-types";

import { ReactComponent as Good } from "../../../images/feedback/good.svg";
import { ReactComponent as Bad } from "../../../images/feedback/bad.svg";
import { ReactComponent as Soso } from "../../../images/feedback/soso.svg";
const StyledFeedbackEmotion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isNow }) => (isNow ? 1 : 0.6)};
  p {
    margin-top: 3px;
    color: #999999;
    font-family: "Pretendard";
    font-size: 12px;
  }
`;

const getEmotionSVG = (type, emotion) => {
  switch (emotion) {
    case 1:
      return (
        <>
          <Good fill={type} />
          <p>도움이 됐어요!</p>
        </>
      );

    case 2:
      return (
        <>
          <Soso fill={type} />
          <p>그럭저럭...?!</p>
        </>
      );

    case 3:
      return (
        <>
          <Bad fill={type} />
          <p>별로에요 우우~</p>
        </>
      );
  }
};

export default function FeedbackEmotion({
  $type,
  emotion,
  feedbackValue,
  setFeedbackValue,
  ...rest
}) {
  return (
    <StyledFeedbackEmotion isNow={emotion === feedbackValue ? true : false}>
      {getEmotionSVG($type, emotion)}
    </StyledFeedbackEmotion>
  );
}

FeedbackEmotion.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
  emotion: PropTypes.oneOf([1, 2, 3]).isRequired,
  feedbackValue: PropTypes.number.isRequired,
  setFeedbackValue: PropTypes.func,
};

FeedbackEmotion.defaultProps = {
  setFeedbackValue: undefined,
};
