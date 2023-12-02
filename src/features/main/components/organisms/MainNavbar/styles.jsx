import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledNavbar = styled.nav`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: minmax(512px, 4fr) minmax(220px, 1fr) minmax(512px, 4fr);
  height: 100%;
  width: 100%;

  .navbar-left {
    background-color: ${Theme.color.saraSecondary};
  }
  .navbar-center {
    background-color: ${Theme.color.white};
  }
  .navbar-right {
    background-color: ${Theme.color.maraSecondary};
    padding-right: 40px;
    .button-wrap {
      margin-left: auto;
      justify-content: flex-end;
      display: flex;
      align-items: flex-end;
      height: 100%;
      gap: 20px;
    }
  }
`;

export default StyledNavbar;
