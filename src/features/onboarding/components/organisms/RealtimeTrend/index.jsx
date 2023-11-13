import React from 'react';
import StyledRealtimeTrend from './styles';
import Text from '../../../../../components/atoms/Text';
import Logo from '../../../../../components/atoms/Logo';
import TrendLabels from '../../molecules/TrendLabels';

export default function RealtimeTrend() {
  return (
    <StyledRealtimeTrend $color={'saraPrimary'}>
      <div className="realtime-title">
        <Logo logoType={'SaraTextOnly'} fill={'white'} />
        <Text label={'실시간 트렌드'} $color={'white'} $size={'sm'} />
      </div>
      <TrendLabels />
    </StyledRealtimeTrend>
  );
}
