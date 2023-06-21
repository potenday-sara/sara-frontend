import React, { Suspense, lazy } from "react";
import { styled } from "styled-components";
import OtherQuestions from "../components/OtherQuestions";
import Trends from "../components/Trend";
import { useQuery } from "react-query";
import { getQuestions } from "../../../apis";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

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
      {articleLoading ? null : (
        <OtherQuestions $type={$type} articles={articleDatas} />
      )}
      <Trends type={$type} datas={datas} />
    </StyledSectionLayout>
  );
}

SectionLayout.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};
