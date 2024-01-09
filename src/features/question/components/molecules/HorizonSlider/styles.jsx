import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledHorizonSlider = styled.div`
  position: relative;
  overflow-y: hidden;
  background-color: #ddd;
  /* width: 100%; */

  .swiper-wrapper {
    transition-timing-function: linear;
    transition-duration: 0s;
    align-items: center;

    .swiper-slide {
      width: auto;
    }
  }

  &::after {
    z-index: 999;
    top: 0px;
    content: '';
    box-shadow: 0px 0px 15px 5px
      ${({ type }) => (type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary)} inset;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export default StyledHorizonSlider;
