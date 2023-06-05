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
  }

  .realtime-trends {
    display: flex;
    flex-direction: column;
    align-items: ${(props) =>
      props.$type === "sara" ? "flex-end" : "flex-start"};
    gap: 8px;
  }
`;

export default function RealtimeTrends({ $type }) {
  const title = $type === "sara" ? "실시간 Sara" : "실시간 Mara";
  const [trendCnt, setTrendCnt] = useState(0);
  const [[_, height], ref] = useResizeObserver();

  useEffect(() => {
    setTrendCnt(Math.floor(height / 50));
  }, [height]);

  const { isLoading, data } = useQuery([$type, "ranking"], () =>
    getRangking($type)
  );

  return (
    <StyledRealtimeTrends $type={$type} className="realtime" ref={ref}>
      <h2>{title}</h2>
      <div className="realtime-trends">
        {isLoading
          ? null
          : data.data.data
              .slice(0, trendCnt)
              .map((trend, idx) => (
                <RealtimeTrend key={["trend", idx]} trend={trend} />
              ))}
      </div>
    </StyledRealtimeTrends>
  );
}

RealtimeTrend.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
};
