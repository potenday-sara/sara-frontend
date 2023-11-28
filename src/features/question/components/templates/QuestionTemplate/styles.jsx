import styled from 'styled-components';

const StyledQuestionTemplate = styled.main`
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 402px 368px 410px;
  gap: 54px;
  grid-row-gap: 10px;
  grid-auto-rows: auto;
  justify-content: center;
  background-color: ${({ bg }) => bg || null};

  align-items: center;
  width: auto;
  height: auto;
  min-height: 100vh;
  background-size: cover;
  z-index: 1;
  .design {
    position: absolute;
    gap: 30px;
    z-index: -1;
    flex-direction: column;
    display: flex;
    width: 100%;
    overflow-x: hidden;
  }
`;

export default StyledQuestionTemplate;
