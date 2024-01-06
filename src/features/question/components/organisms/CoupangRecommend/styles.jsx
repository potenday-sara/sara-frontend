import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledCoupoangRecommend = styled.section`
  width: 344px;
  position: relative;
  height: 634.11px;
  background-color: white;
  margin-right: auto;
  border-radius: 24px;
  padding: 24px 16px 40px;
  overflow: hidden;

  ${Theme.deviceSize.medium} {
    width: calc(352px + (100vw - 1440px) / (195 - 144) * 3.5);
    margin: 0 auto;
    height: auto;
  }
  ${Theme.deviceSize.large} {
    width: 344px;
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
`;

export default StyledCoupoangRecommend;
