import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react';
import StyledChatLoading from './styles';
import SaraLoading from '../../../assets/LoadingLottie/SaraLoading.json';
import MaraLoading from '../../../assets/LoadingLottie/MaraLoading.json';

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

LoadingLottie.defaultProps = {
  w: '',
  h: '',
  m: '',
};
