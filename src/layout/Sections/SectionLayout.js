import React from "react";
import { styled } from "styled-components";
import Articles from "../../componentes/Articles";
import Trends from "../../componentes/Trend/Trend";

const StyledSectionLayout = styled.div`
  width: 100%;
  height: 700px;

  display: grid;
  grid-template-rows: 2.5fr 1fr;
  gap: 60px;
  grid-template-columns: 1fr;
`;
export default function SectionLayout({ $type }) {
  return (
    <StyledSectionLayout>
      <Articles $type={$type} />
      <Trends type={$type} />
    </StyledSectionLayout>
  );
}
