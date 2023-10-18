import { styled } from "styled-components";
import RealtimeKeywords from "./components/RealtimeTrends";
import OnboardingLayout from "./layouts/OnboardingLayout";

const StyledOnboarding = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export default function Onboarding() {
  return (
    <StyledOnboarding>
      <OnboardingLayout />
    </StyledOnboarding>
  );
}
