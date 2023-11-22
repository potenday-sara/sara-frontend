import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './styles';

export default function Input({ ph, id, onChange, value, ...rest }) {
  return (
    <StyledInput
      placeholder={ph}
      id={id}
      value={value}
      onChange={onChange}
      {...rest}
    ></StyledInput>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  w: PropTypes.string,
  h: PropTypes.string,
  ph: PropTypes.string,
  id: PropTypes.string.isRequired,
};
