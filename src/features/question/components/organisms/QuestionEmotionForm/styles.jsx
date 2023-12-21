import styled from 'styled-components';

const StyledFeedback = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .disabled {
    opacity: 0.8;
    cursor: none;
  }
`;

export default StyledFeedback;
