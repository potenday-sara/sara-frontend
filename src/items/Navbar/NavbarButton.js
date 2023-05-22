import React from "react";
import { css, styled } from "styled-components";
import PropTypes from "prop-types";

const getVariantStyles = ({ $primary = false }) =>
  $primary
    ? css`
        color: red;
        font-size: 24px;
      `
    : css`
        color: black;
        font-size: 20px;
      `;

const getSizeStyles = ({ size = "medium" }) => {
  switch (size) {
    case "small": {
      return css`
        font-size: 12px;
      `;
    }

    default: {
      return css`
        font-size: 20px;
      `;
    }
  }
};

const StyledNavbarButton = styled.button`
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  padding: 15px;
  margin: 5px;
  cursor: pointer;
  display: inline-block;
  background-color: transparent;

  ${(props) => getVariantStyles(props)}
  ${(props) => getSizeStyles(props)}
`;

export const NavbarButton = ({ label, ...rest }) => (
  <StyledNavbarButton {...rest}>{label}</StyledNavbarButton>
);

NavbarButton.propTypes = {
  $primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

NavbarButton.defaultProps = {
  $primary: false,
  size: "medium",
  onClick: undefined,
};
