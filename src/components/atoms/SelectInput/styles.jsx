import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledSelectInput = styled.form`
  cursor: pointer;
  position: relative;
  z-index: 2;
  width: 120px;
  input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    gap: 8px;
    font-size: 16px;
    color: ${({ type }) => (type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary)} !important;
    background-color: ${({ bg }) => bg || 'blue'};
    outline: none;
    border: none;
    z-index: 0;

    ${Theme.deviceSize.medium} {
      font-size: 14px;
    }
  }

  .icon {
    position: absolute;
    transform: translate(0%, -50%);
    top: 50%;
    right: 5px;
    z-index: 1;
  }
`;
export default StyledSelectInput;
