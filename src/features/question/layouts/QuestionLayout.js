import React from "react";
import { styled } from "styled-components";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { useState } from "react";
import ChatBoxLayout from "./ChatboxLayout";
import SectionLayout from "./SectionLayout";
import TrendItemsLayout from "./TrendItemsLayout";
import { getChartColor } from "../utils/getStyles";
import { getRangking } from "../../main/apis/getRanking";

const StyledQuestionLayout = styled.main`
  position: relative;
  width: 100%;
  gap: 64px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  align-items: center;
`;

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
        color: getChartColor(i.total, $type),
      };
    });
    setBubbleData(newData);
  }, [questionData]);

  return (
    <StyledQuestionLayout>
      <SectionLayout $type={$type} />
      <ChatBoxLayout $type={$type} />
      <TrendItemsLayout $type={$type} />
    </StyledQuestionLayout>
  );
}
