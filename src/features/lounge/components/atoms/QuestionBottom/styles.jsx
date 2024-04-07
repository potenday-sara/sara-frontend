import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

export const StyledQuestionBottom = styled.div`
  font-size: 12px;
  display: inline-flex;
  margin-top: 16px;
  justify-content: space-between;
  .question-date {
    color: ${() => Theme.color.gray};
  }
`;

export const StyledQuestionInfo = styled.div`
  display: inline-flex;
  p {
    margin-right: 8px;
  }
  .question-icon {
    margin-right: 3px;
  }
`;
