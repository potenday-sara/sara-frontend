import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as FotterLogo } from '../../../images/logos/footerlogo.svg';
import StyledFooter from './styles';

export default function Footer({ ...rest }) {
  return (
    <StyledFooter {...rest} className="footer">
      <FotterLogo />
      <div className="texts">
        <span>Team SARA Contact. potenday.sara@gmail.com</span>
        <span>Copyright 2023 SARA. All rights reserved</span>
      </div>
    </StyledFooter>
  );
}

Footer.propType = {
  style: PropTypes.shape({}),
};
