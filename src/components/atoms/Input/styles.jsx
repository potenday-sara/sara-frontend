import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledInput = styled.input`
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || '100%'};
  text-align: center;
  font-size: 14px;
  border-radius: 12px;
  border: 1px solid ${Theme.color.gray};
  font-family: Pretendard;
  color: ${Theme.color.black};
  font-weight: 700;

  &::placeholder {
    color: ${Theme.color.gray};
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 700;
  }
`;

export default StyledInput;
