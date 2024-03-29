import { css } from '@emotion/react';
import styled from 'styled-components';
import { Theme } from '../../../../../Styles';

/**
 * $type을 바탕으로 css를 결정하는 함수입니다
 */
const getCharacterNameCss = ($type) => {
  if ($type === 'sara') {
    return css`
      width: 97px;
      height: 48px;
    `;
  }
  return css`
    width: 107px;
    height: 40px;
  `;
};

const StyledCharacterName = styled.div`
  margin-top: 40px;
  ${({ type }) => getCharacterNameCss(type)}

  ${Theme.deviceSize.small} {
    display: none;
  }
`;

export default StyledCharacterName;
