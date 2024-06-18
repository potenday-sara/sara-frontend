import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledQuestionSlider = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 20px;
  background-color: ${Theme.color.white};
  box-shadow: 0px 4px 24px 0px rgba(0, 123, 237, 0.1);
  overflow: hidden;
  .question-slider-title {
    display: flex;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      opacity: 0.15;
    }

    .question-slider-button {
      position: relative;
      z-index: 101;
      cursor: pointer;
    }
  }

  ${Theme.deviceSize.large} {
    padding: 20px;
    width: 395px;
    height: 683px;
    .question-slider-title {
      color: ${({ $type }) => ($type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)};
      padding: 0px 16px;
      font-size: 20px;
      &::after {
        box-shadow: 0px 8px 12px 0px
          ${(props) => (props.$type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)};
      }
      .question-slider-text {
        display: flex;
        align-items: center;
      }
      .question-slider-button {
        margin-left: auto;
        display: flex;
        align-items: center;

        background-color: ${({ $type }) => ($type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)};
        color: ${Theme.color.midGray};
        cursor: pointer;
        padding: 10px;
      }
    }
  }
  ${Theme.deviceSize.medium} {
    width: 320px;

    .question-slider-title {
      padding: 0px;
      padding-left: 16px;

      color: ${({ $type }) => ($type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)};

      font-size: 16px;
      &::after {
        box-shadow: 0px 8px 12px 0px
          ${(props) => (props.$type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)};
      }
      .question-slider-text {
        display: flex;
        align-items: center;
      }
      .question-slider-button {
        margin-left: auto;
        display: flex;
        align-items: center;

        background-color: ${({ $type }) => ($type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)};
        color: ${Theme.color.midGray};
        cursor: pointer;
        padding: 10px;
      }
    }
  }

  ${Theme.deviceSize.small} {
    width: 100%;
    border-radius: 0px;
    height: auto;

    .question-slider-title {
      align-items: center;
      height: 33px;
      padding: 0;
      padding-left: 16px;
      color: ${({ $type }) => ($type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)};

      .question-slider-text {
        display: flex;
        align-items: center;
      }

      .question-slider-button {
        margin-left: auto;
        background-color: ${({ $type }) => ($type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)};
        color: ${Theme.color.midGray};
        cursor: pointer;
        padding: 10px;
      }

      &::after {
        box-shadow: 0px 4px 12px 0px
          ${(props) => (props.$type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)};
      }
    }
  }
`;

export default StyledQuestionSlider;
