import React from "react";
import { css, styled } from "styled-components";
import PropTypes from "prop-types";
import { getTextColor } from "../../../Styles";

const getArticleSize = ({ size }) => {
  switch (size) {
    case "samll":
      break;

    case "medium":
      return css`
        width: 500px;
      `;

    case "big":
      return css``;
    default:
      return css`
        width: 100%;
      `;
  }
};

const StyledArticle = styled.div`
  ${(props) => getArticleSize(props)}
  cursor: pointer;
  display: grid;
  grid-template-columns: 120px 1fr;
  overflow: hidden;
  height: 120px;

  background: #ffffff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  .article-image {
    grid-row: 1 / 3;
    height: 100%;
    background-position: center center;
    background-size: cover;
  }

  .article-contents {
    h2 {
      color: gray;
      margin-bottom: 5px;
      font-size: 16px;
      word-break: keep-all;
    }
    p {
      font-size: 14px;
      color: #333333;
      font-weight: 500;
      line-height: 16px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: box;
      margin-top: 1px;
      overflow: hidden;
      vertical-align: top;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    display: inline;
    padding: 12px;
  }
`;

export default function Article({ data, ...rest }) {
  return (
    <StyledArticle {...rest}>
      <div
        className="article-image"
        style={{ backgroundImage: `url(${data.image})` }}
      />
      <div className="article-contents">
        <h2>{data.title}</h2>
        <p>{data.contents}</p>
      </div>
    </StyledArticle>
  );
}

Article.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]),
  size: PropTypes.oneOf(["small", "medium", "big"]),
  data: PropTypes.shape({
    title: PropTypes.string,
    contents: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
};

Article.defaultProps = {
  onClick: undefined,
};
