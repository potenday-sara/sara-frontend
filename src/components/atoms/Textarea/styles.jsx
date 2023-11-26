import styled from 'styled-components';
import { getColorCodeByType } from '../../../Styles';

const StyledTextarea = styled.textarea`
  width: ${({ w }) => (w ? w : '100%')};
  height: ${({ h }) => (h ? h : 'auto')};

  /* padding: 24px 32px; */
  font-size: 14px;
  border-radius: 12px;
  border: 1px solid ${getColorCodeByType('gray')};
  font-family: Pretendard;
  resize: none;

  &::placeholder {
    color: ${getColorCodeByType('gray')};
    margin: 0px 10px;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
  }
`;

export default StyledTextarea;
