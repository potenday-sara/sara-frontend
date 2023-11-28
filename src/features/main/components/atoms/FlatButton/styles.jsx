import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledFlatButton = styled.button`
  cursor: pointer;
  width: 100%;
  aspect-ratio: 8 / 5;
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
`;

export default StyledFlatButton;
