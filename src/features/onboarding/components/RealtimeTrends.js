import { css, styled } from "styled-components";
import { getColorByType, getColorCode, getTextColor } from "../../../Styles";
import RealtimeKeyword from "./RealtimeTrend";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { BasicText } from "../../../components/Text/Text";
import { ReactComponent as SaraText } from "../../../images/logos/SaraText.svg"
import { ReactComponent as MaraText } from "../../../images/logos/MaraText.svg"
import TextLogo from "../../../components/Logo/TextLogo";


const StyledRealtimeKeywords = styled.div`
  width: 100%;

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

    height: 282px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap : 4px;
    background-color: #eee;
  }
`;

const $getTextLogoStyles = css`
  width: 63px;
  height: 16px;
`


export default function RealtimeTrends({ $type, data }) {
  const color = getColorByType($type)
  const dataInOrder = data.map((i) => i.object)

  return (
    <StyledRealtimeKeywords $type={$type} $color={color}>
      <div className="realtime-title">
        {$type === 'sara' ? <TextLogo $getTextLogoStyles={$getTextLogoStyles} $fill={'white'} $type={$type} /> : <TextLogo $fill={'white'} $type={$type} $getTextLogoStyles={$getTextLogoStyles} />}
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
