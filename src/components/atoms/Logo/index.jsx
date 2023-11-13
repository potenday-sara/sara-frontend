import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as MainLogo } from '../../../images/logos/MainLogo.svg';
import { ReactComponent as MaraTextOnly } from '../../../images/logos/MaraText.svg';
import { ReactComponent as SaraTextOnly } from '../../../images/logos/SaraText.svg';
import { ReactComponent as SaraTextWithCircleWhite } from '../../../images/logos/saracirclewhite.svg';
import { ReactComponent as MaraTextWithCircleWhite } from '../../../images/logos/saracirclewhite.svg';
import { colorPalete } from '../../../Styles';

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

const getLogoByType = (logoType, fill) => {
  switch (logoType) {
    case 'MainLogo':
      return <MainLogo />;
    case 'MaraTextOnly':
      return <MaraTextOnly fill={fill} />;
    case 'SaraTextOnly':
      return <SaraTextOnly fill={fill} />;
    case 'SaraTextWithCircleWhite':
      return <SaraTextWithCircleWhite />;
    case 'MaraTextWithCircleWhite':
      return <MaraTextWithCircleWhite />;
  }
};

/**
 * Logo를 반환하는 함수
 * @param {logoType} Logo 형태 선택
 */
export default function Logo({ fill, logoType, ...rest }) {
  return (
    <StyledLogoWrap {...rest} className="logo-wrap">
      {getLogoByType(logoType, fill)}
    </StyledLogoWrap>
  );
}

Logo.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fill: PropTypes.oneOf(colorPalete),
  logoType: PropTypes.oneOf(['MainLogo', 'TextOnlySara']),
};
