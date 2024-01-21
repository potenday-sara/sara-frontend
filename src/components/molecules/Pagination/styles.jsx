import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledPagination = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  ${Theme.deviceSize.large} {
    gap: 8px;
  }
  ${Theme.deviceSize.medium} {
    gap: 6px;
  }

  .disActive {
    opacity: 0.5;
  }
  .button {
    width: 24px;
    height: 24px;
    /* ${Theme.deviceSize.large} {
      height: 33px;
    }
    ${Theme.deviceSize.medium} {
      height: 25px;
    }
    ${Theme.deviceSize.small} {
      height: 32px;
      width: 56px;
    } */
  }
`;

export default StyledPagination;
