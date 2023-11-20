import React from 'react';
import StyledFlatButton from './styles';
import Logo from '../../../../../components/atoms/Logo';
import PropTypes from 'prop-types';

export default function FlatButton({ type, activated, onClick, children }) {
  return (
    <StyledFlatButton
      className={activated ? 'activated' : 'non-activated'}
      $type={type}
      onClick={onClick}
    >
      {children}
    </StyledFlatButton>
  );
}

FlatButton.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
  activated: PropTypes.bool,
  onClick: PropTypes.func,
};
