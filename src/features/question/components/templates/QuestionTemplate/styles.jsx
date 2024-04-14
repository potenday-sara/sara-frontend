import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledQuestionTemplate = styled.main`
  width: auto;
  min-width: 1200px;
  position: relative;
  background-color: ${({ bg }) => bg || null};
  padding-bottom: 100px;
  min-height: calc(100vh - 144px);
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .kakao-ad-a {
    display: none;
  }
  .kakao-ad-b {
    display: none;
    margin: 0 auto;
  }
  .grid {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr auto 1fr;
    gap: 54px;
    grid-row-gap: 10px;
    grid-auto-rows: auto;
    justify-content: center;
  }
  .kakao-add {
    transform: translate(-50%, 0);
    position: absolute;
    left: 50%;
    bottom: 0px;
    height: 90px;
  }
  .design {
    position: absolute;
    gap: 30px;
    z-index: -1;
    flex-direction: column;
    overflow-x: hidden;
    display: flex;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
  }

  ${Theme.deviceSize.small} {
    min-width: 362px;
    .kakao-ad-a {
      display: block;
    }
    .kakao-ad-b {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-row: 6 / 7;
    }
    .kakao-add {
      display: none;
      transform: translate(-50%, 0);
      position: absolute;
      left: 50%;
      bottom: 0px;
      height: 90px;
    }
    .grid {
      width: 100%;
      justify-content: center;
      display: grid;
      grid-template-rows: auto auto auto;
      grid-template-columns: 100%;
      justify-content: center;
      gap: 8px;
    }
  }
`;

export default StyledQuestionTemplate;
