import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledCard = styled.div`
  cursor: pointer;
  height: 225px;
  border-radius: 16px;
  padding: 8px;
  border: 1px solid #eee;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .CoupangCard__Item {
    ${Theme.deviceSize.small} {
      width: 218px;
      font-weight: 600;
    }
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
    line-height: 17px;
  }

  ${Theme.deviceSize.large} {
    width: 164px;
    height: 261px;
  }
  ${Theme.deviceSize.medium} {
    width: 140px;
    height: 225px;
    border-radius: 10px;
  }

  ${Theme.deviceSize.small} {
    width: 330px;
    height: 96px;
    flex-direction: row;
    padding: 10px;
    gap: 16px;
    && .contents {
      width: auto;
      gap: 6px;
    }
    .CoupangCard__Price {
      font-family: Pretendard;
      color: #666;
      font-weight: 700;

      ${Theme.deviceSize.medium} {
        color: 14px;
      }
    }
    .rocket {
      width: 60.8px;
      height: 16px;
      background-size: contain;
    }
  }

  .image {
    background-size: cover;
    border-radius: 8px;
    ${Theme.deviceSize.large} {
      width: 140px;
      height: 140px;
    }
    ${Theme.deviceSize.medium} {
      width: 124px;
      height: 124px;
      border: 8px;
    }
    ${Theme.deviceSize.small} {
      width: 76px;
      height: 76px;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }

  .contents {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 4px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .rocket {
    width: 68.4px;
    height: 18px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

export default StyledCard;
