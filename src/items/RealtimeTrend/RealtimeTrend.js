import PropTypes from "prop-types";
import React from "react";
import { styled } from "styled-components";

const StyledRealtimeTrend = styled.p`
  display: inline-block;
  background-color: white;
  border-radius: 12px;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.05);
  padding: 10px;
`;

export default function RealtimeTrend({ trend }) {
  return <StyledRealtimeTrend>{trend.object}</StyledRealtimeTrend>;
}

RealtimeTrend.propTypes = {
  trend: PropTypes.shape({
    object: PropTypes.string.isRequired,
  }),
};
