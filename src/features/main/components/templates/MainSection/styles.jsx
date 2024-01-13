import styled, { css } from 'styled-components';
import { Theme } from '../../../../../Styles';

/**
 * $type(sara, mara) 값을 받아 css를 리턴하는 함수입니다
 */
const getSectionCssByType = ($type) => {
  if ($type === 'sara')
    return css`
      background: ${Theme.color.saraSecondary};
      .section-box {
        margin: auto 0px auto auto;
      }
    `;
  return css`
    background: ${Theme.color.maraSecondary};
    .section-box {
      margin: auto auto auto 0px;
    }
  `;
};

const StyledMainSection = styled.section`
  height: 100%;
  ${({ $type }) => getSectionCssByType($type)}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* .section-box {
  } */

  @media screen and (${(props) => props.theme.desktopLarge}) {
    align-items: center;
  }

  ${Theme.deviceSize.small} {
    .main-button {
      width: 80% !important;
      border-radius: 16px !important;
      max-width: 400px;
    }
  }
`;

export default StyledMainSection;
