import React from "react";
import QuestionLayout from "../layouts/QuestionLayout";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import MARA from "./page.jpg";

const StyledQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: calc(100vh - 64px);
  background-image: url(${(props) =>
      props.$pathname === "sara" ? "#edf5fd" : MARA});
  background-size: cover;
  height: 100vh;
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
