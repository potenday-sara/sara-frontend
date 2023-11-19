import styled from 'styled-components';
import { getColorCodeByType } from '../../../../../Styles';

const StyledTrendTitle = styled.div`
  box-shadow: 4px 4px 24px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 8px;
  padding: 16px;
  align-items: flex-end;
  width: 100%;
  height: 48px;
  background-color: ${({ $color }) => getColorCodeByType($color)};

  .logo-wrap {
    width: 80px;
  }
`;

export default StyledTrendTitle;
