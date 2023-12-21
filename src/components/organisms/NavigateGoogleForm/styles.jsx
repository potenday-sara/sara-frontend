import styled, { keyframes } from 'styled-components';

const saraUpdown = keyframes`
  0% {
    margin-top: 0px;
    box-shadow: 0px 12px 20px 0px rgba(0, 123, 237, 0.30);
    opacity: 1;
  }

  100% {
    opacity: 0;
    margin-top: 20px;
  }
`;
const maraUpdown = keyframes`
  0% {
    margin-top: 0px;
    filter: drop-shadow(0px 6px 10px rgba(239, 43, 0, 0.20));
    opacity: 1;
  }

  100% {
    opacity: 0;
    margin-top: 20px;

  }
`;

const saraMoveHori = keyframes`
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
const maraMoveHori = keyframes`
  0% {
    margin-top: 0px;
    margin-left: 15px;
    filter: drop-shadow(0px 6px 10px rgba(239, 43, 0, 0.20));
  }
  
  100% {
    filter: drop-shadow(0px 12px 20px rgba(239, 43, 0, 0.30));
    margin-left: 2px;
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
const maraBeforeShadowAni = keyframes`
    0% {
      filter: drop-shadow(0px 6px 10px rgba(239, 43, 0, 0.20));

  }

  100% {
    box-shadow: none
  }
`;

const saraAfterShadowAni = keyframes`
  0% {
    box-shadow: 0px 6px 10px 0px rgba(0, 123, 237, 0.20);
  }
  
  100% {
    box-shadow: 0px 12px 20px 0px rgba(0, 123, 237, 0.50);
  }
`;
const maraAfterShadowAni = keyframes`
  0% {
    filter: drop-shadow(0px 6px 10px rgba(239, 43, 0, 0.20));
  }
  
  100% {
    filter: drop-shadow(0px 12px 20px rgba(239, 43, 0, 0.30));

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
    animation: ${({ type }) => (type === 'sara' ? saraBeforeShadowAni : maraBeforeShadowAni)} 1.5s infinite alternate
      ease-in-out;
  }

  .hover-ani {
    border: 1px solid ${({ type }) => (type === 'sara' ? 'rgba(0, 123, 237, 0.6)' : 'rgba(239, 43, 0, 0.3)')};
    animation: ${({ type }) => (type === 'sara' ? saraAfterShadowAni : maraAfterShadowAni)} 0.8s infinite alternate
      ease-in;
  }

  .text-show {
    transition: all 0.3s;
    display: none !important;
  }

  .move-hori {
    animation: ${({ type }) => (type === 'sara' ? saraMoveHori : maraMoveHori)} 0.8s infinite alternate ease-in;
  }

  .move-updown {
    margin-left: 15px;
    animation: ${({ type }) => (type === 'sara' ? saraUpdown : maraUpdown)} 1.5s infinite alternate ease-in-out;
  }
`;

export default StyledNavigateGoogleForm;
