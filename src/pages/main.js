import React from "react";

import { styled } from "styled-components";
import GridLayout from "../componentes/GridLayout/GridLayout";
// import SelectLayout from "../componentes/GridLayout/GridLayout";

import { ReactComponent as MainLogo } from "../images/logos/miainlogo.svg";

const temp = [
  "에어팟 맥스",
  "나이키 에어포스 미드 07`",
  "삼성 더 프리스타일",
  // "삼성 더 프리스타일",
];
const SelectLayout = styled.div`
  display: flex;
  position: relative;
  width: auto;
  overflow: auto;

  height: 100vh;
  /* align-items: center; */
  /* justify-content: center; */

  .select {
    display: flex;
    align-items: flex-end;
    width: 50%;
    min-width: 700px;
    padding: 20px;
    height: 100%;
  }
  .sara {
    background: rgba(0, 115, 221, 0.07);
    justify-content: end;
  }

  .mara {
    background: #f4f4f4;
  }
`;
export default function MainPage() {
  // const [hiInput, setHiInput] = useInput("");
  // const [areaInput, setAreaInput] = useInput("");
  return (
    <SelectLayout className="check">
      {/* <img src={mainLogo} alt="" /> */}
      <div className="sara select">
        <GridLayout $type={"sara"} texts={temp} />
      </div>
      <div className="mara select">
        <GridLayout $type={"mara"} texts={temp} />
      </div>
    </SelectLayout>
  );
}
