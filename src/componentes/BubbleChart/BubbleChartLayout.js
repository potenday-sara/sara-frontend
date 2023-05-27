import React from "react";
import { styled } from "styled-components";
import { MainText } from "../../items/Text/Text";
import BubbleChart from "@testboxlab/react-bubble-chart-d3";
import { useWindowSize } from "../../hooks/hooks";
import { PropTypes } from "prop-types";

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
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function BubbleChartLayout({ type }) {
  const getColor = (value, type) => {
    console.log(type);
    if (type === "/sara") {
      if (value >= 20) return "#007BED";
      else if (value >= 10) return "#4D9DE6";
      else return "#A2CBF1";
    }

    if (type === "/mara") {
      if (value >= 20) return "#EF2B00";
      else if (value >= 10) return "#F46242";
      else return "#F5907A";
    }
  };

  const data = [
    {
      label: "삼성 비스포크 냉장고",
      value: 15,
      color: getColor(15, type),
    },
    {
      label: "삼성 비스포크 냉장고",
      value: 25,
      color: getColor(20, type),
    },
    {
      label: "삼성 비스포크 냉장고",
      value: 5,
      color: getColor(5, type),
    },
  ];
  const width = useWindowSize();

  return (
    <StyledBubbleChartLayout>
      <MainText
        label={"다른사람들이 사고싶은 물건"}
        type={"h1"}
        color="black"
      />
      <div className="chart-box">
        <BubbleChart
          graph={{
            zoom: 1,
            offsetX: 0,
            offsetY: 0,
          }}
          width={width}
          height={width}
          padding={10}
          showLegend={false} // optional value, pass false to disable the legend.
          labelFont={{
            family: "Pretendard",
            size: 15,
            color: "#fff",
            weight: "normal",
          }}
          data={data}
          //Custom bubble/legend click functions such as searching using the label, redirecting to other page
          // bubbleClickFunc={bubbleClick}
          // legendClickFun={legendClick}
        />
      </div>
    </StyledBubbleChartLayout>
  );
}
