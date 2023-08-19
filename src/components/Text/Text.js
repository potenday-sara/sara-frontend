import React from "react";
import { css, styled } from "styled-components";
import PropTypes from "prop-types";
import { ReactComponentElement } from "react";
import { getBoldCode, getColorCode, getTextSizeCode } from "../../Styles";

const textColor = ({ color = "black" }) => {
  switch (color) {
    case "white":
      return css`
        color: #ffffff;
      `;
    case "black":
      return css`
        color: #333333;
      `;
    case "red":
      return css`
        color: #ef2b00;
      `;
    case "blue":
      return css`
        color: #007bed;
      `;
    default:
      return css`
        color: ${color};
      `;
  }
};

const basicTextStyle = () => css`
  font-family: "Pretendard";
  letter-spacing: 0.0015em;
`;

const StyledH1Text = styled.h1`
  ${(props) => basicTextStyle(props)}
  ${(props) => textColor(props)}
  font-weight: 700;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 0px;
`;

const StyledH2Text = styled.h2`
  ${(props) => basicTextStyle(props)}
  ${(props) => textColor(props)}
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  /* margin-bottom: 5px; */
`;

const StyledPText = styled.p`
  ${(props) => basicTextStyle(props)}
  ${(props) => textColor(props)}
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  /* margin-top: 5px; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
`;
const StyledBasicText = styled.p`
  color : ${({ $color }) => getColorCode($color)};
  font-weight: ${({ $bold }) => getBoldCode($bold)};
  font-size: ${({ $size }) => getTextSizeCode($size)};
  font-family: Pretendard;
`

/**
 * 
 * @param {['sm', 'md', 'lg']} bold 텍스트 굵기 설정 (default : md)
 * @param {['xs', 'sm', 'md', 'lg, xl']} size 텍스트 사이즈 설정 (default : md)
 * @param {color} color 희망하는 색깔 설정
 * @param {String} label 텍스트 입력 값 (Required)
 * @returns {ReactComponentElement} React Text Component
 */

export const BasicText = ({ label, ...rest }) => {
  return <StyledBasicText {...rest}>{label}</StyledBasicText>
}
BasicText.propTypes = {
  $bold: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
  $size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg, xl']).isRequired,
  $color: PropTypes.string.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

BasicText.defaultProps = {
  $bold: 'md',
  $size: 'md',
  $color: 'black',
  onClick: undefined,
};


export const MainText = ({ type, label, ...rest }) => {
  switch (type) {
    case "h1":
      return <StyledH1Text {...rest}>{label}</StyledH1Text>;

    case "h2":
      return <StyledH2Text {...rest}>{label}</StyledH2Text>;

    default:
      return <StyledPText {...rest}>{label}</StyledPText>;
  }
};


