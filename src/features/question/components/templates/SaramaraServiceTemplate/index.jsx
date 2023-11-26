import React from 'react';
import PropTypes from 'prop-types';
import { StyledSaramaraServiceTemplate } from './styles';
import Logo from '../../../../../components/atoms/Logo';
import SaramaraForm from '../../organisms/SaramaraForm';
import ChatLoading from '../../atoms/LoadingLottie/index.jsx';
import Progressbar from '../../../../../components/atoms/Progressbar/index.jsx';
import { Theme } from '../../../../../Styles.js';
import Text from '../../../../../components/atoms/Text/index.jsx';
import zIndex from '@mui/material/styles/zIndex.js';
import QuestionLoading from '../../organisms/QuestionLoading/index.jsx';
import QuestionAnwser from '../../organisms/QuestionAnswer/index.jsx';

export default function SaramaraServiceTemplate({ type }) {
  return (
    <StyledSaramaraServiceTemplate>
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

      {type === 'l' && <QuestionLoading type={type} />}
      {/* <QuestionLoading type={type} /> */}
      {/* <Logo
        w={'180px'}
        m={'24px'}
        logoType={
          type === 'sara' ? 'SaraCircleCharacter' : 'MaraCircleCharacter'
        }
      /> */}
      <QuestionAnwser type={type} />
    </StyledSaramaraServiceTemplate>
  );
}

SaramaraServiceTemplate.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
};
