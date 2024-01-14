import styled, { css } from 'styled-components';
import getSelectedCss from '../../../styles/getSelectedStyle';
import { Theme } from '../../../../../Styles';

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

  ${Theme.deviceSize.small} {
    display: flex;
    justify-content: center;
    .sara-character {
      width: 100%;
    }

    .mara-character {
      width: 90%;
    }

    height: calc(30vw);
    max-width: 270px;

    .back {
      width: 200%;
      max-width: 90vw;
    }
  }
`;

export default StyledCharacterLogo;
