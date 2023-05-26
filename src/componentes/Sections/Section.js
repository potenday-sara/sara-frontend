import React from "react";
import { styled } from "styled-components";
import Articles from "../Articles";

const StyledSection = styled.div`
  width: 80%;
  height: calc(300px + 20vh);
  /* background-color: red; */

  display: grid;
  grid-template-rows: 1.5fr 1fr;
  grid-template-columns: 1fr;
`;
export default function Section() {
  return (
    <StyledSection>
      <Articles />
    </StyledSection>
  );
}
