import React from "react";
import { styled } from "styled-components";
import { MainText } from "../../items/Text/Text";
import { TrendButton } from "../../items/Button/MainButton";

const StyledTredns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  .trends {
    display: block;
    margin-top: 10px;
  }
`;

export default function Trends({ type }) {
  return (
    <StyledTredns>
      <MainText label={"요즘 트렌드"} type={"h2"} color="black" />
      <div className="trends">
        <TrendButton
          label={"🎧 에어팟 맥스"}
          color={type === "/sara" ? "blue" : "red"}
        />
        <TrendButton
          label={"🎧 에어팟 맥스"}
          color={type === "/sara" ? "blue" : "red"}
        />
        <TrendButton
          label={"🎧 에어팟 맥스"}
          color={type === "/sara" ? "blue" : "red"}
        />
      </div>
    </StyledTredns>
  );
}
