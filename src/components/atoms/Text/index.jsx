import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { getBoldCode, getColorCodeByType } from '../../../Styles';
import zIndex from '@mui/material/styles/zIndex';

const getTextSize = (size) => {
  switch (size) {
    case 'xs':
      return '0.9rem';
    case 'sm':
      return '0.95rem';

    case 'md':
      return '1rem';
    case 'lg':
      return '1.25rem';

    case 'xl':
      return '1.5rem';

    default:
      return size;
  }
};

const StyledText = styled.p`
  color: ${({ customColor, color }) =>
    customColor ? customColor : getColorCodeByType(color)};
  font-weight: ${({ bold }) => getBoldCode(bold)};
  font-size: ${({ size }) => getTextSize(size)};
  font-family: Pretendard;
  white-space: pre-line;
  ${({ textStyles }) => textStyles}
`;

/**
 * 기본 프린텐다드 텍스트를 제공하는 함수입니다. 대표 색상 다섯가지 이외의 색상을 사용하고 싶은 경우
 * customColor를 활용해 주세요
 * @param {['sm', 'md', 'lg']} bold 텍스트 굵기 설정 (default : md)
 * @param {['xs', 'sm', 'md', 'lg, xl']} size 텍스트 사이즈 설정 (default : md)
 * @param {color} color 희망하는 색깔 설정
 * @param {String} label 텍스트 입력 값 (Required)
 * @param {string} $textStyles css 정보를 바탕으로 css 설정
 * @return {ReactComponentElement} React Text Component
 */

export default function Text({ label, ...rest }) {
  return <StyledText {...rest}>{label}</StyledText>;
}

Text.propTypes = {
  style: PropTypes.object,
  bold: PropTypes.oneOf(['sm', 'md', 'lg']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  color: PropTypes.oneOf(['blue', 'red', 'gray', 'white', 'black']),
  customColor: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Text.defaultProps = {
  $size: 'md',
};
