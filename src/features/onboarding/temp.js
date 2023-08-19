import React from "react";
import { BasicText } from "../../components/Text/Text";
import TitleLines from './components/TitleLines'
import TitleBubble from "./components/TitleBubble";
import { styled } from "styled-components";
import RealtimeKeywords from "./components/RealtimeKeywords";

const StyledTemp = styled.div`
background: linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), #EF2B00;
background: linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), #007BED;
width: 500px;
  height: 500px;
`

export default function Temp() {
  return (
    <StyledTemp>
      < RealtimeKeywords
        $type={'mara'}
        data={[
          { object: "비스포크냉장고" },
          { object: "아이폰" },
          { object: "비스포크냉장고" },
          { object: "비스포크냉장고" },
          { object: "비스포크냉장고" },
          { object: "비스포크냉장고" },
          { object: "비스포크냉장고" },
        ]} />
    </StyledTemp>)
} 