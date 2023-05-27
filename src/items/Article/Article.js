import React from "react";

import { styled } from "styled-components";
import { MainText } from "../Text/Text";
import PropTypes from "prop-types";

const StyledArticle = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 1fr;
  background-color: white;
  width: calc(300px + 10vw);
  height: 120px;
  /* background-color: red; */
  padding: 20px 20px;
  bottom: 5px;
  background: #ffffff;
  border-radius: 16px;
  /* z-index: 999; */

  .contents {
    h1 {
      margin-bottom: 10px;
    }
    /* p {
      line-height: 14px;
      font-size: 13px;
    } */
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default function Article({ type, label, text, ...rest }) {
  return (
    <StyledArticle {...rest}>
      <div className="contents">
        <MainText
          label={label}
          type={"h1"}
          color={type === "/sara" ? "blue" : "red"}
        />
        <MainText label={text} type={"p"} color={"#999999"} />
      </div>
      <div className="black"></div>
    </StyledArticle>
  );
}

Article.propTypes = {
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

Article.defaultProps = {
  onMouseOver: undefined,
  onMouseLeave: undefined,
};
