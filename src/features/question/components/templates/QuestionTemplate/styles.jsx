import styled from 'styled-components';

const StyledQuestionTemplate = styled.main`
  width: auto;
  min-width: 1400px;
  position: relative;
  background-color: ${({ bg }) => bg || null};

  min-height: calc(100vh - 144px);
  background-size: cover;
  z-index: 1;

  .grid {
    align-items: center;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 402px 368px 410px;
    gap: 54px;
    grid-row-gap: 10px;
    grid-auto-rows: auto;
    justify-content: center;
  }

  .design {
    position: absolute;
    gap: 30px;
    z-index: -1;
    flex-direction: column;
    overflow-x: hidden;
    display: flex;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
  }
`;

export default StyledQuestionTemplate;
