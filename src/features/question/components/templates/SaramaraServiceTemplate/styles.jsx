import styled from 'styled-components';

const StyledSaramaraServiceTemplate = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  z-index: 10;
  width: 100%;
  height: auto;
  min-height: 400px;

  margin: auto;
  padding: 40px 24px;
  background-color: white;
  border-radius: 24px;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);

  .tag {
    background-color: red;

    left: 0px;
  }
`;

export default StyledSaramaraServiceTemplate;
