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

  ${Theme.deviceSize.large} {
    width: 395px;
    height: 683px;
    .question-slider-title {
      padding: 20px 16px;
      font-size: 20px;
    }
  }
  ${Theme.deviceSize.medium} {
    width: 320px;
    height: 595px;

    .question-slider-title {
      padding: 16px;
      font-size: 16px;
    }
  }

  ${Theme.deviceSize.small} {
    width: 100%;
    height: auto;
    border-radius: 0px;
    height: 81px;

    .question-slider-title {
      color: ${Theme.color.midGray};
      font-size: 13px;
      padding: 6px 16px;
    }
  }
`;

export default StyledQuestionSlider;
