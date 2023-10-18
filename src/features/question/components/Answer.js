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
import FeedbackLayout from "../layouts/FeedbackLayout";
import { BasicText } from "../../../components/Text/Text";
import TextLogo from "../../../components/Logo/TextLogo";

const StyledAnswer = styled.div`
  /* height: calc(220px + 10vh); */
  flex-direction: column;
  display: flex;
  gap: 10px;

  .answer {
    line-height: 22.4px;
  }
  .title {
    display: flex;
    width: 100%;
    gap: 3px;
    justify-content: center;
    align-items: flex-end;
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
`;

export default function Answer({ $type, data, navigate }) {
  return (
    <StyledAnswer $type={$type}>
      <div className="title">
        <TextLogo $type={$type} $fill={"blue"} />
        <BasicText label={"의 답변"} $size={"sm"} $customColor={"#666"} />
      </div>
      
      <div className="answer">
       <BasicText $size={'xs'} $customColor={'#999'} label={'블루투스 이어폰을 구매하는 건 나쁘지 않은 선택일 수 있어. 알다시피 몇 번이나 산 후에 잃어버리는 걱정은 당연한 거야. 그렇지만 우리는 실수를 범할 수 있는 거니까 너무 스스로를 자책하지 말아야 해. 이번에는 이전에 경험한 것을 근거로 조금 더 신경을 써보는 건 어때? 예를 들면, 이어폰을 사용한 후에는 항상 돌려놓을 곳을 정해두고 잊지 않도록 해봐. 또한, 소중한 물건이니까 가방이나 주머니에 넣을 때 조심하면 좋을 거야. 그리고 이어폰을 잃어버리더라도 너무 슬퍼하지 말고 다시 구매할 수 있을 거야. 그렇게 생각하면 구매하는 게 좋을 거야. 사라.'} />
      </div>
      <div className="buttons">
        <ChoiceButton
          color="blue"
          onClick={() => navigate("/question/sara")}
          label={$type === "/sara" ? "에게 다른것 묻기" : "에게 물어보기"}
          type={"sara"}
          $backgroundColor="blue"
        />
        <ChoiceButton
          color="red"
          onClick={() => navigate("/question/mara")}
          label={$type === "/mara" ? "에게 다른것 묻기" : "에게 물어보기"}
          type={"mara"}
          $backgroundColor="red"
        />
      </div>
      <FeedbackLayout $type={$type} questionId={data.id} />
    </StyledAnswer>
  );
}
