import React from "react";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { Button } from "@mui/base";
import AuthButton from "../Button/AuthButton";


const StyledNavbar = styled.div`
  position: absolute;
  top: 60px;
  padding-right: 60px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

`;



export default function Navbar() {

  return (
    <StyledNavbar>
      <AuthButton $title={'준비중인 기능입니다'} $theme="blue" label="로그인" />
      <AuthButton $title={'준비중인 기능입니다'} $theme="white" label="회원가입" />
    </StyledNavbar>
  );
}
