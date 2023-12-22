import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledCard = styled.div`
  max-width: 100%;
  padding: 24px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: 0ms;

  // 1200이상 디자인
  ${Theme.deviceSize.medium} {
    width: 320px;
    height: 124px;
    padding: 20px;
    .card-title {
      font-size: 16px;
    }
    .card-content {
      font-size: 14px;
      line-height: 135%;
    }
  }

  // 1950이상 디자인
  ${Theme.deviceSize.large} {
    width: 395px;
    height: 145px;
    padding: 28px;
    font-size: 16px;
    .card-title {
      font-size: 20px;
    }
    .card-content {
      line-height: 135%;
      font-size: 16px;
    }
  }
`;

export default StyledCard;
