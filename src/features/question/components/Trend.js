import React from "react";
import { styled } from "styled-components";
import { TrendButton } from "../../../components/Button/MainButton";

const StyledTredns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  .trends {
    margin-top: 10px;
    gap: 5px;
    display: flex;
    position: relative;
    flex-wrap: wrap;
  }
`;

export default function Trends({ type, datas }) {
  return (
    <StyledTredns>
      <h2>요즘 트렌드</h2>
      <div className="trends">
        {datas.map((i, idx) => {
          return (
            <TrendButton
              key={`trends${idx}`}
              label={i.label}
              color={type === "sara" ? "blue" : "red"}
            />
          );
        })}
      </div>
    </StyledTredns>
  );
}
