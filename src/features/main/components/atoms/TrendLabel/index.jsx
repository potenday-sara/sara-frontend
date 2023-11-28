import React from 'react';
import StyledTrendLabel from './styles';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

function TrendLabel({ children }) {
  return <StyledTrendLabel>{children}</StyledTrendLabel>;
}

const LabelNum = ({ children, type }) => {
  return (
    <Text
      label={children}
      size={'sm'}
      bold={'lg'}
      color={
        type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary
      }
    />
  );
};

const LabelName = ({ children }) => {
  return <Text label={children} $size={'sm'} />;
};

TrendLabel.LabelNum = LabelNum;
TrendLabel.LabelName = LabelName;

export default TrendLabel;
