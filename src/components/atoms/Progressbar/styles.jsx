import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledProgressbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ w }) => (w ? w : '100%')};
  height: ${({ h }) => (h ? h : '100%')};
  background-color: ${({ bg }) => (bg ? bg : Theme.color.gray)};
  position: relative;
  overflow: hidden;
  border-radius: 12px;

  .progress {
    position: absolute;
    border-radius: 12px;
    left: 0px;
    background-color: ${({ color }) => color};
    width: ${({ progress }) => (progress ? `${progress}%` : '0%')};
    height: 100%;
    transition: all 1.5s ease-in-out;
  }
`;

export default StyledProgressbar;
