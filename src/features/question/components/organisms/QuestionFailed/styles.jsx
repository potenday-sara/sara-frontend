import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledQuestionFailed = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .failedCharacter {
    width: 60%;
    background-size: cover;
    aspect-ratio: 1 / 1;
  }
  .button-wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 5px;
    padding-bottom: 18px;
    border-bottom: 1px solid ${Theme.color.gray};
  }

  ${Theme.deviceSize.medium} {
    gap: 20px;
  }
  ${Theme.deviceSize.large} {
    gap: 24px;
  }
`;

export default StyledQuestionFailed;
