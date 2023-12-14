import React from 'react';
import PropTypes from 'prop-types';
import StyledCircleButton from './styles';

function CircleButton({ children, ...rest }) {
  return <StyledCircleButton {...rest}>{children}</StyledCircleButton>;
}

CircleButton.propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};

CircleButton.defaultProps = {
  style: {},
};

export default CircleButton;
