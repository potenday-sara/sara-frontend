import React from "react";
import { TextareaInput, TextInput } from "../items/Input/Input";
import { useInput } from "../hooks/hooks";
import { MainButton } from "../items/Button/MainButton";
import { MainText } from "../items/Text/Text";

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
      <MainButton color="red" label={"에게 물어보기"} />

      <MainText type={"h1"} color={"red"} label={"폰트확인"} />
    </div>
  );
}
