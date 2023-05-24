import React from "react";
import { TextareaInput, TextInput } from "../items/Input/Input";
import { useInput } from "../hooks/hooks";

export default function MainPage() {
  const [hiInput, setHiInput] = useInput("");
  const [areaInput, setAreaInput] = useInput("");
  return (
    <div>
      <p>안녕</p>
      <TextInput size="small" value={hiInput} onChange={setHiInput} />
      <br />
      <TextareaInput size="small" value={areaInput} onChange={setAreaInput} />
    </div>
  );
}
