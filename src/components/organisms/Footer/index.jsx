import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as FotterLogo } from '../../../images/logos/footerlogo.svg';
import StyledFooter from './styles';

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
  style: PropTypes.objectOf,
};
