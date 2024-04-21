import styled from 'styled-components';

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
`;

export default StyledHorizonSlider;
