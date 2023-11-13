import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as MainLogo } from '../../../images/logos/MainLogo.svg';

const StyledLogoWrap = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const getLogoByType = (logoType) => {
  switch (logoType) {
    case 'MainLogo':
      return <MainLogo />;
  }
};

/**
 * Logo를 반환하는 함수
 * @param {logoType} Logo 형태 선택
 */
export default function Logo({ logoType, ...rest }) {
  return <StyledLogoWrap {...rest}>{getLogoByType(logoType)}</StyledLogoWrap>;
}

Logo.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  logoType: PropTypes.oneOf(['MainLogo']),
};
