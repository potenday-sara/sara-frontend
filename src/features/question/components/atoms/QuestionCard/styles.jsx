import styled from 'styled-components';

const StyledCard = styled.div`
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || '128px'};
  padding: 20px 20px;
  bottom: 5px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 16px;
`;

export default StyledCard;
