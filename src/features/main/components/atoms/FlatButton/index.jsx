import React from 'react';
import StyledFlatButton from './styles';
import Logo from '../../../../../components/atoms/Logo';

export default function FlatButton() {
  return (
    <StyledFlatButton>
      <Logo logoType={'SaraTextWithCircleWhite'} />
    </StyledFlatButton>
  );
}
