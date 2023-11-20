import React, { useContext } from 'react';
import StyledTrendLabels from './styles';
import TrendLabel from '../../atoms/TrendLabel';
import SaraMaraContext from '../../../stores/Wrapped';

const contents = ['나이키 조던', '나이키 조던', '나이키 조던'];

export default function TrendLabels() {
  const { type } = useContext(SaraMaraContext);

  return (
    <StyledTrendLabels>
      {contents.map((data, i) => {
        return (
          <TrendLabel>
            <TrendLabel.LabelNum type={type}>{i + 1}</TrendLabel.LabelNum>
            <TrendLabel.LabelName>{data}</TrendLabel.LabelName>
          </TrendLabel>
        );
      })}
    </StyledTrendLabels>
  );
}
