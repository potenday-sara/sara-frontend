import styled, { keyframes } from 'styled-components';

const updownAni = keyframes`
  0% {
    margin-top: 0px;
    box-shadow: 0px 12px 20px 0px rgba(0, 123, 237, 0.30);
    opacity: 1;
  }

  100% {
    opacity: 0;
    margin-top: 20px;
    box-shadow: 0px 12px 20px 0px rgba(0, 123, 237, 0.50);

  }
`;

const moveHoriAni = keyframes`
  0% {
    margin-top: 0px;
    margin-left: 15px;
    box-shadow: 0px 6px 10px 0px rgba(0, 123, 237, 0.20);

  }

  100% {
    margin-left: 2px;
    box-shadow: 0px 12px 20px 0px rgba(0, 123, 237, 0.50);

  }
`;

const saraBeforeShadowAni = keyframes`
    0% {
    box-shadow: 0px 12px 20px 0px rgba(0, 123, 237, 0.30);
  }

  100% {
    box-shadow: none
  }
`;

const afterShadowAni = keyframes`
  0% {
    box-shadow: 0px 6px 10px 0px rgba(0, 123, 237, 0.20);
  }
  
  100% {
    box-shadow: 0px 12px 20px 0px rgba(0, 123, 237, 0.50);
  }
`;

const StyledNavigateGoogleForm = styled.div`
  position: absolute;
  transform-origin: left bottom;
  align-items: center;
  left: 40px;
  bottom: 101px;
  display: flex;
  z-index: 999;

  .button {
    border-radius: 16px;
    width: 80px;
    height: 80px;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 0.3s;
    opacity: 0;
  }

  .image-show {
    opacity: 1;
  }

  .non-hover-ani {
    animation: ${saraBeforeShadowAni} 1.5s infinite alternate ease-in-out;
  }

  .hover-ani {
    border: 1px solid rgba(0, 123, 237, 0.6);
    animation: ${afterShadowAni} 0.8s infinite alternate ease-in;
  }

  .text-show {
    transition: all 0.3s;
    display: none !important;
  }

  .move-hori {
    animation: ${moveHoriAni} 0.8s infinite alternate ease-in;
  }

  .move-updown {
    margin-left: 15px;
    animation: ${updownAni} 1.5s infinite alternate ease-in-out;
  }
`;

export default StyledNavigateGoogleForm;
