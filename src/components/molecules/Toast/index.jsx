import React from 'react';
import PropTypes from 'prop-types';
import StyeldToast from './styles';

function Toast({ children, ...rest }) {
  return <StyeldToast {...rest}>{children}</StyeldToast>;
}

export default Toast;

Toast.propTypes = {
  children: PropTypes.node.isRequired,
};
