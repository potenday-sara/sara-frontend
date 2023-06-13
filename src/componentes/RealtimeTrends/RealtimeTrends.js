import { styled } from "styled-components";
import { getTextColor } from "../../Styles";
import { useQuery } from "react-query";
import { getRangking } from "../../apis";
import RealtimeTrend from "../../items/RealtimeTrend/RealtimeTrend";
import { useEffect } from "react";
import { useState } from "react";
import { useResizeObserver } from "../../hooks/hooks";
import PropTypes from "prop-types";

const StyledRealtimeTrends = styled.div`
  color: ${() => getTextColor({ $type: "black" })};
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 8px;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
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

export default function RealtimeTrends({ $type, data, defaultCnt }) {
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
    <StyledRealtimeTrends $type={$type} className="realtime" ref={ref}>
      <h2>{title}</h2>
      <div className="realtime-trends">
        {dataInOrder.map((trend, idx) => (
          <RealtimeTrend key={["trend", idx]} trend={trend} />
        ))}
      </div>
    </StyledRealtimeTrends>
  );
}

RealtimeTrends.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
  data: PropTypes.array,
  defaultCnt: PropTypes.number,
};

RealtimeTrends.defaultProps = {
  data: [],
  defaultCnt: 3,
};
