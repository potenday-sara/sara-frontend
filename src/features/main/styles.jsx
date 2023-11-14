import styled from 'styled-components';

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: minmax(512px, 4fr) minmax(220px, 1fr) minmax(
      512px,
      4fr
    );
  min-height: calc(100vh - 64px);
  width: 100%;
  height: 100%;
`;

export default StyledMain;
