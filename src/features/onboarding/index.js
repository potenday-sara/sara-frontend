
import { styled } from "styled-components";
import RealtimeKeywords from "./components/RealtimeTrends";
import OnboardingLayout from "./layouts/OnboardingLayout";

const StyledOnboarding = styled.div`
width: 100%;
height: 100vh;
min-height : 832px;
`

export default function Onboarding() {
  return (
    <StyledOnboarding>
      <OnboardingLayout>

      </OnboardingLayout>
    </StyledOnboarding>
  )
} 