import { func } from "prop-types";
import React from "react";
import { styled } from "styled-components";

const StyledSpinner = styled.div`
  height: calc(220px + 10vh);
  text-align: center;
  .main-text {
    display: inline-block;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    font-family: "Pretendard";
    border-radius: 16px;
    background-color: #f4f4f4;
    color: ${(props) => (props.$type === "/sara" ? "#007BED" : "#EF2B00")};
  }
  p {
    margin-top: 3px;
    color: #999999;
    font-family: "Pretendard";
    font-size: 12px;
  }
`;

export default function Spinner({ type }) {
  return (
    <StyledSpinner $type={type}>
      <div className="main-text">
        {type === "/sara" ? "사라" : "마라"}가 대신 고민하고 있어요
      </div>
      <p>페이지를 벗어나지 마세요. 요청이 취소 될 수 있습니다...!</p>
    </StyledSpinner>
  );
}
