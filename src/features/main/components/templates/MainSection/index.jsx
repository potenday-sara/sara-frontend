import React from 'react';
import { css } from 'styled-components';
import PropTypes from 'prop-types';

import TitleBubble from '../../molecules/SpeechBubble';
import CharacterLogo from '../../atoms/CharacterLogo';
import CharacterName from '../../atoms/CharacterName';
import TextLabel from '../../../../../components/TextLabel/TextLabel';
import { useNavigate } from 'react-router';
import StyledMainSection from './styles';

const textLabelStyles = css`
  display: flex;
  flex-direction: row;
  width: 256px;
  padding: 24px;
  margin-top: 40px;
  align-items: center;
  gap: 8px;

  @media screen and (${(props) => props.theme.desktopLarge}) {
    width: 300px;
    height: 80px;
    align-items: center;
  }
`;

/**
 * Onboarding 페이지의 세션 컴포넌트입니다
 * type ('sara', 'mara') 중 하나의 값을 받아 각 테마의 맞는 컴포넌트를 리턴합니다.
 */
export default function MainSection({ $type, isSelected, ...rest }) {
  const navigate = useNavigate();
  return (
    <StyledMainSection {...rest} $type={$type}>
      <TitleBubble $type={$type} />
      <CharacterLogo $type={$type} $isSelected={$type === isSelected} />
      <CharacterName $type={$type} />
      <TextLabel
        $isBtn
        $bgColor={'white'}
        $textLabelStyles={textLabelStyles}
        $type={$type}
        $color={$type === 'sara' ? 'blue' : 'red'}
        $size={'md'}
        label={'에게 물어보기'}
        textLogo={true}
        onClick={() => navigate(`/question/${$type}`)}
      />
    </StyledMainSection>
  );
}

MainSection.propTypes = {
  $type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  setIsSelected: PropTypes.func,
  isSelected: PropTypes.any,
};

MainSection.defaultProps = {
  $type: 'sara',
};
