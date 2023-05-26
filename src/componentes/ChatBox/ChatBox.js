import React from "react";
import { styled } from "styled-components";
import { MainText } from "../../items/Text/Text";
import { ReactComponent as MainTextLogo } from "../../images/logos/miainlogo.svg";
import { ReactComponent as MainSaraLogo } from "../../images/logos/sara.svg";
import { ReactComponent as MainMaraLogo } from "../../images/logos/mara.svg";
import Question from "./Qustion";
import Section from "../Sections/Section";

const StyledChatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 20px;
  min-width: 400px;
  max-width: 650px;
  /* background-color: red; */
  /* padding: 0px 40px; */
  gap: 20px;
  width: 100%;
  height: 80%;

  /* max-height: 700px; */
  /* aspect-ratio: 1 / 1.2; */
  max-height: 900px;
  background: #ffffff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  border-radius: 32px;

  .main-logo {
    display: flex;
    justify-content: center;
    /* overflow: hidden; */
    height: calc(5% + 2vw);
    max-height: 100px;
    svg {
      width: 100%;
      height: 100%;
    }
    /* aspect-ratio: 2 / 1.5; */
  }
  .character-logo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(15% + 3vw);

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .contents {
    /* height: 50%; */
    width: 100%;
    max-width: 500px;
  }
  /* min-width: 560px; */
  /* background-color: red; */
`;

export default function ChatBox() {
  return (
    <StyledChatBox>
      <div className="main-logo">
        <MainTextLogo />
      </div>
      <div className="character-logo-box">
        <MainSaraLogo viewBox="0 0 210 180" />
        {/* <MainMaraLogo /> */}
      </div>
      <div className="contents">
        <Question />
      </div>
    </StyledChatBox>
  );
}
