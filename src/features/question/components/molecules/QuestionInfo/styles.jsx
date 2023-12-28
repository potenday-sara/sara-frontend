import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledQuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Theme.deviceSize.large} {
    gap: 4px;
    .title {
      font-family: Pretendard;
      font-size: 16px;
      font-weight: 700;
      line-height: 16px; /* 100% */
    }
    .item {
      font-size: 24px;
      font-weight: 700;
      line-height: 140%; /* 33.6px */
    }
    .content {
      font-family: Pretendard;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%; /* 19.5px */
    }
  }

  ${Theme.deviceSize.medium} {
    gap: 2px;
    .title {
      color: #666;
      /* 14_bold_title */
      font-size: 14px;
      font-weight: 700;
      line-height: 14px; /* 100% */
    }
    .item {
      text-align: center;
      /* 20_title */
      font-size: 20px;
      font-weight: 700;
      line-height: 140%; /* 28px */
    }
    .contents {
      color: #666;
      text-align: center;
      /* 14_medium */
      font-size: 14px;
      font-weight: 500;
      line-height: 140%; /* 19.6px */
    }
  }
`;

export default StyledQuestionInfo;
