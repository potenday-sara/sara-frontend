import { func } from "prop-types";
import React from "react";
import { styled } from "styled-components";
import { ReactComponent as Good } from "../../../images/feedback/good.svg";
import { ReactComponent as Bad } from "../../../images/feedback/bad.svg";
import { ReactComponent as Soso } from "../../../images/feedback/soso.svg";
import { useNavigate } from "react-router-dom";
import {
  BasicButton,
  ChoiceButton,
} from "../../../components/Button/MainButton";

const StyledAnswer = styled.div`
  /* height: calc(220px + 10vh); */
  flex-direction: column;
  display: flex;
  gap: 20px;

  .answer {
    padding: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    font-family: "Pretendard";
    height: auto;
    min-height: 300px;
    border-radius: 16px;
    color: black;
    background-color: #f4f4f4;
    color: #666666;
  }
  p {
    margin-top: 3px;
    color: #999999;
    font-family: "Pretendard";
    font-size: 12px;
  }

  .fq {
    color: black;
    font-family: "Pretendard";
    font-size: 16px;

    font-weight: 600;
  }

  .buttons {
    display: flex;
    width: 100%;
    height: 60px;
    gap: 20px;
    svg {
      width: 40%;
    }
    h1 {
      white-space: nowrap;
      font-size: 14px;
    }
  }
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
      border: 0px;
      border-radius: 12px;
      padding: 12px;
      font-size: 12px;
      font-family: "Pretendard";
      color: #666666;
      resize: none;
      /* height: auto !important; */
    }
    .button {
      height: 60px;
    }
  }
`;

export default function Answer({ $type, data, navigate }) {
  return (
    <StyledAnswer $type={$type}>
      <div className="answer">{data.solution}</div>
      <div className="buttons">
        <ChoiceButton
          color="blue"
          onClick={() => navigate("/sara")}
          label={$type === "/sara" ? "에게 다른것 묻기" : "에게 물어보기"}
          type={"sara"}
          $backgroundColor="blue"
        />
        <ChoiceButton
          color="red"
          onClick={() => navigate("/mara")}
          label={$type === "/mara" ? "에게 다른것 묻기" : "에게 물어보기"}
          type={"mara"}
          $backgroundColor="red"
        />
      </div>
      <div className="feedback">
        <div className="fq">도움이 되셨나요?</div>
      </div>
      <div className="feedbacksvgs">
        <div className="svg">
          <Good />
        </div>
        <div className="svg">
          <Bad />
        </div>
        <div className="svg">
          <Soso />
        </div>
      </div>
      <div className="feedbacks">
        <textarea placeholder="" cols="30" rows="5"></textarea>
        <div className="button">
          <BasicButton
            label={"제출하기"}
            $backgroundColor={$type === "sara" ? "blue" : "red"}
            color={"white"}
            size="small"
          />
        </div>
      </div>
    </StyledAnswer>
  );
}
