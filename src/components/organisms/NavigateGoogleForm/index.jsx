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
  return (
    <StyledNavigateGoogleForm type={type}>
      <div ref={ref}>
        <Button
          ref={ref}
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

      <Text
        className={`text move-updown ${isHovered ? 'text-show' : null}`}
        style={textStyle}
        color={Theme.color.white}
        size="14px"
        bold="500"
        label="Sara 써보니 어때?"
      />
      <Text
        className={`text move-hori ${isHovered ? null : 'text-show'}`}
        style={textStyle}
        color={Theme.color.white}
        size="14px"
        bold="500"
        label="의견 남겨달라샤!"
      />
    </StyledNavigateGoogleForm>
  );
}

NavigateGoogleForm.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};

export default NavigateGoogleForm;
