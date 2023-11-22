import styled from 'styled-components';

const StyledQuestionTemplate = styled.main`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 368px auto;
  gap: 54px;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  min-height: calc(100vh - 64px);
  background-size: cover;
`;

export default StyledQuestionTemplate;