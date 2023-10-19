import React from "react";
import QuestionLayout from "../layouts/QuestionLayout";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import SARA from "./saraquestion.jpg";

const StyledQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 1130px;
  // height: auto;
  // min-height: calc(100vh - 64px);
  background-image: url(${(props) =>
      props.$pathname === "sara" ? SARA : SARA});
  background-size: cover;
  
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

Question.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};
