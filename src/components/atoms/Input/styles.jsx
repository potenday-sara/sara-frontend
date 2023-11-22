import styled from 'styled-components';
import { getColorCodeByType } from '../../../Styles';

const StyledInput = styled.input`
  width: ${({ w }) => (w ? w : '100%')};
  height: ${({ h }) => (h ? h : '100%')};

  text-align: center;
  font-size: 14px;
  border-radius: 12px;
  border: 1px solid ${getColorCodeByType('gray')};
  font-family: Pretendard;

  &::placeholder {
    color: ${getColorCodeByType('gray')};
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
  }
`;

export default StyledInput;
