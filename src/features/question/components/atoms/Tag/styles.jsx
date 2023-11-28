import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledTag = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  transform: translate(-100%);

  background-color: ${({ isActive, type }) =>
    isActive
      ? Theme.color.white
      : type === 'sara'
        ? Theme.color.saraSecondary
        : Theme.color.maraSecondary};
`;

export default StyledTag;
