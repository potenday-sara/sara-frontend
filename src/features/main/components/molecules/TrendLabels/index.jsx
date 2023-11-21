import React, { useContext } from 'react';
import StyledTrendLabels from './styles';
import TrendLabel from '../../atoms/TrendLabel';
import SaraMaraContext from '../../../stores/SaraMaraContext';
import useRank from '../../../hooks/useRank';

// const contents = ['나이키 조던', '나이키 조던', '나이키 조던'];

export default function TrendLabels() {
  const { type } = useContext(SaraMaraContext);
  const { data } = useRank(type);

  return (
    <StyledTrendLabels>
      {data?.map((data, i) => {
        return (
          <TrendLabel key={i}>
            <TrendLabel.LabelNum type={type}>{i + 1}</TrendLabel.LabelNum>
            <TrendLabel.LabelName>{data}</TrendLabel.LabelName>
          </TrendLabel>
        );
      })}
    </StyledTrendLabels>
  );
}
