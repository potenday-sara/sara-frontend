import { styled } from "styled-components";
import Article from "./Article";
import Image from "../../../images/temp/tempImage.jpg";
// import Mara1 from "../../assets/images/mara1.jpg";
// import Mara2 from "../../assets/images/mara2.jpg";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const StyledArticles = styled.article`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  gap: 20px;
  grid-auto-rows: auto;
  grid-auto-flow: row;
`;

const saraTempDatas = [
  {
    title: 'MZ세대를 사로잡는 소비 트렌드, "MZ세대는 이렇게 소비한다!"',
    contents:
      "정치적, 사회적 신념 등을 소비행위를 통해 적극적으로 표출하는 '미닝아웃' 심리적 만족감을 중요시하는...'가심비'",
    url: "http://www.casenews.co.kr/news/articleView.html?idxno=10672",

    image: `${process.env.PUBLIC_URL}/sara1.jpg`,
  },
  {
    title: "‘무지출 챌린지’에 빠진 MZ_돈쓸신잡 #56",
    contents:
      "MZ세대의 불확실한 미래 대비와 긴축 경제 전략: 무지출 챌린지. 하지만 넘지 말아야 할 선은 있다.",
    url: "https://www.elle.co.kr/article/68402",
    image: `${process.env.PUBLIC_URL}/sara2.jpg`,
  },
];

const maraTempDatas = [
  {
    title: "매번 ‘살까, 말까’ 고민하는 당신에게",
    contents:
      "고물가, 고금리. 저축에 집중하는 지금, 불균형한 소비 습관을 바로잡는 방법",
    url: "https://blog.toss.im/article/zzantech-01",
    image: `${process.env.PUBLIC_URL}/mara1.jpg`,
  },
  {
    title: "쉽게 따라할 수 있는 3년간 목돈 1,000만 원 모으는 법",
    contents:
      "복리 상품과 인복리 저축, 3년 만에 1,000만 원을 모으는 간단하고 효과적인 절약 방법!",
    url: "https://blog.toss.im/article/zzantech-4",
    image: `${process.env.PUBLIC_URL}/mara2.jpg`,
  },
];

export default function Articles({ $type }) {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    $type === "sara" ? setDatas(saraTempDatas) : setDatas(maraTempDatas);
  }, []);
  return (
    <StyledArticles>
      {datas.map((data, idx) => (
        <Article data={data} key={idx} onClick={() => window.open(data.url)} />
      ))}
    </StyledArticles>
  );
}

Articles.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};
