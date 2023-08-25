import React from "react";
import { styled } from "styled-components";
import OnboardingSectionLayout from "./OnboardingSectionLayout";

const StyledOnboardingLayout = styled.div`
display: flex;
  width: 100%;
  height: 100%;
`


/**
 * 온보딩페에지의 기본 레이아웃입니다.
 */
export default function OnboardingLayout() {
  return (
    <StyledOnboardingLayout>
      <OnboardingSectionLayout $type='sara' >

      </OnboardingSectionLayout>

      <OnboardingSectionLayout $type='mara'>

      </OnboardingSectionLayout>
    </StyledOnboardingLayout>
  )
}





