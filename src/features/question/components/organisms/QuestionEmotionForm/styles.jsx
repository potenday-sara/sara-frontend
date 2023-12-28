import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

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

  .form:nth-child(2) {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 12px;
    background-color: #ddd;
    overflow: hidden;
    gap: 1px;
    position: relative;

    .feedback-text {
      padding: 16px;
      border-radius: 0px;
      border: 0px;
      height: 96px;

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #999;
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
  }
`;

export default StyledFeedback;
