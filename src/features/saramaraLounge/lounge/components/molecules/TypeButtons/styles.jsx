import styled from 'styled-components';
import { Theme } from '../../../../../../Styles';

const StyledTypeButtons = styled.div`
  height: 54px;
  width: 100%;
  padding: 10px 16px;
  gap: 4px;
  display: flex;
  align-items: center;
  ${Theme.deviceSize.large} {
    background-color: ${() => Theme.color.white};
  }
  ${Theme.deviceSize.medium} {
    background-color: ${() => Theme.color.white};
  }
`;

export default StyledTypeButtons;
