import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as MainLogo } from '../../../images/logos/MainLogo.svg';
import { ReactComponent as MaraTextOnly } from '../../../images/logos/MaraText.svg';
import { ReactComponent as SaraTextOnly } from '../../../images/logos/SaraText.svg';
import { ReactComponent as SaraTextWithCircleWhite } from '../../../images/logos/saracirclewhite.svg';
import { ReactComponent as MaraTextWithCircleWhite } from '../../../images/logos/maracirclewhite.svg';

import { ReactComponent as SaraTextWithCircleWithText } from '../../../images/logos/sara-new-main.svg';
import { ReactComponent as MaraTextWithCircleWithText } from '../../../images/logos/mara-new-main.svg';
import { ReactComponent as SaraCircleCharacter } from '../../../images/logos/SaraCircleCharacter.svg';
import { ReactComponent as MaraCircleCharacter } from '../../../images/logos/MaraCircleCharacter.svg';
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
      return <SaraTextWithCircleWhite fill={fill} />;
    case 'MaraTextWithCircleWhite':
      return <MaraTextWithCircleWhite fill={fill} />;
    case 'SaraTextWithCircleWithText':
      return <SaraTextWithCircleWithText fill={fill} />;
    case 'MaraTextWithCircleWithText':
      return <MaraTextWithCircleWithText fill={fill} />;
    case 'SaraCircleCharacter':
      return <SaraCircleCharacter />;
    case 'MaraCircleCharacter':
      return <MaraCircleCharacter />;
    default:
      return null;
  }
};

/**
 * Logo를 반환하는 함수
 * @param {logoType} Logo 형태 선택
 */
export default function Logo({ fill, logoType, className, ...rest }) {
  return (
    <StyledLogoWrap className={`${className} logo-wrap`} {...rest}>
      {getLogoByType(logoType, fill)}
    </StyledLogoWrap>
  );
}

Logo.propTypes = {
  fill: PropTypes.string,
  logoType: PropTypes.oneOf([
    'MainLogo',
    'MaraTextOnly',
    'SaraTextOnly',
    'SaraTextWithCircleWhite',
    'MaraTextWithCircleWhite',
    'SaraTextWithCircleWithText',
    'MaraTextWithCircleWithText',
    'SaraCircleCharacter',
    'MaraCircleCharacter',
  ]).isRequired,
  w: PropTypes.string,
  h: PropTypes.string,
  m: PropTypes.string,
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
  fill: '',
  w: '',
  h: '',
  m: '',
  style: {},
};
