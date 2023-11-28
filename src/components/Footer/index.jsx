import React from 'react';
import { ReactComponent as FotterLogo } from '../../images/logos/footerlogo.svg';
import StyledFooter from './styles';
import PropTypes from 'prop-types';

export default function Footer({ ...rest }) {
  return (
    <StyledFooter {...rest}>
      <p>Copyright 2023 SARA. All rights reserved</p>
      <FotterLogo />
      <p>Team SARA Contact. potenday.sara@gmail.com</p>
    </StyledFooter>
  );
}

Footer.propType = {
  style: PropTypes.object,
};
