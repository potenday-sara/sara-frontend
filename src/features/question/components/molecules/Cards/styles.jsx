import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledCards = styled.main`
  width: 100%;
  height: 458px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  gap: 8px;

  ${Theme.deviceSize.small} {
    height: auto;
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

export default StyledCards;
