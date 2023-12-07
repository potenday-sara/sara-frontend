import styled from 'styled-components';

const StyledChatLoading = styled.div`
  border-radius: 40px;
  overflow: hidden;
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || 'auto'};
  margin: ${({ m }) => m || null};
`;

export default StyledChatLoading;
