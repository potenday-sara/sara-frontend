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
`;

export default StyledTextarea;
