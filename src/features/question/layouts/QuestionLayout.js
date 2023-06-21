import React from "react";
import { styled } from "styled-components";
import BubbleChartLayout from "./BubbleChartLayout";
import { useQuery } from "react-query";
import { getRangking } from "../../../apis";
import { useEffect } from "react";
import { useState } from "react";
import ChatBoxLayout from "./ChatboxLayout";
import SectionLayout from "./SectionLayout";
import { getChartColor } from "../utils/getStyles";

const StyledQuestionLayout = styled.main`
  position: relative;
  width: 90%;
  gap: 50px;
  min-width: 1200px;
  max-width: 1920px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 1fr 450px 1fr;
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
      <BubbleChartLayout $type={$type} data={BubbleData} />
      <ChatBoxLayout $type={$type} />
      <SectionLayout $type={$type} />
    </StyledQuestionLayout>
  );
}
