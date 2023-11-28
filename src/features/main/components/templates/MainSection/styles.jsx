import styled, { css } from 'styled-components';

/**
 * $type(sara, mara) 값을 받아 css를 리턴하는 함수입니다
 */
const getSectionCssByType = ($type) => {
  if ($type === 'sara')
    return css`
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), #007bed;
      .section-box {
        margin: auto 0px auto auto;
      }
    `;
  return css`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), #ef2b00;
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
`;

export default StyledMainSection;
