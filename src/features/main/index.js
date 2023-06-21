import React from "react";
import { styled } from "styled-components";
import GridLayout from "./layouts/MainLayout";

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
    background: #f4f4f4;
  }

  .grid {
    padding: 0px 10px;
    width: 90%;
    max-width: 2000px;
    min-width: 1200px;
    aspect-ratio: 2.5 / 1;
    gap: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    margin-top: 80px;
  }
`;

export default function Main() {
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
