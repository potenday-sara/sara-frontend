import React from "react";
import { styled } from "styled-components";
import { MainText } from "../../items/Text/Text";
import { ReactComponent as MainLogo } from "../../images/logos/miainlogo.svg";
import { TextInput, TextareaInput } from "../../items/Input/Input";
import { useInput } from "../../hooks/hooks";
import { BasicButton } from "../../items/Button/MainButton";
import { postQuestion } from "../../apis";
import { useMutation } from "react-query";

import Swal from "sweetalert2";


const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(220px + 10vh);

  button {
    box-shadow: 0px 5px 0px 0px

      ${(props) => (props.$type === "/mara" ? "#BD2200" : "#0158a8")};
    transition: all 0.2s;
    &:hover {
      box-shadow: 0px 0px 0px 0px
        ${(props) => (props.$type === "/sara" ? "#BD2200" : "#0158a8")};

      margin-top: 7px;
      margin-bottom: 5px;
    }
  }
`;

export default function Question({
  item,
  explanation,

  $type,

  setItem,
  setExplanation,
  mutate,
}) {

  const submit = () => {
    if (item && explanation) {
      mutate();
    } else {
      Swal.fire({
        icon: "error",
        text: "무엇을 고민하는지 적어주세요!",
      });
    }
  };
  return (
    <StyledQuestion $type={$type}>

      {/* <MainLogo className="main-logo" /> */}
      <TextInput
        label={"어떤 걸 사고싶어?"}
        placeholder={"에어팟프로"}
        id="제품"
        size={"small"}
        value={item}
        onChange={setItem}
      />
      <TextareaInput
        label={"왜 고민하고 있어?"}
        placeholder={
          "벌써 세 번 잃어버렸는데,이번에 사면 또 잃어버릴 것 같아서 못 사겠어..."
        }
        id="설명"
        size={"small"}
        value={explanation}
        onChange={setExplanation}
      />
      <BasicButton
        size={"small"}
        label={"사야할까?"}
        color={"white"}

        onClick={submit}
        $backgroundColor={$type === "/sara" ? "blue" : "red"}

      />
    </StyledQuestion>
  );
}
