import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledButton = styled.button`
  position: relative;
  width: ${({ w }) => w || '100%'};
  margin: ${({ m }) => m || null};
  background-color: ${({ bg }) => bg || Theme.color.gray};
  height: ${({ h }) => h || null};
  border-radius: 16px;
  border: none;
  cursor: pointer;
`;

export default StyledButton;
