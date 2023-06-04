import React, { useEffect } from "react";

import { styled } from "styled-components";
import GridLayout from "../componentes/GridLayout/GridLayout";
// import SelectLayout from "../componentes/GridLayout/GridLayout";

import { ReactComponent as MainLogo } from "../images/logos/miainlogo.svg";
import { useQuery } from "react-query";
import { getRangking } from "../apis";

const temp = [
  "에어팟 맥스",
  "나이키 에어포스 미드 07`",
  "삼성 더 프리스타일",
  // "삼성 더 프리스타일",
];
const SelectLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 64px);
  min-width: 1200px;
  .sara {
    left: 0%;
    position: absolute;
    width: 50%;
    height: 100%;
    background: rgba(0, 115, 221, 0.07);
  }

  .mara {
    position: absolute;
    width: 50%;
    height: 100%;
    left: 50%;
    /* background: #f4f4f4; */
    background-color: orange;
  }

  .grid {
    width: 90%;
    max-width: 2000px;
    min-width: 1200px;
    aspect-ratio: 2.5 / 1;
    /* height: 500px; */
    gap: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    margin-top: 100px;
  }
`;
export default function MainPage() {
  return (
    <SelectLayout className="check">
      <div className="sara"></div>
      <div className="mara"></div>
      <div className="grid">
        <GridLayout $type={"sara"} />
        <GridLayout $type={"mara"} />
      </div>
    </SelectLayout>
  );
}
