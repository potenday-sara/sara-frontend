import React from "react";
import { styled } from "styled-components";
import { MainText } from "../Text/Text";
import Image from "../../images/temp/tempImage.jpg";
import PropTypes from "prop-types";

const StyledArticleButton = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  /* padding: 20px; */
  overflow: hidden;
  width: 100%;
  max-width: 685px;
  height: 48%;
  background: #ffffff;

  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  cursor: pointer;
  position: relative;
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
    /* white-space: nowrap; */
    -webkit-box-orient: vertical;
    overflow: hidden;
    h2 {
      margin-bottom: 5px;
    }
  }
`;

export const ArticleButton = ({
  $type,
  $image,
  title,
  contents,
  color,
  ...rest
}) => {
  return (
    <StyledArticleButton>
      <div className="image">
        <img src={Image} alt="" />
      </div>

      <div className="article">
        <MainText
          label={title}
          type={"h2"}
          color={$type === "sara" ? "blue" : "red"}
        />
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
  contents: "에어팟 맥스",
};
