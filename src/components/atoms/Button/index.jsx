import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

export default function Button({ children, type, ...rest }) {
  return (
    <StyledButton {...rest} type={type}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  w: PropTypes.string.isRequired,
  m: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  style: {},
};
