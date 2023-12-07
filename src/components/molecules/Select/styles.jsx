import styled from 'styled-components';
import { Theme } from '../../../Styles';

const StyledSelect = styled.div`
  position: relative;
  width: auto;
  /* height: 100px; */
  .selects {
    position: absolute;
    transform: translate(0, 10%);
    /* top: 0px; */
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 30px;
    grid-auto-rows: 30px;
    width: 100%;
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 5px 5px;
    gap: 5px;
    align-items: center;
    overflow: hidden;
    background-color: ${Theme.color.white};
    .option {
      width: 100%;
      height: 100%;
      padding: 12px 12px 8px 8px;
      border-radius: 8px;
      background-color: white;
      color: ${Theme.color.midkGray};
      font-family: Pretendard;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: #ddd;
      }
    }
    /* width: 100px;
    height: 100px; */
  }
`;
export default StyledSelect;
