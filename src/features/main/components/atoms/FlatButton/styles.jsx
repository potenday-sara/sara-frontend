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
    background-color: ${({ type }) => (type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)};
  }

  &.non-activated {
    background-color: ${({ type }) => (type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary)};
  }

  ${Theme.deviceSize.small} {
    height: 56px;
    padding: 10px;
  }

  ${Theme.deviceSize.small} {
    height: 40px;
  }
`;

export default StyledFlatButton;
