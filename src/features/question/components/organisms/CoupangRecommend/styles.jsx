import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledCoupoangRecommend = styled.section`
  width: 372px;
  position: relative;
  height: fit-content;
  background-color: white;
  margin-right: auto;
  border-radius: 24px;
  padding: 16px 16px 40px;
  overflow: hidden;
  box-shadow: 0px 4px 24px 0px
    ${({ $type }) => ($type === 'sara' ? 'rgba(0, 123, 237, 0.1)' : 'rgba(239, 43, 0, 0.10)')};

  ${Theme.deviceSize.medium} {
    width: 320px;
    border-radius: 20px;
    margin: 0 auto;
  }
  ${Theme.deviceSize.small} {
    width: 362px;
  }

  .title {
    margin-bottom: 12px;
    ${Theme.deviceSize.large} {
      height: 44px;
    }
    ${Theme.deviceSize.medium} {
      height: 36px;
    }
    ${Theme.deviceSize.small} {
      margin-bottom: 8px;
    }
  }

  .title-text {
    ${Theme.deviceSize.medium} {
      font-size: 14px;
    }
  }

  .bottom {
    width: 100%;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: ${({ $type }) => ($type === 'sara' ? 'rgba(0, 123, 237, 0.05)' : '#fdeae5')};
    left: 0px;
    bottom: 0px;
  }

  form {
    ${Theme.deviceSize.large} {
      height: 44px;
      width: 168px;
    }
    ${Theme.deviceSize.medium} {
      height: 36px;
      width: 135px;
    }
    input {
      background-color: #fff;
      color: #007bed;
      ${Theme.deviceSize.large} {
        height: 44px;
        font-size: 16px;
      }
      ${Theme.deviceSize.medium} {
        height: 36px;
        font-size: 14px;
      }
      font-family: Pretendard;
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
    ${Theme.deviceSize.large} {
      width: 168px;
      font-size: 16px;
    }
    ${Theme.deviceSize.medium} {
      width: 135px;
      font-size: 14px;
    }
  }
`;

export default StyledCoupoangRecommend;
