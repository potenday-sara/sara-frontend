import React from 'react';
import { ReactComponent as CharacterSara } from '../../../images/logos/sara.svg';
import { ReactComponent as CharacterMara } from '../../../images/logos/mara.svg';
import { ReactComponent as SaraBackText } from '../../../images/logos/SaraBackText.svg';
import { ReactComponent as MaraBackText } from '../../../images/logos/MaraBackText.svg';
import { css, styled } from 'styled-components';
import { getSelectedCss } from '../styles/getSelectedStyle';
import PropTypes from 'prop-types';

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

/**
 * $type (sara, mara) 값에 따라 캐릭터로고를 리턴하는 함수입니다
 */
export default function CharacterLogo({ $type, $isSelected, ...rest }) {
  return (
    <StyledCharacterLogo $isSelected={$isSelected} $type={$type} {...rest}>
      {$isSelected && $type === 'sara' ? (
        <SaraBackText className="back back-sara" />
      ) : null}
      {$isSelected && $type === 'mara' ? (
        <MaraBackText className="back back-mara" />
      ) : null}
      {$type === 'sara' ? <CharacterSara /> : <CharacterMara />}
    </StyledCharacterLogo>
  );
}

CharacterLogo.propTypes = {
  $type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  $isSelected: PropTypes.bool,
};
