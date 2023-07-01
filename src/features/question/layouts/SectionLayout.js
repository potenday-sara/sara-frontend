import React, { Suspense, lazy } from "react";
import { styled } from "styled-components";
import OtherQuestions from "../components/OtherQuestions";
import Trends from "../components/Trend";
import { useQuery } from "react-query";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { getQuestions } from "../apis/getQuestions";

const StyledSectionLayout = styled.div`
  width: 100%;
  margin-right: auto;
  max-width: 480px;
  height: 700px;

  display: grid;
  grid-template-rows: 2.5fr auto;
  gap: 60px;
  grid-template-columns: 1fr;
`;

const datas = [
  {
    label: "에어팟 맥스",
    url: "https://www.coupang.com/vp/products/4584075863?itemId=5623805740",
  },
  {
    label: "캡슐머신",
    url: "https://www.coupang.com/vp/products/5498706730?itemId=3514317960",
  },
  {
    label: "크록스 샌들",
    url: "https://www.coupang.com/vp/products/5772504897?itemId=9811525460",
  },
  {
    label: "무선 핸디 청소기",
    url: "https://www.coupang.com/vp/products/5234137115?itemId=7375667237",
  },
  {
    label: "2L 생수 *6",
    url: "https://www.coupang.com/vp/products/6830320694?itemId=16212148847",
  },
  {
    label: "미니 탁상용 선풍기",
    url: "https://www.coupang.com/vp/products/1248989722?itemId=2247394025",
  },
  {
    label: "3단 트롤리",
    url: "https://www.coupang.com/vp/products/1648550719?itemId=2809041456",
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
