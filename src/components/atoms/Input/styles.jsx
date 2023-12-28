import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledInput = styled.input`
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || '100%'};
  text-align: center;
  font-size: 15px;
  border-radius: 12px;
  border: 1px solid ${Theme.color.gray};
  font-family: Pretendard;
  color: ${Theme.color.black};
  font-weight: 500;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  &::placeholder {
    color: ${Theme.color.gray};
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
  }

  &.sara-inputing {
    letter-spacing: 0cm;
    font-weight: 700;
    border: 1px solid #007bed;
  }

  &.mara-inputing {
    letter-spacing: 0cm;
    font-weight: 700;
    border: 1px solid #ef2b00;
  }

  &.sara-input {
    letter-spacing: 0cm;
    &:focus {
      letter-spacing: 0cm;
      font-weight: 500;
      outline: 1.5px solid #007bed;
    }
  }

  &.mara-input {
    letter-spacing: 0cm;
    &:focus {
      letter-spacing: 0cm;
      font-weight: 500;
      outline: 1.5px solid #ef2b00;
    }
  }
`;

export default StyledInput;
