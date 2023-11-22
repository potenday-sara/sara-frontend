import React from 'react';
import PropTypes from 'prop-types';
import { StyledSaramaraServiceTemplate } from './styles';
import Logo from '../../../../../components/atoms/Logo';
import SaramaraForm from '../../organisms/SaramaraForm';
import ChatLoading from '../../atoms/ChatLoading.jsx';

export default function SaramaraServiceTemplate({ type }) {
  console.log(type);
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
      {type === 'k' && (
        <>
          <Logo
            w={'180px'}
            m={'24px'}
            logoType={
              type === 'sara' ? 'SaraCircleCharacter' : 'MaraCircleCharacter'
            }
          />
          <SaramaraForm type={type} />
        </>
      )}
      <ChatLoading type="sara" w={'212px'} />
    </StyledSaramaraServiceTemplate>
  );
}

SaramaraServiceTemplate.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
};
