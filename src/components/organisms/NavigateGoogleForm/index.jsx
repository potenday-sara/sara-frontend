import React from 'react';
import PropTypes from 'prop-types';
import StyledNavigateGoogleForm from './styles';
import Text from '../../atoms/Text';
import { Theme } from '../../../Styles';
import SaraBeforeHover from '../../../images/logos/hoverCharacter/saraBeforeHover.png';
import SaraHover from '../../../images/logos/hoverCharacter/saraHover.png';
import MaraBeforeHover from '../../../images/logos/hoverCharacter/maraBeforeHover.png';
import MaraHover from '../../../images/logos/hoverCharacter/maraHover.png';
import Button from '../../atoms/Button';
import useHover from '../../../hooks/useHover';
import { useOnboard } from '../../../features/question/conxtex/OnboardContext';

const getText = (type, hovered) => {
  if (type === 'sara') {
    return hovered ? '의견 남겨달라샤!' : 'Sara 써보니 어때?';
  }
  return hovered ? '의견 남겨달라먀!' : 'Mara 써보니 어때?';
};

function NavigateGoogleForm({ type }) {
  const textStyle = {
    padding: 10,
    backgroundColor: type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    height: 37,
  };
  const googleFormButtonStyle = {};

  const [ref, isHovered] = useHover();
  const { forthItem } = useOnboard();
  return (
    <StyledNavigateGoogleForm type={type}>
      <div ref={forthItem}>
        <div ref={ref}>
          <Button
            onClick={() => window.open('https://forms.gle/wZ6r3Vo5E4vBLsGz7')}
            className={isHovered ? 'hover-ani' : 'non-hover-ani'}
            style={googleFormButtonStyle}
            bg={type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary}
          >
            <div
              className={`icon sara ${isHovered ? null : 'image-show'}`}
              style={{ backgroundImage: `url(${type === 'sara' ? SaraBeforeHover : MaraBeforeHover}` }}
            />
            <div
              className={`icon icon-hover sara ${isHovered ? 'image-show' : null}`}
              style={{ backgroundImage: `url(${type === 'sara' ? SaraHover : MaraHover}` }}
            />
          </Button>
        </div>
      </div>

      <Text
        className={`text  ${isHovered ? 'move-hori' : 'move-updown'}`}
        style={textStyle}
        color={Theme.color.white}
        size="14px"
        bold="500"
        label={getText(type, isHovered)}
      />
    </StyledNavigateGoogleForm>
  );
}

NavigateGoogleForm.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};

export default NavigateGoogleForm;
