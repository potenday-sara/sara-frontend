import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledFooter = styled.footer`
  background: transparent;
  height: 64px;
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr;

  /* justify-content: center; */
  align-items: center;
  column-gap: 24px;
  margin-left: 40px;
  .texts {
    display: flex;
    flex-direction: column;
    gap: 4px;
    span {
      font-weight: 500;
      font-size: 10px;
      color: #0000004d;
    }
  }

  ${Theme.deviceSize.small} {
    min-width: auto;
    margin-left: 24px;
  }
`;

export default StyledFooter;
