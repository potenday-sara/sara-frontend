import React, { useContext } from 'react';
import StyledTrendLabels from './styles';
import TrendLabel from '../../atoms/TrendLabel';
import SaraMaraContext from '../../../stores/SaraMaraContext';
import useRank from '../../../hooks/useRank';

// const contents = ['나이키 조던', '나이키 조던', '나이키 조던'];

export default function TrendLabels() {
  const { type } = useContext(SaraMaraContext);
  const { data: ranks, isLoading } = useRank(type);

  return (
    <StyledTrendLabels>
      {!isLoading &&
        ranks?.map((data, idx) => {
          return (
            <TrendLabel key={[type, data.rank, idx]}>
              <TrendLabel.LabelNum type={type}>{String(data.rank)}</TrendLabel.LabelNum>
              <TrendLabel.LabelName>{data.product}</TrendLabel.LabelName>
            </TrendLabel>
          );
        })}
    </StyledTrendLabels>
  );
}
