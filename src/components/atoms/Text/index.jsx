import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Theme } from '../../../Styles';

export const getBoldCode = (bold) => {
  switch (bold) {
    case 'sm':
      return 400;
    case 'md':
      return 500;
    case 'lg':
      return 700;
    default:
      return bold * 1;
  }
};

const getTextSize = (size) => {
  switch (size) {
    case 'xs':
      return '14px';
    case 'sm':
      return '16px';

    case 'md':
      return '18px';
    case 'lg':
      return '20px';

    case 'xl':
      return '24px';

    default:
      return size;
  }
};

const StyledText = styled.p`
  color: ${({ color }) => color || Theme.color.black};
  font-weight: ${({ bold }) => getBoldCode(bold)};
  font-size: ${({ size }) => getTextSize(size)};
  font-family: Pretendard;
  white-space: pre-line;
`;

/**
 * 기본 프린텐다드 텍스트를 제공하는 함수입니다. 대표 색상 다섯가지 이외의 색상을 사용하고 싶은 경우
 * customColor를 활용해 주세요
 * @param {['sm', 'md', 'lg']} bold 텍스트 굵기 설정 (default : md)
 * @param {['xs', 'sm', 'md', 'lg, xl']} size 텍스트 사이즈 설정 (default : md)
 * @param {color} color 희망하는 색깔 설정
 * @param {String} label 텍스트 입력 값 (Required)
 * @param {string} style css 정보를 바탕으로 css 설정
 * @return {ReactComponentElement} React Text Component
 */

export default function Text({ label, ...rest }) {
  return <StyledText {...rest}>{label}</StyledText>;
}

Text.propTypes = {
  bold: PropTypes.oneOf(['sm', 'md', 'lg']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  color: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.shape({}),
};

Text.defaultProps = {
  bold: 'md',
  size: 'md',
  label: '',
  onClick: undefined,
  style: {},
  color: 'black',
};
