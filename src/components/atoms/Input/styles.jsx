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

  &::placeholder {
    color: ${Theme.color.gray};
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
  }
`;

export default StyledInput;
