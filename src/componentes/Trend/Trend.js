import React from "react";
import { styled } from "styled-components";
import { MainText } from "../../items/Text/Text";
import { TrendButton } from "../../items/Button/MainButton";

const StyledTredns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  .trends {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    margin-top: 10px;
  }
`;
const datas = [
  {
    label: "🎧 에어팟 맥스",
  },
  {
    label: "📺 삼성 비스포크 냉장고",
  },
  {
    label: "🛋️ 이케아 비스뵈르",
  },
  {
    label: "🥤 밀키스 제로",
  },
  {
    label: "🧸 서핑 춘식이 인형",
  },
  {
    label: "👞 헌터 레인부츠",
  },
];

export default function Trends({ type }) {
  return (
    <StyledTredns>
      <MainText label={"요즘 트렌드"} type={"h2"} color="black" />
      <div className="trends">
        {datas.map((i, idx) => {
          return (
            <TrendButton
              key={`trends${idx}`}
              label={i.label}
              color={type === "/sara" ? "blue" : "red"}
            />
          );
        })}
      </div>
    </StyledTredns>
  );
}
