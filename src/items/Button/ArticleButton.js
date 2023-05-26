import React from "react";
import { styled } from "styled-components";
import { MainText } from "../Text/Text";
import Image from "../../images/temp/tempImage.jpg";
import PropTypes from "prop-types";

const StyledArticleButton = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  width: 100%;
  max-width: 685px;
  height: 130px;
  background: #ffffff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  margin: 0px 0px 10px 0px;
  cursor: pointer;
  overflow: hidden;

  .image {
    width: 130px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .article {
    padding: 20px;
    height: calc(100% - 25px);
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ArticleButton = ({ $image, title, contents, color, ...rest }) => {
  return (
    <StyledArticleButton>
      <div className="image">
        <img src={Image} alt="" />
      </div>

      <div className="article">
        <MainText label={title} type={"h2"} />
        <MainText label={contents} type={"p"} color={"black"} />
      </div>
    </StyledArticleButton>
  );
};

ArticleButton.propTypes = {
  $image: PropTypes.string,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ArticleButton.defaultProps = {
  onClick: undefined,
  title: "에어팟 맥스",
  contents:
    "에어팟 맥스에어팟 맥스에어팟맥스에어팟맥스에어팟맥스에어팟맥스에어팟맥스에어팟 맥스에어팟맥스에어팟맥스에어팟맥스에어팟 맥스에어팟 맥에어팟 에어팟 에어팟 맥스에어팟 맥스에어팟 맥스맥스맥스팟 맥스에어팟 맥스에어팟 맥스에어팟 맥스에어팟 맥스",
};
