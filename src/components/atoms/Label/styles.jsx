import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  height: auto;
  margin: ${({ m }) => m || null};
`;

export default StyledLabel;
