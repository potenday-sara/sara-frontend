import styled from 'styled-components';
import { getColorCodeByType } from '../../../../../Styles';

const StyledRealtimeTrend = styled.div`
  width: 100%;
  .realtime-title {
    box-shadow: 4px 4px 24px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    gap: 8px;
    padding: 16px;
    align-items: flex-end;
    width: 100%;
    height: 48px;
    background-color: ${({ $color }) => getColorCodeByType($color)};
  }
`;

export default StyledRealtimeTrend;
