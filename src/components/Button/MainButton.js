import React from "react";
import { css, styled } from "styled-components";
import { MainText } from "../Text/Text";
import PropTypes from "prop-types";
import { ReactComponent as Sara } from "../../images/logos/saralogo1.svg";
import { ReactComponent as Mara } from "../../images/logos/maralogo1.svg";

export const getBackgroundColor = ({ $backgroundColor }) => {
  switch ($backgroundColor) {
    case "red":
      return css`
        background-color: #ef2b00;
        box-shadow: 0px 5px 0px 0px #bd2200;
        transition: all 0.2s;
        &:hover {
          box-shadow: 0px 0px 0px 0px #bd2200;
          margin-top: 7px;
          margin-bottom: 5px;
        }
      `;
    case "blue":
      return css`
        background-color: #007bed;
        box-shadow: 0px 5px 0px 0px #0158a8;
        transition: all 0.2s;
        &:hover {
          box-shadow: 0px 0px 0px 0px #0158a8;
          margin-top: 7px;
          margin-bottom: 5px;
        }
      `;
    default:
      return css`
        background-color: ${$backgroundColor};
      `;
  }
};
export const getBorderColor = ({ color }) => {
  switch (color) {
    case "red":
      return css`
        border: 1px solid #ef2b00;
        border-radius: 12px;
      `;
    case "blue":
      return css`
        border: 1px solid #007bed;
        border-radius: 12px;
      `;
    default:
      return css`
        background-color: ${color};
      `;
  }
};

export const getBasicButton = () => css`
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0px;
`;

export const getButtonSize = ({ size }) => {
  switch (size) {
    case "large": {
      return css`
        max-height: 376px;
        height: 100%;
        max-width: 340px;
        width: 100%;

        border-radius: 32px;
        padding: 10px;
      `;
    }

    case "medium": {
      return css`
        height: 153px;
        width: 295px;
        border-radius: 16px;
        padding: 20px;
      `;
    }
    default: {
      return css`
        height: 50px;
        width: 100%;
        border-radius: 12px;
        padding: 12px;
      `;
    }
  }
};

export const StyledChoiceButton = styled.button`
  ${() => getBasicButton()}
  ${(props) => getBackgroundColor(props)}
  ${(props) => getButtonSize(props)}
`;

const StyledBasicButton = styled.button`
  ${(props) => getBackgroundColor(props)}
  ${(props) => getButtonSize(props)}
  ${(props) => getBasicButton(props)}
  gap: 10px;
`;

export const BasicButton = ({ label, color, $type, ...rest }) => {
  return (
    <StyledBasicButton {...rest}>
      <MainText type={"h2"} color={color ? color : "black"} label={label} />
    </StyledBasicButton>
  );
};

BasicButton.propTypes = {
  $backgroundColor: PropTypes.oneOf(["blue", "red", "white"]),
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  onClick: PropTypes.func,
};

BasicButton.defaultProps = {
  $backgroundColor: "white",
  size: "medium",
  onClick: undefined,
};

const StyledTextButton = styled.button`
  background-color: ${(props) => props.$backgroundColor};
  ${() => getBasicButton()}
  padding: 10px 20px;
`;

export const TextButton = ({ label, ...rest }) => {
  return (
    <StyledTextButton {...rest}>
      <MainText type={"h2"} label={label} color={"black"}></MainText>
    </StyledTextButton>
  );
};

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

TextButton.defaultProps = {
  $backgroundColor: "white",
  onClick: undefined,
};

const StyledTrendButton = styled.button`
  ${() => getBasicButton()}
  ${(props) => getBackgroundColor(props)}
  ${(props) => getBorderColor(props)}
  /* background-color: red; */
  width: auto;
  display: block;
  height: 45px;
  /* gap: 10px; */
  margin: 2px;
  padding: 10px 10px;
  transition: all 0.2s;

  h2 {
    font-size: 14px;
  }
`;

export const TrendButton = ({ label, ...rest }) => (
  <StyledTrendButton {...rest}>
    <MainText type={"h2"} label={label} color={"blakc"} />
  </StyledTrendButton>
);
TrendButton.propTypes = {
  $backgroundColor: PropTypes.oneOf(["blue", "red", "white"]),
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

TrendButton.defaultProps = {
  $backgroundColor: "white",
  onClick: undefined,
};

export const ChoiceButton = ({ label, type, ...rest }) => {
  return (
    <StyledChoiceButton {...rest}>
      {type === "sara" ? <Sara /> : <Mara stroke="white" />}
      <MainText type={"h1"} color={"white"} label={label} />
    </StyledChoiceButton>
  );
};

ChoiceButton.propTypes = {
  // type: PropTypes.oneOf(["sara", "mara"]),
  $backgroundColor: PropTypes.oneOf(["blue", "red"]),
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  onClick: PropTypes.func,
};

ChoiceButton.defaultProps = {
  onClick: undefined,
  label: "에게 물어봐",
};
