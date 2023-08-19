import PropTypes from "prop-types";
import React from "react";
import { styled } from "styled-components";
import { BasicText } from "../../../components/Text/Text";
import { getColorByType, getColorCode } from "../../../Styles";

const StyledRealtimeKeyword = styled.h2`
  display: flex;
  padding: 16px 18px;
  height: 49px;
  width: 100%;
  gap: 8px;
  background-color: ${() => getColorCode('white')};
  border-radius: 18px;
`;

export default function RealtimeKeyword({ $type, idx, trend }) {
  const color = getColorByType($type)
  return <StyledRealtimeKeyword>
    <BasicText
      label={String(idx)}
      $size="xs"
      $color={color}
    />
    <BasicText
      label={trend}
      $size="xs"
      $color="black"
    />
  </StyledRealtimeKeyword>;
}

RealtimeKeyword.propTypes = {
  $type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  idx: PropTypes.number.isRequired,
  trend: PropTypes.string.isRequired,
};
