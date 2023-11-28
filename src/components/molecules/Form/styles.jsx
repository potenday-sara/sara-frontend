import styled from 'styled-components';

const StyledForm = styled.form`
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || '100%'};
  margin: ${({ m }) => m || null};
`;

export default StyledForm;
