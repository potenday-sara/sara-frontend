import styled, { css } from 'styled-components';
import { getSelectedCss } from '../../../styles/getSelectedStyle';

/**
 * $type을 바탕으로 css를 결정하는 함수입니다
 */
const getCharacterLogoCss = ($type) => {
  if ($type === 'sara') {
    return css`
      width: 214px;
      height: 180px;
    `;
  } else {
    return css`
      width: 180px;
      height: 180px;
    `;
  }
};

const StyledCharacterLogo = styled.div`
  margin-top: 45px;
  ${({ $type }) => getCharacterLogoCss($type)}
  ${({ $isSelected }) => getSelectedCss($isSelected)}
  .back {
    position: absolute;
  }
`;

export default StyledCharacterLogo;
