import React from "react";

import { styled } from "styled-components";
import { MainText } from "../Text/Text";

const StyledArticle = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 1fr;
  background-color: white;
  width: calc(300px + 10vw);
  height: 100px;
  /* background-color: red; */
  padding: 15px 20px;
  bottom: 5px;
  background: #ffffff;
  border-radius: 16px;

  .contents {
    h2 {
      margin-bottom: 3px;
    }
    /* p {
      line-height: 14px;
      font-size: 13px;
    } */
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default function Article() {
  return (
    <StyledArticle>
      <div className="contents">
        <MainText label={"맥북 에어"} type={"h2"} color={"blue"} />
        <MainText
          label={
            "벌써 세 번 잃어버렸는데,이번에 사면 또 잃어버릴 것 같아서 못 사겠어..."
          }
          type={"p"}
          color={"#999999"}
        />
      </div>
      <div className="black"></div>
    </StyledArticle>
  );
}
