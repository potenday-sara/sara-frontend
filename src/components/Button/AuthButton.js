import { Tooltip } from "@mui/material";
import React from "react";
import { styled, css } from "styled-components";
import { getColorCode } from "../../Styles";
import { BasicText } from "../Text/Text";
import PropTypes from "prop-types";


const getAuthButtonStyle = ($theme) => {
  if ($theme === 'blue') return css`
    background-color: ${() => getColorCode('blue')};
    `
  else return css`
    background-color: ${() => getColorCode('white')};
  `
}


const StyledAuthButton = styled.button`
  color: red;
  padding: 12px;
  border-radius: 16px;
  border: 0px;
  ${({ $theme }) => getAuthButtonStyle($theme)}
`


/**
 * 로그인 창을 위한 버튼입니다
 * $theme (blue, white)를 바탕으로 버튼 컴포넌트를 반환합니다.
 */
export default function AuthButton({ $title, $theme, label }) {
  return (
    <Tooltip title={<BasicText $color={'white'} $size={'xs'} label={$title} />} arrow >
      <StyledAuthButton $theme={$theme} >
        <BasicText label={label} $color={$theme === 'blue' ? 'white' : 'blue'} $size={'xs'} />
      </StyledAuthButton>
    </Tooltip>
  )
}

AuthButton.propTypes = {
  $title: PropTypes.string.isRequired,
  $theme: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}