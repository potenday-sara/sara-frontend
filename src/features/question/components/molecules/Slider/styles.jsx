import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledSlider = styled.div`
  position: relative;
  &:after {
    top: 0px;
    content: '';
    box-shadow: 0px 0px 20px 5px ${Theme.color.saraSecondary} inset;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9999999;
  }
  overflow-y: hidden;
  background-color: #ddd;
  .swiper-wrapper {
    height: 500px;

    transition-timing-function: linear;
  }
`;

export default StyledSlider;
