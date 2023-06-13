import PropTypes from "prop-types";
import React from "react";
import { styled } from "styled-components";

const StyledRealtimeTrend = styled.h2`
  font-size: 16px !important;
  display: inline-block;
  border-radius: 12px;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.05);
  background: #ffffff;
  padding: 10px;
`;

export default function RealtimeTrend({ trend }) {
  return <StyledRealtimeTrend>{trend}</StyledRealtimeTrend>;
}

RealtimeTrend.propTypes = {
  trend: PropTypes.string.isRequired,
};
