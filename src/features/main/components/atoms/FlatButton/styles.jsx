import styled from 'styled-components';
import { getColorCodeByType } from '../../../../../Styles';

const StyledFlatButton = styled.button`
  width: 100%;
  aspect-ratio: 8 / 5;
  outline: none;
  border: 0px;
  padding: 20px 35px;
  background-color: ${({ $type }) =>
    getColorCodeByType($type === 'sara' ? 'saraPrimary' : 'maraPrimary')};

  &.activated {
    opacity: 1;
  }

  &.non-activated {
    opacity: 0.4;
  }
`;

export default StyledFlatButton;
