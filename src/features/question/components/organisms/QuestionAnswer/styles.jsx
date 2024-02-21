import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledQuestionAnswer = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
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
    gap: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button-wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 79px;
    gap: 8px;
    .title {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6px;
      p {
        line-height: 95%;
      }
    }
  }
  .answer-bottom {
    width: 100%;
    margin: 0px 0px 0px;
    padding: 10px;
    color: #999;
    font-size: 13px;
    border: 1px solid ${({ type }) => (type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary)};
    border-radius: 14px;
    background-color: ${({ type }) => (type === 'sara' ? '#fafcff' : '#fffbfa')};
  }

  .share {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    .buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .share-button-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 4px;
        .share-button {
          width: 56px;
          height: 56px;
        }
      }
    }
  }

  ${Theme.deviceSize.large} {
    .button-wrap {
      .button {
        border-radius: 12px;
        /* height: 52px; */
      }
    }
  }
  ${Theme.deviceSize.medium} {
    .button-wrap {
      .button {
        border-radius: 10px;
        /* height: 48px; */
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
