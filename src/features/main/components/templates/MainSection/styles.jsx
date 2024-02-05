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

  .main-button {
    display: 'flex';
    width: 360px;
    padding: 28px 0px;
    justify-content: 'center';
    align-items: 'flex-end';
    margin-top: 24px;
    border-radius: 16px;
    gap: 8;

    .title {
      justify-content: center;
    }
  }

  ${Theme.deviceSize.medium} {
    .main-button {
      width: 320px;
      border-radius: 12px;
      padding: 20px;
      align-items: flex-end;
    }
  }

  ${Theme.deviceSize.small} {
    padding: 10px 0px;
    .main-button {
      width: 362px;
      max-width: 90%;
      border-radius: 12px;
      padding: 16px;
      align-items: center;
    }
  }
`;

export default StyledMainSection;
