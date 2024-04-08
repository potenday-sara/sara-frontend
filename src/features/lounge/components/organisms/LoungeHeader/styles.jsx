import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

export const StyledLoungeHeader = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${() => Theme.color.white};
  p {
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 700;
  }
`;

export const StyledLoungeHeaderButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: ${() => Theme.color.white};
  position: absolute;
  left: 16px;
`;
