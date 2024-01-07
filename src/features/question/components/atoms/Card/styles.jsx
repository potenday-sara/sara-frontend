import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledCard = styled.div`
  width: 152px;
  cursor: pointer;
  height: 239px;
  border-radius: 16px;
  padding: 16px;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;
  gap: 8px;

  ${Theme.deviceSize.small} {
    width: 332px;
    height: 96px;
    flex-direction: row;
    padding: 10px;
    gap: 16px;
    && .contents {
      width: auto;
      gap: 6px;
    }
    .CoupangCard__Item {
      width: 218px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-weight: 600;
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
    width: 120px;
    height: 120px;
    background-size: cover;
    ${Theme.deviceSize.small} {
      width: 76px;
      height: 76px;
      border-radius: 8px;
      background-size: cover;
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
