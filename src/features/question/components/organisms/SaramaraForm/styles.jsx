import styled, { keyframes } from 'styled-components';

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
  .form {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr;
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
  }

  .alert {
    /* height: 13px; */
    color: #ff2e00;
    font-weight: 500;
    text-align: right;
  }

  .input-error {
    &::placeholder {
      color: #ff2e00;
    }
    color: #ff2e00;
    outline: 1px solid #f00;
  }

  .failed-submit {
    animation: ${vibration} 0.1s alternate;
  }
`;

export default StyledSaramaraForm;
