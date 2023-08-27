import React from "react";
import PropTypes from "prop-types"
import { BasicText } from "../Text/Text";
import { css, styled } from "styled-components";
import { getColorCode } from "../../Styles";
import TextLogo from "../Logo/TextLogo";
import CircleTextLogo from "../Logo/CircleTextLogo";

const getButtonStyle = (isBtn) => {
  if (isBtn) return css`
    cursor: pointer;
  `
}


const StyledTextLabel = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ $bgColor }) => getColorCode($bgColor)};
  padding: 16px;
  ${(isBtn) => getButtonStyle(isBtn)}
  ${({ $textLabelStyles }) => ($textLabelStyles)}

`



/**
 * 텍스트가 중앙에 배치되는 텍스트라벨을 리턴합니다.
 * 텍스트 크기와 컬러, 백그라운드 컬러는 내부 함수를 통해 결정합니다.
 * @param {string} $size  xs, sm, md, lg, xl
 * @param {string} $bold sm, md, lg
 * @param {string} $color blue, red, gray, white, black
 * @param {string} label 박스에 사용할 텍스트
 * @param {boolean} $isBtn 
 * @param {css} styles styles에 사용되는 css를 이용한다
 * @param {string}  $type 타입에 따른 기본 텍스트 컬러를 지정할 수 있다
 * @param {boolean} textLogo $type에 값이 있는 경우 타입에 따른 텍스트로고를 사용할 수 있다. .textLogo로 css 설정 가능
 * @param {circleTextLogo} circleTextLogo $type에 값이 있는 경우 타입에 따른 원텍스트로고를 사용할 수 있다. .circleLogo로 css 설정 가능
 * @param {string} $bgColor  blue, red, gray, white, black 라벨 백그라운드 컬러 설정
 * @param {string} $textLabelStyles css 정보를 바탕으로 css 설정
 * @param {boolean} $isSelected $isSelect 효과를 줄 수 있습니다. (사용하기 위해서는 isSelectCSS를 직접 추가해야함)
 */
export default function TextLabel({ label, $bold, $color, textLogo, $type, circleTextLogo, $customColor, $size, ...rest }) {
  return <StyledTextLabel {...rest}>
    {textLogo && $type ? <TextLogo $type={$type} $fill={$color} /> : null}
    {circleTextLogo && $type ? <CircleTextLogo $type={$type} $fill={$color} /> : null}
    {label ? <BasicText $bold={$bold} $color={$color} $customColor={$customColor} $size={$size} label={label} /> : null}
  </StyledTextLabel>
}


TextLabel.propTypes = {
  ...BasicText.propTypes,
  label: PropTypes.string,
  isBtn: PropTypes.bool,
  onClick: PropTypes.func,
  circleTextLogo: PropTypes.bool,
  textLogo: PropTypes.bool,
  textLabelStyles: PropTypes.string
}

TextLabel.defautlProps = {
  ...BasicText.defaultProps,
  circleTextLogo: false,
  textLogo: false
}