import React, { useContext } from 'react';
import StyledRealtimeTrend from './styles';
import TrendLabels from '../../molecules/TrendLabels';
import TrendTitle from '../../atoms/TrendTitle';
import SaraMaraContext from '../../../stores/SaraMaraContext';

export default function RealtimeTrend() {
  const { type } = useContext(SaraMaraContext);

  return (
    <StyledRealtimeTrend color="saraPrimary">
      <TrendTitle type={type} />
      <TrendLabels type={type} />
    </StyledRealtimeTrend>
  );
}
