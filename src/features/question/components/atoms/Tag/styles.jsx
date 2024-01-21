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

  background-color: ${({ $isActive, type }) =>
    $isActive ? Theme.color.white : type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary};

  ${Theme.deviceSize.small} {
    transform: translate(0%);
    border-radius: 12px;
    left: 92.5% !important;
    box-shadow: 0px 4px 12px 0px rgba(0, 123, 237, 0.2);
  }
`;

export default StyledTag;
