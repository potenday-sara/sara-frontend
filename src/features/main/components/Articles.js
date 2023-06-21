import { styled } from "styled-components";
import Article from "./Article";
import Image from "../../../images/temp/tempImage.jpg";
import PropTypes from "prop-types";

const StyledArticles = styled.article`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
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

export default function Articles({ $type }) {
  return (
    <StyledArticles>
      <Article $type={$type} data={temp}></Article>
      <Article $type={$type} data={temp}></Article>
    </StyledArticles>
  );
}

Articles.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};
