import { styled } from "styled-components";
import { getTextColor } from "../../../Styles";
import RealtimeKeyword from "./RealtimeKeyword";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import useResizeObserver from "../hooks/useResizeObserver";

const StyledRealtimeKeywords = styled.div`
  color: ${() => getTextColor({ $type: "black" })};
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 8px;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  left: ${(props) => (props.$type === "mara" ? "15%" : "-15%")};

  h2 {
    display: block;
    font-size: 18px;
    text-align: ${(props) => (props.$type === "sara" ? "right" : "left")};
  }

  .realtime-trends {
    display: flex;
    flex-direction: column;
    align-items: ${(props) =>
      props.$type === "sara" ? "flex-end" : "flex-start"};
    gap: 8px;

  }
`;

export default function RealtimeKeywords({ $type, data, defaultCnt }) {
  const title = $type === "sara" ? "실시간 Sara" : "실시간 Mara";
  const [trendCnt, setTrendCnt] = useState(0);
  const [[_, height], ref] = useResizeObserver();
  const dataInOrder = [
    ...data.slice(0, trendCnt || defaultCnt).map((i) => i.object),
  ];

  useEffect(() => {
    setTrendCnt(Math.floor(height / 50));
  }, [height]);

  return (
    <StyledRealtimeKeywords $type={$type} className="realtime" ref={ref}>
      <h2>{title}</h2>
      <div className="realtime-trends">
        {dataInOrder.map((trend, idx) => (
          <RealtimeKeyword key={["trend", idx]} trend={trend} />
        ))}
      </div>
    </StyledRealtimeKeywords>
  );
}

RealtimeKeywords.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
  data: PropTypes.array,
  defaultCnt: PropTypes.number,
};

RealtimeKeywords.defaultProps = {
  data: [],
  defaultCnt: 3,
};
