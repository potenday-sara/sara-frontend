import React from "react";
import { css, styled } from "styled-components";
import PropTypes from "prop-types";
import { MainText } from "../Text/Text";

const getBasicInputStyles = () => {
  return css`
    font-family: "Pretendard";
    font-weight: 400;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 22px;
    margin-top: 10px;
    border: none;
    background: #f4f4f4;
    border-radius: 16px;

    &:focus {
      outline: none;
    }
  `;
};
const getTextInputSizeStyles = ({ size }) => {
  if (size === "small") {
    return css`
      width: 100%;
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
      width: 100%;
      height: 100px;
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

const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledTextInput = styled.input`
  text-align: center;
  margin-top: 5px;
  ${() => getBasicInputStyles()}
  ${(props) => getTextInputSizeStyles(props)}
`;

const StyledTextAreaInput = styled.textarea`
  resize: none;
  ${() => getBasicInputStyles()}
  ${(props) => getTextAreaInputSizeStyles(props)}
  height: calc(30px + 10vh);
`;
export const TextInput = ({ placeholder, label, id, ...rest }) => (
  <StyledInputBox>
    <MainText as="label" type={"h2"} label={label} htmlFor={id} color="black" />
    <StyledTextInput placeholder={placeholder} type="text" {...rest} id={id} />
  </StyledInputBox>
);

TextInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium"]).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

TextInput.defaultProps = {
  value: "",
  size: "small",
  onChange: undefined,
  placeholder: "",
};

export const TextareaInput = ({ placeholder, label, id, ...rest }) => (
  <StyledInputBox>
    <MainText as="label" type={"h2"} label={label} htmlFor={id} color="black" />
    <StyledTextAreaInput placeholder={placeholder} {...rest} id={id} />
  </StyledInputBox>
);

TextareaInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium"]).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

TextareaInput.defaultProps = {
  size: "small",
  value: "",
  onChange: undefined,
  id: PropTypes.string,
};
