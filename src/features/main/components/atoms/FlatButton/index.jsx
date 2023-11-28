import React from 'react';
import PropTypes from 'prop-types';
import StyledFlatButton from './styles';

export default function FlatButton({ type, activated, onClick, children }) {
  return (
    <StyledFlatButton className={activated ? 'activated' : 'non-activated'} type={type} onClick={onClick}>
      {children}
    </StyledFlatButton>
  );
}

FlatButton.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  children: PropTypes.node,
  activated: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

FlatButton.defaultProps = {
  children: null,
  onClick: undefined,
};
