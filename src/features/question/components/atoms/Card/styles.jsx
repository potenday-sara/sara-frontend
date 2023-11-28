import styled from 'styled-components';

const StyledCard = styled.div`
  width: 175px;
  height: 272px;
  border-radius: 12px;
  padding: 12px;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;
  gap: 12px;
  .image {
    width: 151px;
    height: 151px;
    background-size: cover;
  }

  .contents {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 6px;
  }
`;

export default StyledCard;
