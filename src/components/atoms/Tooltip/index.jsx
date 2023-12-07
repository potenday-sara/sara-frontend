import React from 'react';
import PropTypes from 'prop-types';
import StyledTooltip from './styles';

function Tooltip({ children, ...rest }) {
  return <StyledTooltip {...rest}>{children}</StyledTooltip>;
}

Tooltip.propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  style: {},
};

export default Tooltip;
