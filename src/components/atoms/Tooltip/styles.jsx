import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledTooltip = styled.div`
  word-break: keep-all;
  width: ${({ w }) => w || null} !important;
  background-color: ${Theme.color.darkGray};
  padding: 10px;
  width: auto;
  position: absolute;
  transform: translate(-50%, 100%);
  left: 50%;
  /* top: 100%; */
  border-radius: 12px;
  top: 30%;
`;

export default StyledTooltip;
