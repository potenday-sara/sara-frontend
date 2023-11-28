import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styles';

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
