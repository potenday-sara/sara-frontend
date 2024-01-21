import styled, { keyframes } from 'styled-components';
import { Theme } from '../../../../../Styles';

const vibration = keyframes`
  from {
    transform: rotate(1.5deg);
  }
  to {
    transform: rotate(-1.5deg);
  }
`;

const StyledSaramaraForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(20px + 4 * (100vw - 1200px) / 750);

  .type-logo {
    width: 55%;
  }

  .character-logo {
    min-width: 180px;
    max-width: 212px;
    width: 55%;
  }
  .form {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    grid-template-rows: 21px 72px 21px 106px 56px;
    grid-auto-flow: row;
    .input {
      margin-top: 8px;
      grid-column: 1 / 3;
      margin-bottom: 16px;
    }

    .button {
      grid-column: 1 / 3;
    }

    textarea {
      padding: 24px 32px;
    }

    p {
      white-space: nowrap !important;
    }
  }

  .alert {
    /* height: 13px; */
    color: #ff2e00;
    font-weight: 500;
    text-align: right;
  }

  .input-error {
    &::placeholder {
      color: #f00;
    }
    color: #f00;
    outline: 1px solid #f00;
  }

  .failed-submit {
    animation: ${vibration} 0.1s alternate;
  }
  ${Theme.deviceSize.medium} {
    .form {
      grid-template-rows: 19px 67px 19px 88px 56px;

      input {
        margin-bottom: 12px;
        height: 49px;
      }

      textarea {
        height: 66px;
        padding: 16px 32px;
      }
    }

    .button {
      border-radius: 10px;
    }
  }

  ${Theme.deviceSize.small} {
    gap: 8px;
    .type-logo {
      width: 134px;
    }

    .character-logo {
      width: 148px;
    }
    .form {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 2fr;
      grid-auto-flow: row;
      .input {
        margin-top: 8px;
        grid-column: 1 / 3;
      }

      .button {
        grid-column: 1 / 3;
      }
    }

    .alert {
      /* height: 13px; */
      color: #ff2e00;
      font-weight: 500;
      text-align: right;
    }

    .input-error {
      &::placeholder {
        color: #f00;
      }
      color: #f00;
      outline: 1px solid #f00;
    }

    .failed-submit {
      animation: ${vibration} 0.1s alternate;
    }
  }
`;

export default StyledSaramaraForm;
