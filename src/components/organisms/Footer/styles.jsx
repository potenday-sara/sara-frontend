import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledFooter = styled.footer`
  background: transparent;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  p {
    font-weight: 500;
    font-size: 10px;
    color: #0000004d;
  }
  ${Theme.deviceSize.small} {
    min-width: auto;
  }
`;

export default StyledFooter;
