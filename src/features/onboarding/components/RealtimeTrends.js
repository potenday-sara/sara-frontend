import { styled } from "styled-components";
import { getColorByType, getColorCode, getTextColor } from "../../../Styles";
import RealtimeKeyword from "./RealtimeTrend";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { BasicText } from "../../../components/Text/Text";
import { ReactComponent as SaraText } from "../../../images/logos/SaraText.svg"
import { ReactComponent as MaraText } from "../../../images/logos/MaraText.svg"


const StyledRealtimeKeywords = styled.div`
  width: 240px;

  .realtime-title {
    box-shadow: 4px 4px 24px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    gap: 8px;
    padding: 16px;
    align-items: flex-end;
    width: 100%;
    height: 48px;
    background-color: ${({ $color }) => getColorCode($color)};
  }

  .realtime-trends {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap : 4px;
  }
`;



export default function RealtimeTrends({ $type, data }) {
  const color = getColorByType($type)
  const dataInOrder = data.map((i) => i.object)

  return (
    <StyledRealtimeKeywords $type={$type} $color={color}>
      <div className="realtime-title">
        {$type === 'sara' ? <SaraText /> : <MaraText />}
        <BasicText
          label={'실시간 트렌드'}
          $color="white"
          $size="xs"
        />
      </div>
      <div className="realtime-trends">
        {dataInOrder.slice(0, 5).map((trend, idx) => (
          <RealtimeKeyword key={["trend", idx]} $type={$type} idx={idx + 1} trend={trend} />
        ))}
      </div>
    </StyledRealtimeKeywords>
  );
}

RealtimeTrends.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
  data: PropTypes.array.isRequired,
};

RealtimeTrends.defaultProps = {
  data: [],
};
