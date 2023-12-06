import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledSelectInput = styled.form`
  cursor: pointer;
  position: relative;
  z-index: 2;
  width: 100px;
  input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    gap: 8px;
    font-size: 16px;
    color: ${Theme.color.white};
    background-color: ${({ bg }) => bg || 'blue'};
    outline: none;
    border: none;
    z-index: 0;
  }

  .icon {
    position: absolute;
    transform: translate(0%, -50%);
    top: 50%;
    right: 10px;
    z-index: 1;
  }
`;
export default StyledSelectInput;
