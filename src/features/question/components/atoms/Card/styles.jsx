import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledCard = styled.div`
  width: 140px;
  cursor: pointer;
  height: 225px;
  border-radius: 16px;
  padding: 8px;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .CoupangCard__Item {
    ${Theme.deviceSize.small} {
      width: 218px;
    }
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
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
      color: #333;
      font-weight: 700;
    }
    .rocket {
      width: 60.8px;
      height: 16px;
      background-size: contain;
    }
  }

  .image {
    width: 124px;
    height: 124px;
    background-size: cover;
    border-radius: 8px;
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
  }

  .rocket {
    width: 68px;
    height: 18px;
  }
`;

export default StyledCard;
