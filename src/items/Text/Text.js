import React from "react";
import { css, styled } from "styled-components";
import PropTypes from "prop-types";

const textColor = ({ color = "black" }) => {
  switch (color) {
    case "white":
      return css`
        color: #ffffff;
      `;
    case "black":
      return css`
        color: #333333;
      `;
    case "red":
      return css`
        color: #ef2b00;
      `;
    case "blue":
      return css`
        color: #007bed;
      `;
    default:
      return css`
        color: ${color};
      `;
  }
};

const basicTextStyle = () => css`
  font-family: "Pretendard";
  letter-spacing: 0.0015em;
`;

const StyledH1Text = styled.h1`
  ${(props) => basicTextStyle(props)}
  ${(props) => textColor(props)}
  font-weight: 700;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

const StyledH2Text = styled.h2`
  ${(props) => basicTextStyle(props)}
  ${(props) => textColor(props)}
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

const StyledPText = styled.p`
  ${(props) => basicTextStyle(props)}
  ${(props) => textColor(props)}
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

export const MainText = ({ type, label, ...rest }) => {
  console.log(type);
  switch (type) {
    case "h1":
      console.log("hi");
      return <StyledH1Text {...rest}>{label}</StyledH1Text>;

    case "h2":
      console.log("hi");
      return <StyledH2Text {...rest}>{label}</StyledH2Text>;

    default:
      console.log("hi");
      return <StyledPText {...rest}>{label}</StyledPText>;
  }
};

MainText.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "p"]),
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MainText.defaultProps = {
  color: "red",
  onClick: undefined,
};
