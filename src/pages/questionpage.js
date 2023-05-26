import React from "react";

import { styled } from "styled-components";

import { ReactComponent as MainLogo } from "../images/logos/miainlogo.svg";
import BubbleChartLayout from "../componentes/BubbleChart/BubbleChartLayout";
import ChatBox from "../componentes/ChatBox/ChatBox";
import Section from "../componentes/Sections/Section";

const StyledQuestionPage = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr 1.1fr;
  align-items: center;
  gap: 5px;
  width: 100%;
  /* gap: 20px; */
  height: 100vh;
  min-width: 1400px;
  /* min-height: 500px; */
  position: relative;
  background-color: #edf5fd;

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
  return (
    <StyledQuestionPage>
      <div className="chart">
        <BubbleChartLayout></BubbleChartLayout>
      </div>
      <div className="chat-box">
        <ChatBox></ChatBox>
      </div>
      <section className="section">
        <Section />
      </section>
      {/* <img src={mainLogo} alt="" /> */}
    </StyledQuestionPage>
  );
}
