import React from 'react';
import StyledChatLoading from './styles';
import Lottie from 'lottie-react';
import SaraLoading from '../../../assets/LoadingLottie/SaraLoading.json';
import MaraLoading from '../../../assets/LoadingLottie/MaraLoading.json';
import PropTypes from 'prop-types';

export default function LoadingLottie({ type, ...rest }) {
  return (
    <StyledChatLoading {...rest}>
      <Lottie animationData={type === 'sara' ? SaraLoading : MaraLoading} />
    </StyledChatLoading>
  );
}

LoadingLottie.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  m: PropTypes.string,
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
