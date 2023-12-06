import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styles';

function Title({ children, ...rest }) {
  return <StyledTitle {...rest}>{children}</StyledTitle>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
};

Title.defaultType = {
  style: {},
};

export default Title;
