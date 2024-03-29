import React from 'react';
import PropTypes from 'prop-types';
import { StyledTrendNumber, StyledTrendLabel } from './styles';
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
    <StyledTrendNumber type={type}>
      <Text
        label={children}
        size="14px"
        bold="700"
        color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
      />
    </StyledTrendNumber>
  );
}
LabelNum.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};

LabelNum.defaultProps = {};

function LabelName({ children }) {
  return <Text label={children} size="14px" bold="700" />;
}
LabelName.propTypes = {
  children: PropTypes.string.isRequired,
};

TrendLabel.LabelNum = LabelNum;
TrendLabel.LabelName = LabelName;

export default TrendLabel;
