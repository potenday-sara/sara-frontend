import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledFlatButton = styled.button`
  cursor: pointer;
  width: 100%;
  /* height: calc(110px + 3%); */
  height: 121px;
  outline: none;
  border: 0px;
  padding: 20px 35px;

  background-color: ${({ type }) => (type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)};

  &.activated {
    opacity: 1;
  }

  &.non-activated {
    opacity: 0.4;
  }

  ${Theme.deviceSize.small} {
    height: 40px;
  }
`;

export default StyledFlatButton;
