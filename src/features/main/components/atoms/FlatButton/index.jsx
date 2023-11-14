import React from 'react';
import StyledFlatButton from './styles';
import Logo from '../../../../../components/atoms/Logo';
import PropTypes from 'prop-types';

export default function FlatButton({ type, activated, onClick }) {
  return (
    <StyledFlatButton
      className={activated ? 'activated' : 'non-activated'}
      $type={type}
      onClick={onClick}
    >
      <Logo
        logoType={
          type === 'sara'
            ? 'SaraTextWithCircleWhite'
            : 'MaraTextWithCircleWhite'
        }
      />
    </StyledFlatButton>
  );
}

FlatButton.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
  activated: PropTypes.bool,
  onClick: PropTypes.func,
};
