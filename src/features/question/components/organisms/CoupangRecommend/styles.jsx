import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledCoupoangRecommend = styled.section`
  width: 320px;
  position: relative;
  height: 634.11px;
  background-color: white;
  margin-right: auto;
  border-radius: 24px;
  padding: 16px 16px 40px;
  overflow: hidden;

  ${Theme.deviceSize.medium} {
    margin: 0 auto;
    height: auto;
  }
  ${Theme.deviceSize.small} {
    width: 362px;
  }

  .bottom {
    width: 100%;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: rgba(0, 123, 237, 0.05);
    left: 0px;
    bottom: 0px;
  }

  form {
    width: 135px;
    height: 36px;
    input {
      background-color: #fff;
      color: #007bed;
      height: 36px;
      font-family: Pretendard;
      font-size: 14px;
      font-weight: 700;
      border: 1px solid #ddd;
    }
    .icon {
      path {
        stroke: #ddd;
      }
    }
  }

  && .selects {
    width: 135px;
  }
`;

export default StyledCoupoangRecommend;
