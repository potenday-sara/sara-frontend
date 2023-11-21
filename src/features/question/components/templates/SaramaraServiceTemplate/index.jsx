import React from 'react';
import PropTypes from 'prop-types';
import { StyledSaramaraServiceTemplate } from './styles';

export default function SaramaraServiceTemplate() {
  return <StyledSaramaraServiceTemplate></StyledSaramaraServiceTemplate>;
}

SaramaraServiceTemplate.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
};
