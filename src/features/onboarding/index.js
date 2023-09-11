
import { styled } from "styled-components";
import RealtimeKeywords from "./components/RealtimeTrends";
import OnboardingLayout from "./layouts/OnboardingLayout";

const StyledOnboarding = styled.div`
width: 100%;
overflow: hidden;
min-height : 832px;
  @media screen and (${props => props.theme.desktopLarge}) {
    
  } 
`



export default function Onboarding() {
  return (
    <StyledOnboarding>
      <OnboardingLayout />
    </StyledOnboarding>
  )
} 