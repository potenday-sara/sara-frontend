import React from "react";
import { BasicText } from "../../components/Text/Text";
import TitleLines from './components/TitleLines'
import TitleBubble from "./components/TitleBubble";
import { styled } from "styled-components";

const StyledTemp = styled.div`
background: linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), #EF2B00;
background: linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), #007BED;
width: 500px;
  height: 500px;
`

export default function Temp() {
  return (
    <StyledTemp>
      < TitleBubble $type={'mara'} />
    </StyledTemp>)
} 