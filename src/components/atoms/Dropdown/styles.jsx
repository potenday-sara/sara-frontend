import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledDropdown = styled.div`
  position: relative;

  .selects {
    position: absolute;
    transform: translate(-50%, 10px);
    overflow-y: scroll;
    overflow-x: hidden;
    left: 50%;
    height: 110px;
    /* top: 0px; */
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 28px;
    grid-auto-rows: 30px;
    width: 120px;
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 5px 5px;
    gap: 5px;
    margin: auto;
    align-items: center;
    background-color: ${Theme.color.white};
  }
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

export default StyledDropdown;

export const StyledDropdownItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 0px 0px 6px;
  border-radius: 8px;
  background-color: white;
  color: ${Theme.color.midGray};
  word-break: keep-all;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;
