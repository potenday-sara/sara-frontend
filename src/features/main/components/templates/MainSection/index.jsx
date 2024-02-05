import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import Button from '../../../../../components/atoms/Button';
import TitleBubble from '../../molecules/SpeechBubble';
import CharacterLogo from '../../atoms/CharacterLogo';
import CharacterName from '../../atoms/CharacterName';
import StyledMainSection from './styles';
import SaraMaraContext from '../../../stores/SaraMaraContext';
import Logo from '../../../../../components/atoms/Logo';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';
import Title from '../../../../../components/molecules/Title';

/**
 * Onboarding 페이지의 세션 컴포넌트입니다
 * type ('sara', 'mara') 중 하나의 값을 받아 각 테마의 맞는 컴포넌트를 리턴합니다.
 */
export default function MainSection({ type, ...rest }) {
  const { type: nowType, setSara, setMara } = useContext(SaraMaraContext);
  const navigate = useNavigate();
  return (
    <StyledMainSection
      {...rest}
      $type={type}
      className="main-section"
      onClick={type === 'sara' ? () => setSara() : () => setMara()}
    >
      <TitleBubble type={type} />
      <CharacterLogo type={type} $isType={type === nowType} />
      <CharacterName type={type} />
      <Button onClick={() => navigate(`/question/${type}`)} style={{}} bg={Theme.color.white} className="main-button">
        <Title>
          <Logo
            fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
            w="77px"
            logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'}
          />
          <Text
            label="에게 물어보기"
            color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
            size="16px"
            bold="700"
          />
        </Title>
      </Button>
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
