import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledTrendLabel = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 16px 18px;
  height: 49px;
  align-items: center;
  width: 100%;
  gap: 8px;
  background-color: ${() => Theme.color.white};
  border-radius: 12px;
`;

export default StyledTrendLabel;
