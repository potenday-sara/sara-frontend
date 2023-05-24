import React from "react";
import { css, styled } from "styled-components";
import PropTypes from "prop-types";

const getBackgroundColor = ({ color = "red" }) =>
  color === "red"
    ? css`
        background: #ef2b00;
      `
    : css`
        background: #007bed;
      `;

const StyledMainButton = styled.button`
  ${(props) => getBackgroundColor(props)}
  height: 153px;
  width: 292px;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0px;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
`;

export const MainButton = ({ label, ...rest }) => (
  <StyledMainButton {...rest}>{label}</StyledMainButton>
);

MainButton.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MainButton.defaultProps = {
  color: "red",
  onClick: undefined,
};
