import React from "react";
import { css, styled } from "styled-components";
import PropTypes from "prop-types";

const getBasicInputStyles = () => {
  return css`
    font-weight: 400;
    line-height: 24px;
    border: 0.5px solid #00000026;
    box-shadow: 4px 4px 4px 0px #00000040;
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.15);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: rgba(0, 0, 0, 0.4);
    padding: 10px;

    &:focus {
      outline: none;
    }
  `;
};
const getTextInputSizeStyles = ({ size }) => {
  if (size === "small") {
    return css`
      width: 248px;
      height: 53px;
      font-size: 16px;
    `;
  } else {
    return css`
      width: 500px;
      font-size: 25px;
      height: 70px;
    `;
  }
};

const getTextAreaInputSizeStyles = ({ size }) => {
  if (size === "small") {
    return css`
      width: 413px;
      height: 118px;
      font-size: 16px;
    `;
  } else {
    return css`
      width: 600px;
      height: 800px;
      font-size: 25px;
    `;
  }
};

const StyledTextInput = styled.input`
  text-align: center;
  ${() => getBasicInputStyles()}
  ${(props) => getTextInputSizeStyles(props)}
`;

const StyledTextAreaInput = styled.textarea`
  resize: none;
  ${() => getBasicInputStyles()}
  ${(props) => getTextAreaInputSizeStyles(props)}
`;
export const TextInput = ({ ...rest }) => (
  <StyledTextInput type="text" {...rest} />
);

TextInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium"]).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  value: "",
  size: "small",
  onChange: undefined,
};

export const TextareaInput = ({ ...rest }) => <StyledTextAreaInput {...rest} />;

TextareaInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium"]).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextareaInput.defaultProps = {
  size: "small",
  value: "",
  onChange: undefined,
};
