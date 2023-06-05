import React from "react";
import { styled } from "styled-components";
import Image from "../../images/temp/tempImage.jpg";
import PropTypes from "prop-types";
import { getTextColor } from "../../Styles";

const StyledMainArticle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 2fr;
  overflow: hidden;
  width: 100%;
  height: 120px;

  background: #ffffff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  .article-image {
    grid-row: 1 / 3;
    display: block;
    height: 100%;
    aspect-ratio: 1 / 1;
  }

  .article-title {
    padding: 20px 10px 20px;
    ${(props) => getTextColor(props)};
  }

  .article-contents {
    ${(props) => getTextColor({ $type: "gray" })}
    display: inline;
    padding-left: 12px;
  }
`;

export const MainArticle = ({ data, ...rest }) => {
  return (
    <StyledMainArticle {...rest}>
      <img className="article-image" src={data.image} alt="아티클이미지" />
      <h2 className="article-title">{data.title}</h2>
      <p className="article-contents">{data.contents}</p>
    </StyledMainArticle>
  );
};

MainArticle.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
  data: PropTypes.shape({
    title: PropTypes.string,
    contents: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
};

MainArticle.defaultProps = {
  onClick: undefined,
  data: {
    image: Image,
  },
};
