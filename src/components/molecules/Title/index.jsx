import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styles';

const Title = ({ type, children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
