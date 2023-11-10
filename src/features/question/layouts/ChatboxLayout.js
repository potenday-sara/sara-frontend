import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import SaraMaraForm from "../components/SaraMaraForm";
import Spinner from "../components/Spinner";
import Answer from "../components/Answer";
import PropTypes from "prop-types";
import { postQuestion } from "../apis/postQuestion";
import TextLogo from "../../../components/Logo/MainTextLogo";
import Character from "../../../components/Logo/Character";
import { getColorCode } from "../../../Styles";
import ChatTag from "../components/ChatTag";
import { BasicText } from "../../../components/Text/Text";

const StyledChatboxLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  gap: 16px;
  margin: auto;
  padding: 64px 24px;
  margin-bottom: 50px;
  width: 508px;
  max-width: 540px;
  background-color: ${() => getColorCode("white")};
  border-radius: 24px;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);

  .texts {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 4px;
    align-items: center;
    flex-direction: column;
    padding-bottom: 12px;
    border-bottom: 1px solid #ddd;
  }
`;

export default function ChatboxLayout({ $type }) {
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
  }, [Mutate.isSuccess]);

  return (
    <StyledChatboxLayout $type>
      <TextLogo $type={$type} stage={Mutate.isSuccess ? "answer" : "answer"} />
      {Mutate.isSuccess === true ? (
        <div className="texts">
          <BasicText label={"나의 질문"} $size={"xs"} $customColor={"#666"} />
          <BasicText
            label={"에어팟 프로"}
            $color={$type === "sara" ? "blue" : "red"}
            $bold={"lg"}
          />
        </div>
      ) : null}
      {Mutate.isIdle === true || Mutate.isSuccess === true ? (
        <Character
          $type={$type}
          stage={Mutate.isSuccess ? "answer" : "answer"}
        />
      ) : null}
      <ChatTag />
      {Mutate.isIdle === true ? (
        <SaraMaraForm
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
    </StyledChatboxLayout>
  );
}

ChatboxLayout.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};
