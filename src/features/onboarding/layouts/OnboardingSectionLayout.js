import React from "react";
import { css, styled } from "styled-components";
import PropTypes from "prop-types";

import TitleBubble from "../components/TitleBubble";
import CharacterLogo from "../components/CharacterLogo";
import CharacterName from "../components/CharacterName";

/**
 * $type(sara, mara) 값을 받아 배경화면 css를 리턴하는 함수입니다
 */
const getSectionBackgroundCss = ($type) => {
  if ($type === 'sara') return css`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), #007BED;
  `
  else return css`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), #EF2B00;
  
  `
}


const StyledOnboardingSectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 512px;
  height: 100%;
  ${({ $type }) => getSectionBackgroundCss($type)}
  padding: 101px 85px 140px;
`


/**
 * Onboarding 페이지의 세션 컴포넌트입니다
 * type ('sara', 'mara') 중 하나의 값을 받아 각 테마의 맞는 컴포넌트를 리턴합니다.
 */
export default function OnboardingSectionLayout({ $type, ...rest }) {
  return (
    <StyledOnboardingSectionLayout {...rest} $type={$type}>
      <TitleBubble $type={$type}></TitleBubble>
      <CharacterLogo $type={$type} />
      <CharacterName $type={$type} />
    </StyledOnboardingSectionLayout>
  )
}


OnboardingSectionLayout.propTypes = {
  $type: PropTypes.oneOf(['sara', 'mara']).isRequired,
}

OnboardingSectionLayout.defaultProps = {
  $type: 'sara',
}