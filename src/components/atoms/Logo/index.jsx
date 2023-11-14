import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as MainLogo } from '../../../images/logos/MainLogo.svg';
import { ReactComponent as MaraTextOnly } from '../../../images/logos/MaraText.svg';
import { ReactComponent as SaraTextOnly } from '../../../images/logos/SaraText.svg';
import { ReactComponent as SaraTextWithCircleWhite } from '../../../images/logos/saracirclewhite.svg';
import { ReactComponent as MaraTextWithCircleWhite } from '../../../images/logos/maracirclewhite.svg';
import { colorPalete } from '../../../Styles';
import StyledLogoWrap from './styles';

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
export default function Logo({ fill, logoType }) {
  return (
    <StyledLogoWrap className="logo-wrap">
      {getLogoByType(logoType, fill)}
    </StyledLogoWrap>
  );
}

Logo.propTypes = {
  fill: PropTypes.oneOf(colorPalete),
  logoType: PropTypes.oneOf([
    'MainLogo',
    'TextOnlySara',
    'SaraTextWithCircleWhite',
    'MaraTextWithCircleWhite',
  ]),
};
