import React from 'react';
import StyledLabel from './styles';
import PropTypes from 'prop-types';

export default function Label({ htmlFor, text, ...rest }) {
  return (
    <StyledLabel htmlFor={htmlFor} {...rest}>
      {text}
    </StyledLabel>
  );
}

Label.propTypes = {
  text: PropTypes.node,
  htmlFor: PropTypes.string.isRequired,
  m: PropTypes.string,
};
