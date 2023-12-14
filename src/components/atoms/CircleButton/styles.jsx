import styled from 'styled-components';

const StyledCircleButton = styled.button`
  width: ${({ w }) => w || '100px'};
  height: ${({ h }) => h || '100px'};
  border-radius: 50%;
  outline: none;
  border: none;
`;
export default StyledCircleButton;
