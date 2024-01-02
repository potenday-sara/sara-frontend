import styled from 'styled-components';
import { Theme } from '../../../../../Styles';
import Sara from '../../../assets/sara3d.png';
import Mara from '../../../assets/mara3d.png';

const StyledFeedback = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  .disabled {
    opacity: 0.8;
    cursor: none;
  }

  .cs-form {
    display: flex;
    width: 100%;
    overflow: hidden;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 12px;
    background-color: #ddd;
    gap: 1px;
    position: relative;

    .feedback-text {
      overflow: hidden;
      padding: 16px;
      border-radius: 0px;
      border: 0px;
      height: 96px;

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #999;
        padding-bottom: 24px;
        /* 15_medium_140 */
        text-align: left;
        display: block;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 21px */
      }
    }
    .button-wrap {
      flex-direction: row;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
      padding: 8px;
      background-color: ${Theme.color.white};
      .button {
        color: #fff;
        height: 32px;
        width: 84px;
        /* 14_bold_title */
        font-style: normal;
        font-weight: 700;
        line-height: 14px; /* 100% */
      }
      .disable-button {
        p {
          color: ${Theme.color.white} !important;
        }
      }
    }

    .toast {
      display: grid;
      align-items: center;
      column-gap: 12px;
      row-gap: 6px;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 40px 1fr;
      padding: 24px 20px;
      width: 100%;
      height: 104px;
      border-radius: 96px;
      background-color: ${Theme.color.white};
      box-shadow: ${({ type }) =>
        type === 'sara' ? '0px 4px 16px 0px rgba(0, 123, 237, 0.1)' : '0px 4px 16px 0px rgba(239, 43, 0, 0.10)'};

      p {
        line-height: 100%;
      }
      .image {
        grid-area: 1 / 1 / 3 / 2;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 100%;
        background-image: ${({ type }) => (type === 'sara' ? `url(${Sara})` : `url(${Mara})`)};
      }
    }
  }

  .is-feedback {
    overflow: visible;
    min-height: 104px;
    background-color: transparent;
    border: none;
  }

  ${Theme.deviceSize.large} {
    .cs-form {
      .feedback-text {
        height: 104px;

        &::placeholder {
          color: #999;
          font-size: 15px;
          font-style: normal;
        }
      }
      .button-wrap {
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 16px;
        padding: 8px;
        background-color: ${Theme.color.white};
        .button {
          color: #fff;
          height: 32px;
          width: 84px;
          /* 14_bold_title */
          font-style: normal;
          font-weight: 700;
          line-height: 14px; /* 100% */
        }
        .disable-button {
          p {
            color: ${Theme.color.white} !important;
          }
        }
      }

      .toast {
        display: grid;
        align-items: center;
        column-gap: 12px;
        row-gap: 6px;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 40px 1fr;
        padding: 24px 20px;
        width: 100%;
        height: 104px;
        border-radius: 96px;
        background-color: ${Theme.color.white};
        box-shadow: ${({ type }) =>
          type === 'sara' ? '0px 4px 16px 0px rgba(0, 123, 237, 0.1)' : '0px 4px 16px 0px rgba(239, 43, 0, 0.10)'};

        p {
          line-height: 100%;
        }
        .image {
          grid-area: 1 / 1 / 3 / 2;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 100%;
          height: 100%;
          background-image: ${({ type }) => (type === 'sara' ? `url(${Sara})` : `url(${Mara})`)};
        }
      }
    }

    .is-feedback {
      overflow: visible;
      min-height: 104px;
      background-color: transparent;
      border: none;
    }
  }
`;

export default StyledFeedback;
