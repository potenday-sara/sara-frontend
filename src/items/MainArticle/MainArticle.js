import React from "react";
import { styled } from "styled-components";
import Image from "../../images/temp/tempImage.jpg";
import PropTypes from "prop-types";

const StyledMainArticle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;
  width: 100%;
  height: 140px;
  background: #ffffff;

  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  cursor: pointer;
  position: relative;
  .image {
    display: block;
    width: 130px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const MainArticle = ({
  $type,
  $image,
  title,
  contents,
  color,
  ...rest
}) => {
  return (
    <StyledMainArticle>
      <div className="image">
        <img src={Image} alt="" />
      </div>

      <div className="article"></div>
    </StyledMainArticle>
  );
};

MainArticle.propTypes = {
  $image: PropTypes.string,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MainArticle.defaultProps = {
  onClick: undefined,
  title: "에어팟 맥스",
  contents: "에어팟 맥스",
};
