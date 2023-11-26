import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledButton = styled.button`
  width: ${({ w }) => (w ? w : '100%')};
  margin: ${({ m }) => (m ? m : null)};
  background-color: ${({ bg }) => (bg ? bg : Theme.color.gray)};
  height: ${({ h }) => (h ? h : null)};
  aspect-ratio: 6 / 1;
  border-radius: 16px;
  border: none;
  cursor: pointer;
`;

export default StyledButton;
