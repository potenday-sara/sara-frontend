import styled from 'styled-components';

import { Theme } from '../../../../../../Styles';

const StyledSortButton = styled.button`
  width: 74px;
  height: 44px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  background-color: transparent;
  &:before {
    display: ${(props) => (props.$selected ? 'inline-block' : 'none')};
    content: '';
    position: absolute;
    width: 40px;
    height: 2px;
    bottom: -2px;
    background-color: ${() => Theme.color.black};
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default StyledSortButton;
