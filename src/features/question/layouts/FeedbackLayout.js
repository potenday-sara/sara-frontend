import { BasicButton } from "../../../components/Button/MainButton";
import { styled } from "styled-components";
import useInput from "../../../hooks/useInput";
import { useState } from "react";
import FeedbackEmotion from "../components/FeedbackEmotion";
import useAddScore from "../hooks/useAddScore";
import useAddContents from "../hooks/useAddContents";
import { BasicText } from "../../../components/Text/Text";

const StyledFeedbackLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .feedbacksvgs {
    display: flex;
    justify-content: center;
    cursor: pointer;
    gap: 15px;
  }

  .inputs {
    margin-top: 20px;
    width: 100%;
    position: relative;
    .feedback-button {
      &.sara {
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.9) 100%
          ),
          #007bed;
      }
      &.mara {
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.9) 100%
          ),
          #ef2b00;
      }
      border: none;
      border-radius: 8px;
      position: absolute;
      transform: translate(0, -50%);
      top: 50%;
      right: 8px;
      padding: 6px 8px;
      p {
        font-size: 10px;
      }
    }
    input {
      border-radius: 12px;
      border: 0px;
      outline: 1px solid #ddd;
      width: 100%;
      height: 55px;
      padding: 16px;
      font-family: Pretendard;
      font-weight: 400;
      &::placeholder {
        font-weight: 400;
        color: #ddd;
        font-size: 10px;
        font-family: Pretendard;
      }
    }
  }
`;

export default function FeedbackLayout({ $type, questionId }) {
  const [feedbackValue, setFeedbackValue] = useState(0);
  const [content, setContent, setTextValue] = useInput("");
  const { mutate: addScore } = useAddScore();
  const { mutate: addContents } = useAddContents($type);
  const handleFeedbackValue = (now) => {
    setFeedbackValue(now);
    const Scores = [0, 5, 3, 1];
    addScore({ id: questionId, score: 2, $type });
  };

  const submitFeedbackContent = (questionId, content) => {
    addContents({ id: questionId, content });
    setTextValue("");
  };

  return (
    <StyledFeedbackLayout>
      <BasicText
        $size={"xs"}
        label={`${$type === "sara" ? "Sara" : "Mara"}가 도움이 되셨나요?`}
      />
      <div className="feedbacksvgs">
        <FeedbackEmotion
          $type={$type === "sara" ? "#007bed" : "red"}
          emotion={1}
          feedbackValue={feedbackValue}
          handleFeedbackValue={handleFeedbackValue}
        />
        <FeedbackEmotion
          $type={$type === "sara" ? "#007bed" : "red"}
          emotion={2}
          feedbackValue={feedbackValue}
          handleFeedbackValue={handleFeedbackValue}
        />
        <FeedbackEmotion
          $type={$type === "sara" ? "#007bed" : "red"}
          emotion={3}
          feedbackValue={feedbackValue}
          handleFeedbackValue={handleFeedbackValue}
        />
      </div>
      <div className="inputs">
        <input
          className="feedBackInput"
          placeholder={`${
            $type === "sara" ? "Sara" : "Mara"
          }에게 바라는 점 / 하고싶은 얘기가 있다면 작성해주세요!`}
        />
        <button className={`feedback-button ${$type}`}>
          <BasicText
            label={"의견 보내기"}
            $size={"xs"}
            $bold={"lg"}
            $color={$type === "sara" ? "blue" : "red"}
          />
        </button>
      </div>
    </StyledFeedbackLayout>
  );
}
