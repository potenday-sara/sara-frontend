import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

export const StyledCommunityQuestionCards = styled.div`
  > div {
    background-image: none;
    height: 100%;
    width: 100%;
    padding: 0;
  }
  > p {
    color: ${Theme.color.black};
    font-size: 14px;
    font-family: Pretendard;
    font-weight: 700;
  }
  padding: 24px 0;
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.div``;
