import styled, { css } from 'styled-components';
import { Theme } from '../../../../../Styles';
import getSelectedCss from '../../../styles/getSelectedStyle';

/**
 * $type을 바탕으로 css를 결정하는 함수입니다
 */
const getCharacterLogoCss = (type) => {
  if (type === 'sara') {
    return css`
      width: 214px;
      height: 180px;
    `;
  }
  return css`
    width: 180px;
    height: 180px;
  `;
};

const StyledCharacterLogo = styled.div`
  margin-top: 45px;
  position: relative;
  ${({ type }) => getCharacterLogoCss(type)}
  ${({ $isType }) => getSelectedCss($isType)}
  .back {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
  .sara-character {
    width: 222.36px;
    height: 180px;
    ${Theme.deviceSize.medium} {
      width: 185.3px;
      height: 150px;
    }
    ${Theme.deviceSize.small} {
      width: 128px;
      height: 104px;
    }
  }

  .mara-character {
    width: 181.19px;
    height: 180px;
    ${Theme.deviceSize.medium} {
      width: 151px;
      height: 150px;
    }
    ${Theme.deviceSize.small} {
      width: 105px;
      height: 104px;
    }
  }

  ${Theme.deviceSize.small} {
    display: flex;
    margin-top: 15px;
    justify-content: center;

    max-width: 270px;
    height: 30%;
    .back {
      width: 200%;
      max-width: 90vw;
    }
  }
`;

export default StyledCharacterLogo;
