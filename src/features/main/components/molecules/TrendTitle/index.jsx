import React from 'react';
import StyledTrendTitle from './styles';
import Logo from '../../../../../components/atoms/Logo';
import Text from '../../../../../components/atoms/Text';

export default function TrendTitle() {
  return (
    <StyledTrendTitle $color={'saraPrimary'}>
      <Logo logoType={'SaraTextOnly'} fill={'white'} />
      <Text
        label={'실시간 트렌드'}
        $color={'white'}
        $size={'sm'}
        $bold={'lg'}
      />
    </StyledTrendTitle>
  );
}
