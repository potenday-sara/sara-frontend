import styled from 'styled-components';

const StyledCard = styled.div`
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || '117px'};
  padding: 24px;
  bottom: 5px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 20px;
`;

export default StyledCard;
