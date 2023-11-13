import React from 'react';
import { styled } from 'styled-components';
import OnboardingLayout from './layouts/OnboardingLayout';

const StyledOnboarding = styled.div`
  @media screen and (${(props) => props.theme.desktopLarge}) {
  }
`;

export default function Onboarding() {
  return (
    <StyledOnboarding>
      <OnboardingLayout />
    </StyledOnboarding>
  );
}
