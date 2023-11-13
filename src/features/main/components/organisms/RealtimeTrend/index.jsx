import React from 'react';
import StyledRealtimeTrend from './styles';
import TrendLabels from '../../molecules/TrendLabels';
import TrendTitle from '../../molecules/TrendTitle';

export default function RealtimeTrend() {
  return (
    <StyledRealtimeTrend $color={'saraPrimary'}>
      <TrendTitle />
      <TrendLabels />
    </StyledRealtimeTrend>
  );
}
