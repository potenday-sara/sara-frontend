import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledTextarea = styled.textarea`
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || 'auto'};

  font-size: 15px;
  border-radius: 12px;
  border: 1px solid ${Theme.color.gray};
  font-family: Pretendard;
  resize: none;
  color: ${Theme.color.black};
  font-weight: 500;
  line-height: 130%;

  &::placeholder {
    color: ${Theme.color.gray};
    margin: 0px 10px;
    text-align: center;
    line-height: 130%;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
  }
  &.sara-input {
    &:focus {
      outline: 1.5px solid #007bed;
    }
  }

  &.mara-input {
    &:focus {
      outline: 1.5px solid #ef2b00;
    }
  }

  &.sara-inputing {
    letter-spacing: 0cm;
    font-weight: 700;
    border: 1px solid #007bed;
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
    &:focus {
      outline: 1.5px solid #ef2b00;
    }
  }
`;

export default StyledTextarea;
