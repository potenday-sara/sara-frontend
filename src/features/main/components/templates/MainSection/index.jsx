import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router';
import TitleBubble from '../../molecules/SpeechBubble';
import CharacterLogo from '../../atoms/CharacterLogo';
import CharacterName from '../../atoms/CharacterName';
import StyledMainSection from './styles';
import SaraMaraContext from '../../../stores/SaraMaraContext';

/**
 * Onboarding 페이지의 세션 컴포넌트입니다
 * type ('sara', 'mara') 중 하나의 값을 받아 각 테마의 맞는 컴포넌트를 리턴합니다.
 */
export default function MainSection({ type, ...rest }) {
  const { type: nowType } = useContext(SaraMaraContext);
  // const navigate = useNavigate();
  return (
    <StyledMainSection {...rest} $type={type}>
      <TitleBubble $type={type} />
      <CharacterLogo $type={type} $isSelected={type === nowType} />
      <CharacterName $type={type} />
      {/* <TextLabel
        $isBtn
        $bgColor={'white'}
        $textLabelStyles={textLabelStyles}
        $type={type}
        $color={type === 'sara' ? 'blue' : 'red'}
        $size={'md'}
        label={'에게 물어보기'}
        textLogo={true}
        onClick={() => navigate(`/question/${type}`)}
      /> */}
    </StyledMainSection>
  );
}

MainSection.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  setIsSelected: PropTypes.func,
};

MainSection.defaultProps = {
  setIsSelected: undefined,
};
