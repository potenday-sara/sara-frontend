import React from "react";

import { styled } from "styled-components";
import GridLayout from "../componentes/GridLayout/GridLayout";
// import SelectLayout from "../componentes/GridLayout/GridLayout";

const temp = [
  "에어팟 맥스",
  "나이키 에어포스 미드 07`",
  "삼성 더 프리스타일",
  // "삼성 더 프리스타일",
];
const SelectLayout = styled.div`
  display: flex;
  width: 100%;
  // 풋터추가시 calc로 크기 조정
  height: 100vh;

  .select {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    min-width: 700px;
    padding: 20px;
    height: 100%;
    background-color: red;
  }
  .sara {
    justify-content: end;
    background: rgba(0, 115, 221, 0.07);
  }
`;
export default function MainPage() {
  // const [hiInput, setHiInput] = useInput("");
  // const [areaInput, setAreaInput] = useInput("");
  return (
    <SelectLayout>
      <section className="sara select">
        <GridLayout $type={"sara"} texts={temp} />
      </section>
      <section className="mara select">
        <GridLayout $type={"mara"} />
      </section>
    </SelectLayout>
  );
}
