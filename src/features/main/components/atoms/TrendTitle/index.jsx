import React from 'react';
import PropTypes from 'prop-types';
import StyledTrendTitle from './styles';
import Logo from '../../../../../components/atoms/Logo';
import Text from '../../../../../components/atoms/Text';

export default function TrendTitle({ type }) {
  return (
    <StyledTrendTitle $color={type === 'sara' ? 'saraPrimary' : 'maraPrimary'}>
      <Logo logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'} fill="white" />
      <Text label="실시간 트렌드" color="white" size="sm" bold="lg" />
    </StyledTrendTitle>
  );
}

TrendTitle.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
