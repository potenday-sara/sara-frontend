import { ReactComponent as Good } from "../../../images/feedback/good.svg";
import { ReactComponent as Bad } from "../../../images/feedback/bad.svg";
import { ReactComponent as Soso } from "../../../images/feedback/soso.svg";
import { BasicButton } from "../../../components/Button/MainButton";
import { styled } from "styled-components";
import useInput from "../../../hooks/useInput";
import { useState } from "react";
import FeedbackEmotion from "../components/FeedbackEmotion";
import { postScore } from "../apis/postScore";
import { postFeedback } from "../apis/postFeedback";
import Swal from "sweetalert2";

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
    /* height: 300px; */
    ::placeholder {
      font-size: 16px;
      font-family: "Pretendard";
    }
    textarea {
      background-color: #f4f4f4;
      width: 100%;
      border: 0px;
      border-radius: 12px;
      padding: 12px;
      font-size: 16px;
      color: #666666;
      font-family: "Pretendard";
      resize: none;
      height: 100px;

      h2 {
        letter-spacing: 10px;
      }
      /* height: auto !important; */
    }
    .button {
      height: 50px;
      width: 100%;
    }
  }
`;

export default function FeedbackLayout({ $type, questionId }) {
  const [feedbackValue, setFeedbackValue] = useState(0);
  const [content, setContent] = useInput("");
  const handleFeedbackValue = (now) => {
    setFeedbackValue(now);
    const Scores = [0, 1, 3, 5];
    postScore(questionId, Scores[now]);
  };

  const submitFeedbackContent = (questionId, content) => {
    if (content.length > 0) {
      postFeedback(questionId, content);
      setFeedbackValue(0);
      setContent("");
      Swal.fire({
        icon: "info",
        text: `${$type === "sara" ? "Sara" : "Mara"}에게 의견을 전달했습니다.`,
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "의견을 작성해주세요",
      });
    }
  };

  return (
    <StyledFeedbackLayout>
      <h2 className="fq">도움이 되셨나요?</h2>
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
      {feedbackValue > 0 ? (
        <div className="feedbacks">
          <textarea
            placeholder={`${
              $type === "sara" ? "Sara" : "Mara"
            }에게 바라는 점 / 하고싶은 얘기가 있다면 작성해주세요!
            `}
            value={content}
            onChange={setContent}
          ></textarea>
          <div className="button">
            <BasicButton
              onClick={() => submitFeedbackContent(questionId, content)}
              label={`${$type === "sara" ? "Sara" : "Mara"}에게 의견 전달하기`}
              $backgroundColor={$type === "sara" ? "blue" : "red"}
              color={"white"}
            />
          </div>
        </div>
      ) : null}
    </StyledFeedbackLayout>
  );
}
