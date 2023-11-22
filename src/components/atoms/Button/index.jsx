import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

export default function Button({ label, type, ...rest }) {
  return (
    <StyledButton {...rest} type={type}>
      {label}
    </StyledButton>
  );
}

Button.PropTypes = {
  type: PropTypes.string,
  w: PropTypes.string,
  m: PropTypes.string,
  h: PropTypes.string,
  bg: PropTypes.string,
  label: PropTypes.string.isRequired,
};
