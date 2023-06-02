import { styled } from "styled-components";
import { MainArticle } from "../../items/MainArticle/MainArticle";

const StyledMainArticles = styled.article`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;

  gap: 20px;
  grid-auto-rows: auto;
  grid-auto-flow: row;
`;

export default function MainArticles({ $type }) {
  return (
    <StyledMainArticles>
      <MainArticle $type={$type}></MainArticle>
      <MainArticle $type={$type}></MainArticle>
      {/* <MainArticle $type={$type}></MainArticle> */}
    </StyledMainArticles>
  );
}
