import React from "react";
import { ReactComponent as CharacterSara } from '../../../images/logos/sara.svg'
import { ReactComponent as CharacterMara } from '../../../images/logos/mara.svg'
import { css, styled } from "styled-components";

/**
 * $type을 바탕으로 css를 결정하는 함수입니다
 */
const getCharacterLogoCss = ($type) => {
  if ($type === 'sara') {
    return css`
      width: 214px;
      height: 180px;
    `
  }

  else {
    return css`
      width: 180px;
      height: 180px;
    `
  }
}


const StyledCharacterLogo = styled.div`
margin-top: 30px;
  ${({ $type }) => getCharacterLogoCss($type)}
`

/**
 * $type (sara, mara) 값에 따라 캐릭터로고를 리턴하는 함수입니다
 */
export default function CharacterLogo({ $type, ...rest }) {
  return (
    <StyledCharacterLogo $type={$type}>
      {$type === 'sara' ? <CharacterSara /> : <CharacterMara />}
    </StyledCharacterLogo>

  )
}