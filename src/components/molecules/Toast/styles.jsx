import styled, { keyframes } from 'styled-components';

const slideInUp = keyframes`
  from {
    transform: translate(-50%,50%);
  }

  to {
    transform: translate(-50%,-50);
  }

`;

const StyeldToast = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 999;
  padding: 9px 12px;
  border-radius: 7px;
  background-color: #424242;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${slideInUp} 0.5s;
`;

export default StyeldToast;
