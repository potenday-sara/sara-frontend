import React from 'react';
import PropTypes from 'prop-types';
import { StyledSaramaraServiceTemplate } from './styles';
import Logo from '../../../../../components/atoms/Logo';
import SaramaraForm from '../../organisms/SaramaraForm';

export default function SaramaraServiceTemplate({ type }) {
  return (
    <StyledSaramaraServiceTemplate>
      <Logo
        w={'162px'}
        logoType={
          type === 'sara'
            ? 'SaraTextWithCircleWithText'
            : 'MaraTextWithCircleWithText'
        }
      />
      <Logo
        w={'180px'}
        m={'24px'}
        logoType={
          type === 'sara' ? 'SaraCircleCharacter' : 'MaraCircleCharacter'
        }
      />
      <SaramaraForm />
    </StyledSaramaraServiceTemplate>
  );
}

SaramaraServiceTemplate.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
};
