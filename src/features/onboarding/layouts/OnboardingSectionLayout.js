import React, { useState } from "react";
import { css, styled } from "styled-components";
import PropTypes from "prop-types";

import TitleBubble from "../components/TitleBubble";
import CharacterLogo from "../components/CharacterLogo";
import CharacterName from "../components/CharacterName";
import TextLabel from "../../../components/TextLabel/TextLabel";
import { useNavigate } from "react-router";

/**
 * $type(sara, mara) 값을 받아 css를 리턴하는 함수입니다
 */
const getSectionCssByType = ($type) => {
  if ($type === 'sara') return css`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), #007BED;
    .section-box {
      margin: auto 0px auto auto;
    }

  `
  else return css`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), #EF2B00;
    .section-box {
      margin: auto auto auto 0px;
    }
  `
}


const StyledOnboardingSectionLayout = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${({ $type }) => getSectionCssByType($type)}
  padding: 101px 85px 140px;
  .section-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const textLabelStyles = css`
  display: flex;
  flex-direction: row;
  width: 256px;
  padding: 24px;
  margin-top: 40px;
  gap: 8px;
`



/**
 * Onboarding 페이지의 세션 컴포넌트입니다
 * type ('sara', 'mara') 중 하나의 값을 받아 각 테마의 맞는 컴포넌트를 리턴합니다.
 */
export default function OnboardingSectionLayout({ $type, isSelected, setSelectedType, ...rest }) {
  const navigate = useNavigate()
  return (
    <StyledOnboardingSectionLayout {...rest} $type={$type}>
      <div className="section-box">
        <TitleBubble $type={$type} />
        <CharacterLogo $type={$type} $isSelected={$type === isSelected} />
        <CharacterName $type={$type} />
        <TextLabel $isBtn $bgColor={"white"} $textLabelStyles={textLabelStyles} $type={$type} $color={$type === 'sara' ? 'blue' : 'red'} $size={'md'} label={'에게 물어보기'} textLogo={true} onClick=
          {() => navigate(`/question/${$type}`)} />
      </div>
    </StyledOnboardingSectionLayout>
  )
}


OnboardingSectionLayout.propTypes = {
  $type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  setIsSelected: PropTypes.func,
}

OnboardingSectionLayout.defaultProps = {
  $type: 'sara',
}