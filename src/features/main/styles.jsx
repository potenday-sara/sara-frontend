import styled from 'styled-components';
import { Theme } from '../../Styles';

const StyledMain = styled.main`
  display: grid;
  grid-template-rows: 80px auto 64px;
  grid-template-columns: minmax(512px, 4fr) 240px minmax(512px, 4fr);
  min-height: 100vh;
  width: 100%;
  ${Theme.deviceSize.medium} {
    grid-template-columns: minmax(512px, 4fr) 208px minmax(512px, 4fr);
  }
  ${Theme.deviceSize.small} {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(252px, 50vh) minmax(252px, 50vh) auto;
    .main-aside {
      grid-row: 3 / 4;
    }
    .navbar {
      display: none;
    }
    .footer {
      display: none;
    }
  }
`;

export default StyledMain;
