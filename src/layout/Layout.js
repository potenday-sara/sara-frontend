import React from "react";
import { styled } from "styled-components";
import Navbar from "../componentes/Navbar/Navbar";

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f6fa;
`;

export default function Layout() {
  return (
    <StyledLayout>
      <Navbar />
    </StyledLayout>
  );
}
