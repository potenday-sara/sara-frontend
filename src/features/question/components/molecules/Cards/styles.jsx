import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledCards = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  gap: 8px;

  ${Theme.deviceSize.large} {
    height: 530px;
  }
  ${Theme.deviceSize.medium} {
    height: 458px;
  }
  ${Theme.deviceSize.small} {
    height: auto;
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

export default StyledCards;
