import styled from 'styled-components';

const StyledMain = styled.main`
  display: grid;
  grid-template-rows: 80px auto 64px;
  grid-template-columns: minmax(512px, 4fr) minmax(220px, 1fr) minmax(512px, 4fr);
  min-height: 100vh;
  width: 100%;
`;

export default StyledMain;
