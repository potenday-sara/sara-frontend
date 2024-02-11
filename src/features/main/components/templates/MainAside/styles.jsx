import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledMainAside = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: auto;
  .aside-top {
    margin: 0px 0px;
    margin-bottom: auto;
  }

  ${Theme.deviceSize.small} {
    .aside-top,
    .aside-head {
      width: 100%;
    }
    .activated,
    .aside-logo,
    .aside-top,
    .non-activated {
      display: none;
    }

    .aside-progress-bar {
      display: none;
    }
  }
`;

export default StyledMainAside;
