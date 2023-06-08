import React from "react";
import { styled } from "styled-components";
import Articles from "../../componentes/Articles";
import Trends from "../../componentes/Trend/Trend";
import { useQuery } from "react-query";
import { getQuestions } from "../../apis";
import { useState } from "react";
import { useEffect } from "react";

const StyledSectionLayout = styled.div`
  width: 100%;
  margin: auto;
  max-width: 480px;
  height: 700px;

  display: grid;
  grid-template-rows: 2.5fr auto;
  gap: 60px;
  grid-template-columns: 1fr;
`;
export default function SectionLayout({ $type }) {
  const [articleDatas, setArticleDatas] = useState([]);
  const { isLoading: articleLoading, data: articles } = useQuery(
    [$type, "RankQuestions"],
    () => getQuestions($type)
  );
  useEffect(() => {
    setArticleDatas(articles?.data?.data);
  }, [articleLoading, articles]);

  return (
    <StyledSectionLayout>
      <Articles $type={$type} articles={articleDatas} />
      <Trends type={$type} />
    </StyledSectionLayout>
  );
}
