import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

export const StyledQuestionCard = styled.div`
  height: 108px;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  font-family: Pretendard;
  ${(props) => {
    if (props.$sortType !== 'like' || props.$rank > 3)
      return `border-color: ${Theme.color.gray}; background-color: ${Theme.color.white};`;
    switch (props.$rank) {
      case 1:
        return 'background-color: #fffaed; color: #846515; border-color: #FFCD4D;';
      case 2:
        return 'background-color: #fafbfc; color: #285983; border-color: #CFD7DE;';
      case 3:
        return 'background-color: #f7f0e8; color: #B16D1C; border-color: #B16D1C;';
      default:
        return '';
    }
  }}
`;

export const StyledQuestionName = styled.div`
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  height: 22px;
  gap: 6px;
`;

export const StyledRanknumber = styled.div`
  border-radius: 50%;
  width: 22px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  text-align: center;
  ${(props) => {
    switch (props.$rank) {
      case 1:
        return 'background-color: #FFCD4D; color: #846515;';
      case 2:
        return 'background-color: #CFD7DE; color: #285983;';
      case 3:
        return 'background-color: #B16D1C; color: #FAD9B3;';
      default:
        return '';
    }
  }}
`;

export const StyledReason = styled.div`
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  margin-top: 10px;
  padding-bottom: 16px;
`;

export const StyledQuestionBottom = styled.div`
  height: 14px;
`;
