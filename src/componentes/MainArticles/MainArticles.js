import { styled } from "styled-components";
import { MainArticle } from "../../items/MainArticle/MainArticle";
import Image from "../../images/temp/tempImage.jpg";

const StyledMainArticles = styled.article`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;

  gap: 20px;
  grid-auto-rows: auto;
  grid-auto-flow: row;
`;

const temp = {
  title: "에어팟맥스",
  contents: "에어팟맥스",
  url: "url",
  image: Image,
};

export default function MainArticles({ $type }) {
  return (
    <StyledMainArticles>
      <MainArticle $type={$type} data={temp}></MainArticle>
      <MainArticle $type={$type} data={temp}></MainArticle>
      {/* <MainArticle $type={$type}></MainArticle> */}
    </StyledMainArticles>
  );
}
