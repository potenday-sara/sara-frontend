import styled from 'styled-components';

const StyledSaramaraForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .alert {
    margin-top: 8px;
    height: 13px;
    color: #ff2e00;
    font-weight: 500;
  }

  textarea + .alert {
    margin-top: 6px;
  }

  .input-error {
    &::placeholder {
      color: #ff2e00;
    }
    color: #ff2e00;
    outline: 1px solid #f00;
  }
`;

export default StyledSaramaraForm;
