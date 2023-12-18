import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledTextarea = styled.textarea`
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || 'auto'};

  font-size: 14px;
  border-radius: 12px;
  border: 1px solid ${Theme.color.gray};
  font-family: Pretendard;
  resize: none;
  color: ${Theme.color.black};
  font-weight: 700;

  &::placeholder {
    color: ${Theme.color.gray};
    margin: 0px 10px;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
  }
`;

export default StyledTextarea;
