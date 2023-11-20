import React from 'react';
import StyledTrendLabel from './styles';
import Text from '../../../../../components/atoms/Text';

function TrendLabel({ children }) {
  return <StyledTrendLabel>{children}</StyledTrendLabel>;
}

const LabelNum = ({ children, type }) => {
  return (
    <Text
      label={children}
      $size={'sm'}
      $color={type === 'sara' ? 'saraPrimary' : 'maraPrimary'}
    />
  );
};

const LabelName = ({ children }) => {
  return <Text label={children} $size={'sm'} />;
};

TrendLabel.LabelNum = LabelNum;
TrendLabel.LabelName = LabelName;

export default TrendLabel;
