import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Sara } from '../../../images/logos/saratextlogo.svg';
import { styled } from 'styled-components';

const StyledMainTextLogo = styled.div`
  width: 147.8px;
  height: 80px;
  margin: auto;
  ${({ $getMainTextLogoStyles }) => $getMainTextLogoStyles}
`;

export default function MainTextLogo({ ...rest }) {
  // return <StyledMainTextLogo className="textLogo">{$type === "sara" ? <Sara /> : <Mara />}</StyledMainTextLogo>;
  // return <StyledMainTextLogo {...rest} className="textLogo">{$type === 'sara' ? <Sara /> : <Mara />}</StyledMainTextLogo>;
  return (
    <StyledMainTextLogo {...rest} className="textLogo">
      <Sara />
    </StyledMainTextLogo>
  );
}

MainTextLogo.propTypes = {
  $type: PropTypes.oneOf(['sara', 'mara']),
  $width: PropTypes.string,
  $height: PropTypes.string,
};
