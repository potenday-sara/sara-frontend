import React from 'react';
import PropTypes from 'prop-types';
import StyledTrendLabel from './styles';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

function TrendLabel({ children }) {
  return <StyledTrendLabel>{children}</StyledTrendLabel>;
}

TrendLabel.propTypes = {
  children: PropTypes.node,
};

TrendLabel.defaultProps = {
  children: null,
};

function LabelNum({ children, type }) {
  return (
    <Text
      label={children}
      size="sm"
      bold="lg"
      color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
    />
  );
}
LabelNum.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};

LabelNum.defaultProps = {
  children: null,
};

function LabelName({ children }) {
  return <Text label={children} size="sm" />;
}
LabelName.propTypes = {
  children: PropTypes.string.isRequired,
};

TrendLabel.LabelNum = LabelNum;
TrendLabel.LabelName = LabelName;

export default TrendLabel;
