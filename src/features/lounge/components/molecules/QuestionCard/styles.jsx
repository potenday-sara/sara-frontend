import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

export const StyledQuestionCard = styled.div`
  height: 108px;
  width: 343px;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => (props.selected ? props.theme.color.black : props.theme.color.gray)};
  font-family: Pretendard;
  background-color: ${() => Theme.color.white};
`;

export const StyledQuestionName = styled.div`
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  height: 22px;
  gap: 6px;
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
