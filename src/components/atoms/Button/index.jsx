import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

export default function Button({ label, ...rest }) {
  return <StyledButton {...rest}>{label}</StyledButton>;
}

Button.PropTypes = {
  w: PropTypes.string,
  m: PropTypes.string,
  h: PropTypes.string,
  bg: PropTypes.string,
  label: PropTypes.string.isRequired,
};
