import React from "react";

import { styled } from "styled-components";

import { ReactComponent as MainLogo } from "../images/logos/miainlogo.svg";
import BubbleChartLayout from "../componentes/BubbleChart/BubbleChartLayout";
import ChatBox from "../componentes/ChatBox/ChatBox";
import Section from "../componentes/Sections/Section";
import { useLocation } from "react-router-dom";
import Navbar from "../componentes/Navbar/Navbar";

const StyledQuestionPage = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr 1.1fr;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 100vh;
  min-width: 1400px;
  /* min-height: 500px; */
  position: relative;
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
  .chat-box {
    /* max-width: 650px; */

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    ::-webkit-scrollbar {
      width: 20px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.$type === "/sara" ? "#b4d9fc" : "#F9B4A5"};
      border-radius: 32px;
      background-clip: padding-box;
      border: 7px solid transparent;
    }
    ::-webkit-scrollbar-track {
      /* border: 7px solid #fff; */
      background: transparent;
    }
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

  console.log(pathname);
  return (
    <>
      <Navbar type={pathname} />
      <StyledQuestionPage $pathname={pathname} $type={pathname}>
        <div className="chart">
          <BubbleChartLayout type={pathname}></BubbleChartLayout>
        </div>
        <div className="chat-box">
          <ChatBox type={pathname}></ChatBox>
        </div>
        <section className="section">
          <Section type={pathname} />
        </section>
        {/* <img src={mainLogo} alt="" /> */}
      </StyledQuestionPage>
    </>
  );
}
