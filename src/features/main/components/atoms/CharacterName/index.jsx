import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as NameSara } from '../../../assets/SaraNameText.svg';
import { ReactComponent as NameMara } from '../../../assets/MaraNameText.svg';
import StyledCharacterName from './styles';

/**
 * $type (sara, mara) 값에 따라 캐릭터로고를 리턴하는 함수입니다
 */
export default function CharacterName({ type }) {
  return <StyledCharacterName type={type}>{type === 'sara' ? <NameSara /> : <NameMara />}</StyledCharacterName>;
}

CharacterName.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
