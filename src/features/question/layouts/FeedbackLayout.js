import { ReactComponent as Good } from "../../../images/feedback/good.svg";
import { ReactComponent as Bad } from "../../../images/feedback/bad.svg";
import { ReactComponent as Soso } from "../../../images/feedback/soso.svg";
import { BasicButton } from "../../../components/Button/MainButton";
import { styled } from "styled-components";
import useInput from "../../../hooks/useInput";
import { useState } from "react";
import FeedbackEmotion from "../components/FeedbackEmotion";

const StyledFeedbackLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .feedbacksvgs {
    display: flex;
    justify-content: center;
    cursor: pointer;
    gap: 30px;
  }

  .feedbacks {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    textarea {
      background-color: #f4f4f4;
      width: 100%;
      border: 0px;
      border-radius: 12px;
      padding: 12px;
      font-size: 12px;
      font-family: "Pretendard";
      color: #666666;
      resize: none;

      h2 {
        letter-spacing: 10px;
      }
      /* height: auto !important; */
    }
  }
`;

export default function FeedbackLayout({ $type }) {
  const [feedbackValue, setFeedbackValue] = useState(1);
  const handleFeedbackValue = (now) => {};
  const [_, __] = useInput("");
  return (
    <StyledFeedbackLayout>
      <h2 className="fq">도움이 되셨나요?</h2>
      <div className="feedbacksvgs">
        <FeedbackEmotion
          $type={$type === "sara" ? "#007bed" : "red"}
          emotion={1}
          feedbackValue={feedbackValue}
          setFeedbackValue={setFeedbackValue}
        />
        <FeedbackEmotion
          $type={$type === "sara" ? "#007bed" : "red"}
          emotion={2}
          feedbackValue={feedbackValue}
          setFeedbackValue={setFeedbackValue}
        />
        <FeedbackEmotion
          $type={$type === "sara" ? "#007bed" : "red"}
          emotion={3}
          feedbackValue={feedbackValue}
          setFeedbackValue={setFeedbackValue}
        />
      </div>
      {feedbackValue > 0 ? (
        <div className="feedbacks">
          <textarea placeholder="" cols="30" rows="5"></textarea>

          <BasicButton
            label={`${$type === "sara" ? "Sara" : "Mara"}에게 의견 전달하기`}
            $backgroundColor={$type === "sara" ? "blue" : "red"}
            color={"white"}
          />
        </div>
      ) : null}
    </StyledFeedbackLayout>
  );
}
