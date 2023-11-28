import styled from 'styled-components';

const StyledLogoWrap = styled.div`
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || '100%'};
  margin: ${({ m }) => m || null};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default StyledLogoWrap;
