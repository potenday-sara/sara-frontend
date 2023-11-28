import styled from 'styled-components';

const StyledQuestionLoading = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;

  .recommend-coupang {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray};
  }

  .flex {
    display: flex;
    align-items: flex-end;
  }
`;

export default StyledQuestionLoading;
