import React from "react";
import { TextareaInput, TextInput } from "../items/Input/Input";
import { useInput } from "../hooks/hooks";
import { BasicButton, ChoiceButton } from "../items/Button/MainButton";
import { MainText } from "../items/Text/Text";
import saralogo1 from "../images/logos/saralogo1.svg";

export default function MainPage() {
  const [hiInput, setHiInput] = useInput("");
  const [areaInput, setAreaInput] = useInput("");
  return (
    <div>
      <p>안녕</p>
      <TextInput size="small" value={hiInput} onChange={setHiInput} />
      <br />
      <TextareaInput size="small" value={areaInput} onChange={setAreaInput} />
      <br />
      <ChoiceButton
        size="large"
        type={"sara"}
        $backgroundColor="blue"
        label={`에게 물어보기`}
      />
      <ChoiceButton
        size="large"
        type={"mara"}
        $backgroundColor="red"
        label={`에게 물어보기`}
      />
      <BasicButton label={"나이키 덩크 레트로 흰검"} />
    </div>
  );
}
