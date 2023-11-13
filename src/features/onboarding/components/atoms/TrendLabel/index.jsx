import React from 'react';
import StyledTrendLabel from './styles';
import Text from '../../../../../components/atoms/Text';

export default function TrendLabel() {
  return (
    <StyledTrendLabel>
      <Text label={'1'} $size={'sm'} $color={'saraPrimary'} />
      <Text label={'나이키 조던'} $size={'sm'} />
    </StyledTrendLabel>
  );
}
