import styled from 'styled-components';
import { Theme } from '../../Styles';

const StyledMain = styled.main`
  display: grid;
  grid-template-rows: 80px auto 64px;
  grid-template-columns: minmax(512px, 4fr) 240px minmax(512px, 4fr);
  min-height: 100vh;
  width: 100%;

  .main-progress-bar {
    display: none;
  }
  .footer {
    grid-area: 3 / 1 / 4 / 4;
  }
  ${Theme.deviceSize.medium} {
    grid-template-columns: minmax(512px, 4fr) 208px minmax(512px, 4fr);
  }
  ${Theme.deviceSize.small} {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto;
    .mara-section {
      grid-row: 3 / 4;
    }
    .main-progress-bar {
      display: block;
      grid-row: 2 / 3;
    }
    .main-aside {
      grid-row: 4 / 5;
    }
    .navbar {
      display: none;
    }
    .footer {
      grid-row: 5 / 6;
    }
  }
`;

export default StyledMain;
