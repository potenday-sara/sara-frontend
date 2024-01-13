import styled from 'styled-components';
import { Theme } from '../../Styles';

const StyledMain = styled.main`
  display: grid;
  grid-template-rows: 80px auto 64px;
  grid-template-columns: minmax(512px, 4fr) minmax(220px, 1fr) minmax(512px, 4fr);
  min-height: 100vh;
  width: 100%;

  ${Theme.deviceSize.small} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;

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
