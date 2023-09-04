import React from "react";
import { css, styled } from "styled-components";
import PropTypes from "prop-types";
import { BasicText, MainText } from "../Text/Text";
import { getColorCode } from "../../Styles";

const getBasicInputStyles = () => {
  return css`
    font-weight: 400;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 14px;
    border: 1px solid #CCC;
    background: ${() => getColorCode('white')};
    border-radius: 16px;

    &::placeholder {
      color: rgba(204, 204, 204, 1);
      font-family: Pretendard;
      font-size: 13px;
      font-weight: 400;
    }

    &:focus {
      outline: none;
      border: 3px solid ${({ $color }) => getColorCode($color)};
    }
  `;
};
const getTextInputSizeStyles = () => {
  return css`
    width: 320px;
    height: 56px;
  `
};

const getTextAreaInputSizeStyles = () => {
  return css`
    width: 320px;
    height: 74px;
    padding: 18px 16px;
  `
};

const StyledInputBox = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const StyledTextInput = styled.input`
  text-align: center;
  ${() => getBasicInputStyles()}
  ${(props) => getTextInputSizeStyles(props)}
`;

const StyledTextAreaInput = styled.textarea`
  resize: none;
  text-align: center;
  ${() => getBasicInputStyles()}
  ${() => getTextAreaInputSizeStyles()}

`;
export const TextInput = ({ type, placeholder, label, id, ...rest }) => (
  <StyledInputBox>
    <BasicText as="label" label={label} htmlFor={id} $size="sm" $bold="lg" $color="black" />
    {
      type === 'input' ?
        <StyledTextInput placeholder={placeholder} type="text" {...rest} id={id} /> :
        <StyledTextAreaInput placeholder={placeholder} {...rest} id={id} />

    }
  </StyledInputBox>
);

TextInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  $color: PropTypes.string,
  type: PropTypes.oneOf(['input', 'textarea']).isRequired
};

TextInput.defaultProps = {
  value: "",
  size: "small",
  onChange: undefined,
  placeholder: "",
};
