import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledQuestionCards = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-direction: column;
  padding: 10px 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  background-image: linear-gradient(to top, ${(props) => props.$backColor}, ${() => Theme.color.white});
`;

export default StyledQuestionCards;
