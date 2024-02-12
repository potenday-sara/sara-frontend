import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

export const StyledTrendLabel = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 16px 18px;
  height: 49px;
  align-items: center;
  width: 100%;
  gap: 14px;
  background-color: ${() => Theme.color.white};
`;

export const StyledTrendNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ type }) => (type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)};
  background-color: ${({ type }) => (type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary)};
`;
