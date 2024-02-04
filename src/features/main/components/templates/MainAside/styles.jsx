import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledMainAside = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  .aside-top {
    margin: 40px 0px;
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
