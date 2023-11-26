import styled from 'styled-components';

const StyledChatLoading = styled.div`
  width: ${({ w }) => (w ? w : '100%')};
  height: ${({ h }) => (h ? h : '100%')};
  margin: ${({ m }) => (m ? m : null)};
`;

export default StyledChatLoading;
