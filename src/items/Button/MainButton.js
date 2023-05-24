import React from "react";
import { css, styled } from "styled-components";
import PropTypes from "prop-types";
import { MainText } from "../Text/Text";
import { ReactComponent as Sara } from "../../images/logos/saralogo1.svg";
import { ReactComponent as Mara } from "../../images/logos/maralogo1.svg";

const getBackgroundColor = ({ $backgroundColor }) => {
  switch ($backgroundColor) {
    case "red":
      return css`
        background-color: #ef2b00;
      `;
    case "blue":
      return css`
        background-color: #007bed;
      `;
    default:
      return css`
        background-color: ${$backgroundColor};
      `;
  }
};

const getBasicButton = () => css`
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0px;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.05);
`;

const getButtonSize = ({ size }) =>
  size === "large"
    ? css`
        height: 153px;
        width: 292px;
        border-radius: 16px;
        padding: 32px;
      `
    : css`
        height: 74px;
        width: 295px;
        border-radius: 12px;
        padding: 12px;
      `;

const StyledChoiceButton = styled.button`
  ${(props) => getBackgroundColor(props)}
  ${(props) => getButtonSize(props)}
  ${() => getBasicButton()}
  gap : 10px;
`;

export const ChoiceButton = ({ label, type, ...rest }) => {
  return (
    <StyledChoiceButton {...rest}>
      {type === "sara" ? <Sara /> : <Mara />}
      <MainText type={"h1"} color={"white"} label={label} />
    </StyledChoiceButton>
  );
};

ChoiceButton.propTypes = {
  type: PropTypes.oneOf(["sara", "mara"]),
  $backgroundColor: PropTypes.oneOf(["blue", "red"]),
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["large", "medium"]),
  onClick: PropTypes.func,
};

ChoiceButton.defaultProps = {
  onClick: undefined,
};

const StyledBasicButton = styled.button`
  ${(props) => getBackgroundColor(props)}
  ${(props) => getButtonSize(props)}
  ${() => getBasicButton()}
  gap : 10px;
`;

export const BasicButton = ({ label, type, ...rest }) => {
  return (
    <StyledBasicButton {...rest}>
      <MainText type={"h2"} color={"black"} label={label} />
    </StyledBasicButton>
  );
};

BasicButton.propTypes = {
  $backgroundColor: PropTypes.oneOf(["blue", "red", "white"]),
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["large", "medium"]),
  onClick: PropTypes.func,
};

BasicButton.defaultProps = {
  $backgroundColor: "white",
  size: "medium",
  onClick: undefined,
};
