import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SaraTitleLines } from '../../../assets/SaraBubbleText.svg';
import { ReactComponent as MaraTitleLines } from '../../../assets/MaraBubbleText.svg';
import StyledCharacterChat from './styles';

/**
 * @param {['sara', 'mars']} sara, mara로 타입을 결정합니다
 * @returns {React.ReactComponentElement}
 */
export default function CharacterChat({ type }) {
  return (
    <StyledCharacterChat className="text" type={type}>
      {type === 'sara' ? <SaraTitleLines /> : <MaraTitleLines />}
    </StyledCharacterChat>
  );
}

CharacterChat.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
