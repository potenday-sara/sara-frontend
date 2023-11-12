import { styled } from "styled-components";
import OnboardingLayout from "./layouts/OnboardingLayout";

const StyledOnboarding = styled.div`
  width: 100%;
  height: auto;
  /* overflow: hidden; */
  /* height: auto; */
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
