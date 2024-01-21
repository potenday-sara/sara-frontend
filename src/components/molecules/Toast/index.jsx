import React from 'react';
import PropTypes from 'prop-types';
import StyeldToast from './styles';

function Toast({ children, ...rest }) {
  return (
    <StyeldToast className="toast" {...rest}>
      {children}
    </StyeldToast>
  );
}

export default Toast;

Toast.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
  children: PropTypes.node.isRequired,
};

Toast.defaultProps = {
  type: 'sara',
};
