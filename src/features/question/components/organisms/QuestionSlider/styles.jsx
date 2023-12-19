import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledQuestionSlider = styled.section`
  border-radius: 20px;
  box-shadow: 0px 4px 24px 0px rgba(0, 123, 237, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${Theme.color.white};
  overflow: hidden;
  width: 316px;

  .title {
    padding: 20px 16px;
    font-size: 16px;
  }
`;

export default StyledQuestionSlider;
