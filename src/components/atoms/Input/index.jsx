import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './styles';

export default function Input({ ph, id, ...rest }) {
  return <StyledInput placeholder={ph} id={id} {...rest}></StyledInput>;
}

Input.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  ph: PropTypes.string,
  id: PropTypes.string.isRequired,
};
