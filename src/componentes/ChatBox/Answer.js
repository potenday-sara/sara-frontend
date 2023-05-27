import { func } from "prop-types";
import React from "react";
import { styled } from "styled-components";
import { BasicButton, ChoiceButton } from "../../items/Button/MainButton";
import { ReactComponent as Good } from "../../images/feedback/good.svg";
import { ReactComponent as Bad } from "../../images/feedback/bad.svg";
import { ReactComponent as Soso } from "../../images/feedback/soso.svg";
import { useNavigate } from "react-router-dom";

const StyledAnswer = styled.div`
  height: calc(220px + 10vh);
  flex-direction: column;
  display: flex;
  gap: 3vh;

  .answer {
    padding: 20px;
    font-weight: 400;
    overflow: auto;
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
    }
    button {
      width: 100px;
      height: 50px;
      margin-bottom: 20px;
    }
  }
`;

export default function Answer({ type }) {
  const navigate = useNavigate();
  return (
    <StyledAnswer $type={type}>
      <div className="answer">
        블루투스 이어폰을 구매하는 건 나쁘지 않은 선택일 수 있어. 알다시피 몇
        번이나 산 후에 잃어버리는 걱정은 당연한 거야. 그렇지만 우리는 실수를
        범할 수 있는 거니까 너무 스스로를 자책하지 말아야 해. 이번에는 이전에
        경험한 것을 근거로 조금 더 신경을 써보는 건 어때? 예를 들면, 이어폰을
        사용한 후에는 항상 돌려놓을 곳을 정해두고 잊지 않도록 해봐. 또한, 소중한
        물건이니까 가방이나 주머니에 넣을 때 조심하면 좋을 거야. 그리고 이어폰을
        잃어버리더라도 너무 슬퍼하지 말고 다시 구매할 수 있을 거야. 그렇게
        생각하면 구매하는 게 좋을 거야. 사라.
      </div>
      <div className="buttons">
        <ChoiceButton
          onClick={() => navigate("/sara")}
          label={type === "/sara" ? "에게 다른것 묻기" : "에게 물어보기"}
          type={type === "sara"}
          $backgroundColor="red"
        />
        <ChoiceButton
          onClick={() => navigate("/mara")}
          label={type === "/mara" ? "에게 다른것 묻기" : "에게 물어보기"}
          type={type === "mara"}
          $backgroundColor="blue"
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
        <BasicButton
          label={"제출하기"}
          $backgroundColor={type === "/sara" ? "blue" : "red"}
          color={"white"}
          size="small"
        />
      </div>
    </StyledAnswer>
  );
}
