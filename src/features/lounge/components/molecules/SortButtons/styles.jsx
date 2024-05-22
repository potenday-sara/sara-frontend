import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledTypeButtons = styled.div`
  height: 46px;
  width: 100%;
  gap: 4px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${() => Theme.color.gray};
  ${Theme.deviceSize.large} {
    background-color: ${() => Theme.color.white};
  }
  ${Theme.deviceSize.medium} {
    background-color: ${() => Theme.color.white};
  }
`;

export default StyledTypeButtons;
