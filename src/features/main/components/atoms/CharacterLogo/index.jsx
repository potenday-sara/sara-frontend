import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CharacterSara } from '../../../../../images/logos/sara.svg';
import { ReactComponent as CharacterMara } from '../../../../../images/logos/mara.svg';
import { ReactComponent as SaraBackText } from '../../../../../images/logos/SaraBackText.svg';
import { ReactComponent as MaraBackText } from '../../../../../images/logos/MaraBackText.svg';
import StyledCharacterLogo from './styles';

/**
 * $type (sara, mara) 값에 따라 캐릭터로고를 리턴하는 함수입니다
 */
export default function CharacterLogo({ ...rest }) {
  return (
    <StyledCharacterLogo {...rest}>
      {rest.$isType && rest.type === 'sara' ? <SaraBackText className="back back-sara" /> : null}
      {rest.$isType && rest.type === 'mara' ? <MaraBackText className="back back-mara" /> : null}
      {rest.type === 'sara' ? (
        <CharacterSara className="sara-character" />
      ) : (
        <CharacterMara className="mara-character" />
      )}
    </StyledCharacterLogo>
  );
}

CharacterLogo.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  $isType: PropTypes.bool.isRequired,
};
