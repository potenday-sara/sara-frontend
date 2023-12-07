import styled from 'styled-components';

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
  }
  .answer-bottom {
    width: 100%;
    margin: 24px 0px 0px;
  }
`;

export default StyledQuestionAnswer;
