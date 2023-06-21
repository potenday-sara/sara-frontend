import React from "react";
import { useLocation } from "react-router-dom";
import QuestionLayout from "../../../componentes/sara-mara/QuestionLayout";
import Navbar from "../../../componentes/Navbar/Navbar";
import { styled } from "styled-components";
import PropTypes from "prop-types";

const StyledQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: calc(100vh - 64px);
  background-color: ${(props) =>
    props.$pathname === "sara" ? "#edf5fd" : "#F4F4F4"};
`;
export default function Question({ $type }) {
  return (
    <>
      <StyledQuestion $pathname={$type} $type={$type}>
        <QuestionLayout $type={$type} />
      </StyledQuestion>
    </>
  );
}
