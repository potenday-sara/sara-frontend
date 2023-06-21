import React from "react";
import { styled } from "styled-components";
import Articles from "../Articles";
import Trends from "../Trend/Trend";

const StyledSection = styled.div`
  width: 80%;
  height: calc(300px + 20vh);
  /* background-color: red; */

  display: grid;
  grid-template-rows: 2.5fr 1fr;
  gap: 40px;
  grid-template-columns: 1fr;
`;
export default function Section({ $type }) {
  return (
    <StyledSection>
      <Articles $type={$type} />
      <Trends type={$type} />
    </StyledSection>
  );
}
