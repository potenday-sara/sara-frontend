import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledPagination = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;

  .disActive {
    opacity: 0.5;
  }
  .button {
    width: 32px;
    ${Theme.deviceSize.small} {
      width: 56px;
    }
  }
`;

export default StyledPagination;
