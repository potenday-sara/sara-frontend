import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledAnswerContent = styled.section`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    justify-content: center;
    ${Theme.deviceSize.large} {
      gap: 8px;
    }
    ${Theme.deviceSize.medium} {
      gap: 6px;
    }
    ${Theme.deviceSize.small} {
      gap: 6px;
    }
    align-items: flex-end;
    margin-bottom: 16px;
  }
`;

export default StyledAnswerContent;
