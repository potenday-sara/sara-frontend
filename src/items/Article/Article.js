import React from "react";

import { styled } from "styled-components";
import { MainText } from "../Text/Text";
import PropTypes from "prop-types";

const StyledArticle = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: 1fr;
  background-color: white;
  height: 120px !important;
  overflow: hidden;
  /* background-color: red; */
  padding: 20px 20px;
  bottom: 5px;
  background: #ffffff;
  border-radius: 16px;
  /* z-index: 999; */

  .contents {
    h2 {
      margin-bottom: 10px;
    }
    p {
      line-height: 18px;
      font-size: 15px;
    }
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
          type={"h2"}
          color={type === "sara" ? "blue" : "red"}
        />
        <MainText label={text} type={"p"} color={"#999999"} />
      </div>
    </StyledArticle>
  );
}

Article.propTypes = {
  type: PropTypes.oneOf(["sara", "mara"]).isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
