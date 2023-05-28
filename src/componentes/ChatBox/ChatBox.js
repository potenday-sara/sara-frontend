import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { MainText } from "../../items/Text/Text";
import { ReactComponent as MainTextLogo } from "../../images/logos/miainlogo.svg";
import { ReactComponent as MainMaraTextLogo } from "../../images/logos/maratextlogo.svg";
import { ReactComponent as MainSaraLogo } from "../../images/logos/sara.svg";
import { ReactComponent as MainMaraLogo } from "../../images/logos/mara.svg";
import Question from "./Qustion";
import Section from "../Sections/Section";
import Spinner from "../../items/Spinner/Spinner";
import Answer from "./Answer";
import { useMutation } from "react-query";
import { postQuestion } from "../../apis";
import { useInput } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";


const StyledChatBox = styled.div`
  /* overflow-y: scroll; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 20px;
  min-width: 400px;
  max-width: 650px;
  /* background-color: red; */
  /* padding: 0px 40px; */
  /* gap: 20px; */
  width: 100%;
  height: 85%;
  background-color: #fff;
  border-radius: 32px;
  /* max-height: 700px; */
  /* aspect-ratio: 1 / 1.2; */
  max-height: 900px;

  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  /* border-radius: 32px; */
  overflow-y: auto;

  .main-logo {
    display: flex;
    justify-content: center;
    /* overflow: hidden; */
    height: calc(3% + 3vw);
    /* max-height: 100px; */
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
    overflow: hidden;

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


export default function ChatBox({ $type, stage }) {
  const [data, setData] = useState({});
  const [item, setItem] = useInput();
  const [explanation, setExplanation] = useInput();
  const Mutate = useMutation(() =>
    postQuestion(item, explanation, $type.slice(1))
  );

  const navigate = useNavigate();

  const dataResetNaviget = (route) => {
    Mutate.reset();
    setItem();
    setExplanation();
    navigate(route);
  };
  useEffect(() => {
    setData({
      id: Mutate.data?.data.data.id,
      object: Mutate.data?.data.data.object,
      solution: Mutate.data?.data.data.solution,
    });
    console.log(Mutate);
  }, [Mutate.isSuccess]);


  return (
    <StyledChatBox $type>
      <div className="main-logo">
        {$type === "/sara" ? <MainTextLogo /> : <MainMaraTextLogo />}
      </div>
      <div className="character-logo-box">
        {$type === "/sara" ? (
          <MainSaraLogo viewBox="0 0 210 180" />
        ) : (
          <MainMaraLogo viewBox="-5 0 195 180" />
        )}
      </div>
      <div className="contents">

        {Mutate.isIdle === true ? (
          <Question
            $type={$type}
            item={item}
            explanation={explanation}
            mutate={Mutate.mutate}
            setItem={setItem}
            setExplanation={setExplanation}
          />
        ) : Mutate.isSuccess === true ? (
          <Answer $type={$type} data={data} navigate={dataResetNaviget} />

        ) : (
          <Spinner $type={$type} />
        )}

        {/* <Spinner $type={$type} /> */}
        {/* <Answer $type={$type} /> */}

      </div>
    </StyledChatBox>
  );
}
