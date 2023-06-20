import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useMutation } from "react-query";

import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/hooks";
import { postQuestion } from "../apis";
import Character from "../items/Logo/Character";
import TextLogo from "../items/Logo/TextLogo";
import Question from "../componentes/ChatBox/Qustion";
import Spinner from "../items/Spinner/Spinner";
import Answer from "../componentes/ChatBox/Answer";

const StyledChatBoxLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 180px auto;
  height: auto;
  gap: 40px;
  margin: auto;
  padding: 40px 20px;
  width: 100%;
  max-width: 540px;
  background-color: #fff;
  border-radius: 32px;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
`;

export default function ChatBoxLayout({ $type }) {
  const [data, setData] = useState({});
  const [item, setItem] = useInput();
  const [explanation, setExplanation] = useInput();
  const Mutate = useMutation(() => postQuestion(item, explanation, $type));

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
    <StyledChatBoxLayout $type>
      <TextLogo $type={$type} />
      <Character $type={$type} />
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
    </StyledChatBoxLayout>
  );
}

{
  /* <div className="main-logo">
{$type === "sara" ? <MainTextLogo /> : <MainMaraTextLogo />}
</div>
<div className="character-logo-box">
{$type === "sara" ? (
  <MainSaraLogo viewBox="0 0 210 180" />
) : (
  <MainMaraLogo viewBox="-5 0 195 180" />
)}
</div>
<div className="contents">


{/* <Spinner $type={$type} /> */
}
{
  /* <Answer $type={$type} /> */
}
{
  /*</div> */
}
