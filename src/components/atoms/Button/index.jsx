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
  w: PropTypes.string,
  m: PropTypes.string,
  h: PropTypes.string,
  bg: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  style: {},
  w: '',
  m: '',
  h: '',
  bg: '',
};
