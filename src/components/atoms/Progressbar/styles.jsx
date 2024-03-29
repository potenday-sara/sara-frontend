// import { css } from '@emotion/react';
import styled from 'styled-components';

// const progressDirection = () => css`
//   left: 0%;
// `;

const StyledProgressbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || '100%'};
  background-color: #eee;
  position: relative;
  overflow: hidden;
  border-radius: 12px;

  .progress {
    position: absolute;
    border-radius: 12px;
    ${({ direction }) => `${direction} : 0%`};
    right: 0px;
    background-color: ${({ color }) => color};
    width: ${({ progress }) => (progress ? `${progress}%` : '0%')};
    height: 100%;
    transition: ${({ transition }) => transition};
  }
`;

export default StyledProgressbar;
