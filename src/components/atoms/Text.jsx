import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { getBoldCode, getColorCode, getDestopTextSizeCode } from '../../Styles';

const StyledBasicText = styled.p`
  color: ${({ $customColor, $color }) =>
    $customColor ? $customColor : getColorCode($color)};
  font-weight: ${({ $bold }) => getBoldCode($bold)};
  ${({ $size }) => getDestopTextSizeCode($size)};
  font-family: Pretendard;
  white-space: pre-line;
  ${({ $textStyles }) => $textStyles}
`;

/**
 * 기본 프린텐다드 텍스트를 제공하는 함수입니다. 대표 색상 다섯가지 이외의 색상을 사용하고 싶은 경우
 * customColor를 활용해 주세요
 * @param {['sm', 'md', 'lg']} bold 텍스트 굵기 설정 (default : md)
 * @param {['xs', 'sm', 'md', 'lg, xl']} size 텍스트 사이즈 설정 (default : md)
 * @param {color} color 희망하는 색깔 설정
 * @param {String} label 텍스트 입력 값 (Required)
 * @param {string} $textStyles css 정보를 바탕으로 css 설정
 * @returns {ReactComponentElement} React Text Component
 */
export const BasicText = ({ label, ...rest }) => {
  return <StyledBasicText {...rest}>{label}</StyledBasicText>;
};

BasicText.propTypes = {
  $bold: PropTypes.oneOf(['sm', 'md', 'lg']),
  $size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  $color: PropTypes.oneOf(['blue', 'red', 'gray', 'white', 'black']),
  $customColor: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};
