import React from "react";

import { styled } from "styled-components";

import { ReactComponent as MainLogo } from "../images/logos/miainlogo.svg";
import BubbleChartLayout from "../componentes/BubbleChart/BubbleChartLayout";
import ChatBox from "../componentes/ChatBox/ChatBox";
import Section from "../componentes/Sections/Section";
import { useLocation } from "react-router-dom";
import Navbar from "../componentes/Navbar/Navbar";
import QuestionLayout from "../layout/QuestionLayout";

const StyledQuestionPage = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  background-color: ${(props) =>
    props.$pathname === "/sara" ? "#edf5fd" : "#F4F4F4"};

  /* align-items: center; */
  /* justify-content: center; */
  .chart {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
export default function QuestionPage() {
  // const [hiInput, setHiInput] = useInput("");
  // const [areaInput, setAreaInput] = useInput("");
  const { pathname } = useLocation();

  return (
    <>
      <Navbar $type={pathname} />
      <StyledQuestionPage $pathname={pathname} $type={pathname}>
        <QuestionLayout $type={pathname.slice(1)} />
      </StyledQuestionPage>
    </>
  );
}

// <div className="chart">
//   <BubbleChartLayout type={pathname}></BubbleChartLayout>
// </div>
// <div className="chat-box">
//   <ChatBox $type={pathname}></ChatBox>
// </div>
// <section className="section">
//   <Section $type={pathname} />
// </section>
// {/* <img src={mainLogo} alt="" /> */}
