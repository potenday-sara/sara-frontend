import React from "react";
import { styled } from "styled-components";
import BubbleChartLayout from "../componentes/BubbleChart/BubbleChartLayout";
import { useQuery } from "react-query";
import { getRangking } from "../apis";
import { useEffect } from "react";
import { useState } from "react";
import ChatBox from "../componentes/ChatBox/ChatBox";

const StyledQuestionLayout = styled.main`
  position: relative;
  width: 90%;
  align-items: center;
  min-width: 1200px;
  height: 100%;
  gap: 20px;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
`;

const getColor = (value, type) => {
  if (type === "sara") {
    if (value >= 5) return "#007BED";
    else if (value >= 3) return "#4D9DE6";
    else return "#A2CBF1";
  }

  if (type === "mara") {
    if (value >= 5) return "#EF2B00";
    else if (value >= 3) return "#F46242";
    else return "#F5907A";
  }
};

export default function QuestionLayout({ $type }) {
  const [BubbleData, setBubbleData] = useState();
  const { isLoading: questionLoading, data: questionData } = useQuery(
    [$type, "questions"],
    () => getRangking($type.slice(1))
  );

  useEffect(() => {
    const newData = questionData?.data?.data?.slice(0, 10).map((i) => {
      return {
        label: i.object,
        value: parseInt(i.total, $type),
        color: getColor(i.total, $type),
      };
    });
    setBubbleData(newData);
  }, [questionData]);
  return (
    <StyledQuestionLayout>
      <BubbleChartLayout $type={$type} data={BubbleData} />
      <ChatBox $type={$type.slice(1)} />
    </StyledQuestionLayout>
  );
}
