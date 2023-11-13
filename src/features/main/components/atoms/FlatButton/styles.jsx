import styled from 'styled-components';
import { getColorCodeByType } from '../../../../../Styles';

const StyledFlatButton = styled.button`
  width: 100%;
  aspect-ratio: 8 / 5;
  outline: none;
  border: 0px;
  padding: 20px 35px;
  background-color: ${() => getColorCodeByType('saraPrimary')};
`;

export default StyledFlatButton;
