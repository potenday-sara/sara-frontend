import React from "react";
import { styled } from "styled-components";
import { ReactComponent as FotterLogo } from "../../images/logos/footerlogo.svg";

const StyledFooter = styled.div`
  width: 100%;
  background-color: transparent;
  height: 64px;
  left: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  padding: 0px 40px;
  gap: 30px;

  p {
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
    color: #0000004d;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FotterLogo />

      <p>Copyright 2023 SARA. All rights reserved</p>
      <p>Team SARA Contact. sara.potenday@gmail.com</p>
    </StyledFooter>
  );
}
