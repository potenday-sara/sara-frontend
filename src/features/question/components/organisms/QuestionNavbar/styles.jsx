import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

const StyledQuestionNavbar = styled.nav`
  height: 80px;
  padding-right: 40px;
  width: 100%;
  min-width: 1200px;
  background-color: ${({ type }) => (type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary)};

  .button-wrap {
    margin-left: auto;
    justify-content: flex-end;
    display: flex;
    align-items: flex-end;
    height: 100%;
    gap: 20px;
  }

  ${Theme.deviceSize.small} {
    min-width: auto;
    display: none;
  }
`;

export default StyledQuestionNavbar;
