import React from 'react';
import PropTypes from 'prop-types';
import StyledTextarea from './styles';

export default function Textarea({ ph, id, ...rest }) {
  return <StyledTextarea placeholder={ph} id={id} {...rest}></StyledTextarea>;
}

Textarea.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  ph: PropTypes.string,
  id: PropTypes.string.isRequired,
};
