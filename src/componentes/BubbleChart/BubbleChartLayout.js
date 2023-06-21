import React from "react";
import { styled } from "styled-components";
import BubbleChart from "@testboxlab/react-bubble-chart-d3";
import { useWindowSize } from "../../hooks/hooks";
import { PropTypes } from "prop-types";

const StyledBubbleChartLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 0px auto;
  gap: 15px;
  width: 100%;
  max-width: 540px;
  margin: auto;

  .chart-box {
    width: 100%;
    aspect-ratio: 1 / 1;
    background: #edf5fd;
    box-shadow: inset 4px 4px 24px rgba(0, 0, 0, 0.1);
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    .node {
      transition: all 0.2s ease-in;
      :hover {
        scale: 1.1;
      }
    }
  }
`;

export default function BubbleChartLayout({ data }) {
  const width = useWindowSize();

  return (
    <StyledBubbleChartLayout>
      <h2>다른 사람들이 사고싶은 물건</h2>
      <div className="chart-box">
        {data?.length ? (
          <BubbleChart
            graph={{
              zoom: 1.1,
              offsetX: 0,
              offsetY: 0,
            }}
            width={width || "200px"}
            height={width || "200px"}
            padding={20}
            showLegend={false} // optional value, pass false to disable the legend.
            labelFont={{
              family: "Pretendard",
              size: 12,
              color: "#fff",
              weight: "800",
            }}
            data={data}
          />
        ) : null}
      </div>
    </StyledBubbleChartLayout>
  );
}

BubbleChartLayout.propTypes = {
  data: PropTypes.array.isRequired,
};

BubbleChartLayout.defaultProps = {
  data: [],
};
