import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledSlider = styled.div`
  position: relative;
  overflow-y: hidden;
  background-color: #ddd;

  .swiper-wrapper {
    transition-timing-function: linear;
    transition-duration: 0s;
  }
  ${Theme.deviceSize.medium} {
    height: 563px;
    .swiper-wrapper {
      height: 563px;
    }
  }

  ${Theme.deviceSize.large} {
    height: 658px;
    .swiper-wrapper {
      height: 658px;
    }
  }

  &::after {
    top: 0px;
    content: '';
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: 0px 0px 15px 5px
      ${({ type }) => (type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary)} inset;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export default StyledSlider;
