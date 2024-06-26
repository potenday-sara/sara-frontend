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
  height: auto;
  ${({ $type }) => getSectionCssByType($type)}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  /* .section-box {
  } */

  .kakao-ad-pc {
    flex-grow: 1;
    display: flex;
    align-items: end;
    margin-top: 24px;
    width: 320px;
    height: 90px;
  }

  .main-button {
    width: 360px;
    padding: 28px 0px;
    margin-top: 24px;
    border-radius: 16px;

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
    padding: 5px 0px;
    .main-button {
      width: 362px;
      max-width: 90%;
      border-radius: 12px;
      padding: 16px;
      align-items: center;
    }
  }

  ${Theme.deviceSize.small} {
    padding: 10px 0px;
    .main-button {
      width: 80% !important;
      border-radius: 16px !important;
      max-width: 400px;
      height: 40px;
      padding: 0px !important;
      align-items: center !important;
      flex-shrink: 0;
      .logo-wrap {
        width: 50px;
      }
      p {
        font-size: 12px;
      }
    }

    .kakao-ad-pc {display: none;}
    }
    .title {
      justify-content: center;
      align-items: center;
      /* height: 100%; */
    }
  }
`;

export default StyledMainSection;
