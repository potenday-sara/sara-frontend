import React from 'react';
import PropTypes from 'prop-types';
import { StyledSaramaraServiceTemplate } from './styles';
import Logo from '../../../../../components/atoms/Logo';
import SaramaraForm from '../../organisms/SaramaraForm';
import ChatLoading from '../../atoms/ChatLoading.jsx';
import Progressbar from '../../../../../components/atoms/Progressbar/index.jsx';
import { Theme } from '../../../../../Styles.js';
import Text from '../../../../../components/atoms/Text/index.jsx';
import zIndex from '@mui/material/styles/zIndex.js';

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
      <ChatLoading type={type} w={'212px'} />
      <Progressbar
        label={
          <Text
            style={{ zIndex: 2 }}
            label={'남은시간'}
            bold={'sm'}
            color={'white'}
            size={'xs'}
          />
        }
        color={
          type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary
        }
        w={'212px'}
        h={'20px'}
      />
    </StyledSaramaraServiceTemplate>
  );
}

SaramaraServiceTemplate.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
};
