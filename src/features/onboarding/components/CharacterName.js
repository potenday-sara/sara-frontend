import React from "react";
import { ReactComponent as NameSara } from '../assets/SaraNameText.svg'
import { ReactComponent as NameMara } from '../assets/MaraNameText.svg'
import { css, styled } from "styled-components";
import { getSelectedCss } from "../styles/getSelectedStyle";

/**
 * $type을 바탕으로 css를 결정하는 함수입니다
 */
const getCharacterNameCss = ($type) => {
  if ($type === 'sara') {
    return css`
      width: 97px;
      height: 48px;
    `
  }

  else {
    return css`
      width: 107px;
      height: 40px;
    `
  }
}

const StyledCharacterName = styled.div`
  margin-top: 40px;
  ${({ $type }) => getCharacterNameCss($type)}
`

/**
 * $type (sara, mara) 값에 따라 캐릭터로고를 리턴하는 함수입니다
 */
export default function CharacterName({ $type, ...rest }) {
  return (
    <StyledCharacterName $type={$type}>
      {$type === 'sara' ? <NameSara /> : <NameMara />}
    </StyledCharacterName>

  )
}