import React from 'react';
import PropTypes from 'prop-types';
import StyledLabel from './styles';

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
  m: PropTypes.string.isRequired,
};

Label.defaultProps = {
  text: null,
};
