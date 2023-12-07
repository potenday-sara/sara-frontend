import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledQuestionFailed = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 18px;

  .button-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 18px;
    border-bottom: 1px solid ${Theme.color.gray};
  }
`;

export default StyledQuestionFailed;
