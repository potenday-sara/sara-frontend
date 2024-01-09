import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledQuestionAnswer = styled.section`
  width: 100%;

  .question-top {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    border-bottom: 1px solid ${(props) => props.theme.color.gray};
  }

  .question-mid {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    .title {
      justify-content: center;
      p {
        line-height: 95%;
      }
    }
  }
  .answer-bottom {
    width: 100%;
    margin: 24px 0px 0px;
  }

  ${Theme.deviceSize.large} {
    .button-wrap {
      .button {
        border-radius: 12px;
        height: 52px;
      }
    }
  }
  ${Theme.deviceSize.medium} {
    .button-wrap {
      .button {
        border-radius: 10px;
        height: 48px;
      }
    }
  }
  ${Theme.deviceSize.small} {
    .logo {
      width: 134px;
    }
  }
`;

export default StyledQuestionAnswer;
