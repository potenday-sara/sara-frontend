import React from "react";
import { styled } from "styled-components";
import { MainText } from "../../items/Text/Text";
import BubbleChart from "@weknow/react-bubble-chart-d3";

const StyledBubbleChartLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 0px 40px;
  gap: 15px;
  max-width: 700px;
  min-width: 450px;
  width: 80%;
  /* min-width: 560px; */
  /* background-color: red; */
  .chart-box {
    width: 100%;
    aspect-ratio: 1 / 1;
    background: #edf5fd;
    box-shadow: inset 4px 4px 24px rgba(0, 0, 0, 0.1);
    border-radius: 32px;
  }
`;

export default function BubbleChartLayout() {
  const bubbleClick = (label) => {
    console.log("Custom bubble click func");
  };
  const legendClick = (label) => {
    console.log("Customer legend click func");
  };
  return (
    <StyledBubbleChartLayout>
      <MainText
        label={"다른사람들이 사고싶은 물건"}
        type={"h1"}
        color="black"
      />
      <div className="chart-box"></div>
    </StyledBubbleChartLayout>
  );
}
