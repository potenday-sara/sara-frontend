import React from 'react';
import StyledNavigateGoogleForm from './styles';
import Text from '../../atoms/Text';
import { Theme } from '../../../Styles';
// import PropTypes from 'prop-types'
import SaraNonHover from '../../../images/logos/saranonHover.png';

function NavigateGoogleForm() {
  return (
    <StyledNavigateGoogleForm>
      <div className="icon sara-nonhover" style={{ backgroundImage: `url(${SaraNonHover}` }} />
      <Text color={Theme.color.black} size="16px" bold="500" label="써보니 어때?" />
    </StyledNavigateGoogleForm>
  );
}

export default NavigateGoogleForm;
