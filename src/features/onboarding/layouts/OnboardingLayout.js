import React, { useState } from "react";
import { styled } from "styled-components";
import OnboardingSectionLayout from "./OnboardingSectionLayout";
import OnboardingArticleLayout from "./OnboardingArticleLayout";

const StyledOnboardingLayout = styled.div`
  display: grid;
  min-height: calc(100vh - 64px);
  grid-template-columns: minmax(500px, 1fr) 200px minmax(500px, 1fr);
  grid-template-rows: 1fr;
  width: 100%;
  @media screen and (${(props) => props.theme.desktopLarge}) {
    grid-template-columns: minmax(840px, 1fr) 240px minmax(840px, 1fr);
  }
`;

/**
 * 온보딩페에지의 기본 레이아웃입니다.
 */
export default function OnboardingLayout() {
  const [isSelected, setIsSelected] = useState("sara");
  const setSelectedType = ($type) => {
    setIsSelected($type);
  };
  return (
    <StyledOnboardingLayout>
      <OnboardingSectionLayout
        $type="sara"
        isSelected={isSelected}
        setSelectedType={setSelectedType}
      />
      <OnboardingArticleLayout
        $type={isSelected}
        setSelectedType={setSelectedType}
      />
      <OnboardingSectionLayout
        $type="mara"
        isSelected={isSelected}
        setSelectedType={setSelectedType}
      />
    </StyledOnboardingLayout>
  );
}
