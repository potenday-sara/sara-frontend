import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledQuestionFailed = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .logo {
    width: 179px;
  }
  .failedCharacter {
    width: 179px;
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
    .logo {
      width: 156px;
    }
    .failedCharacter {
      width: 156px;
    }
    gap: 20px;
  }
  ${Theme.deviceSize.large} {
    .logo {
      width: 134px;
    }
    .failedCharacter {
      width: 134px;
    }
    gap: 24px;
  }
`;

export default StyledQuestionFailed;
