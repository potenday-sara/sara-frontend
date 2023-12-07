import styled from 'styled-components';

const StyledCard = styled.div`
  width: 152px;
  height: 239px;
  border-radius: 16px;
  padding: 16px;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;
  gap: 8px;
  .image {
    width: 120px;
    height: 120px;
    background-size: cover;
  }

  .contents {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 4px;
  }

  .rocket {
    width: 68px;
    height: 18px;
  }
`;

export default StyledCard;
