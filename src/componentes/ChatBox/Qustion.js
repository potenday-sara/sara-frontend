import React from "react";
import { styled } from "styled-components";
import { MainText } from "../../items/Text/Text";
import { ReactComponent as MainLogo } from "../../images/logos/miainlogo.svg";
import { TextInput, TextareaInput } from "../../items/Input/Input";
import { useInput } from "../../hooks/hooks";
import { BasicButton } from "../../items/Button/MainButton";

const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function Question() {
  const [item, setItem] = useInput();
  const [explanation, setExplanation] = useInput();
  return (
    <StyledQuestion>
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
        $backgroundColor={"blue"}
      />
    </StyledQuestion>
  );
}
