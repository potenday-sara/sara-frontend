import React from 'react';
import PropTypes from 'prop-types';
import StyledQuestionTemplate from './styles';
import QuestionSlider from '../../organisms/QuestionSlider';
import CoupangRecommend from '../../organisms/CoupangRecommend';
import { Theme } from '../../../../../Styles';
import KakaoAdFit from '../../../../../components/organisms/KaKaoAdfit.jsx';
import Navbar from '../../../../../components/organisms/Navbar/Navbar';
// import Footer from '../../../../../components/organisms/Footer';

export default function QuestionTemplate({ type, children }) {
  return (
    <StyledQuestionTemplate type={type} bg={type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary}>
      <Navbar
        style={{
          left: 0,
          top: 0,
          zIndex: 100,
          width: '100%',
          position: 'static',
          backgroundColor: type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary,
        }}
      />

      <div className="grid">
        <QuestionSlider type={type} />
        {children}
        <div className="kakao-ad-a">
          <KakaoAdFit disabled={false} height={50} width={320} unit="DAN-FK6YA47rI1C6QYtZ" />
        </div>
        <CoupangRecommend type={type} />
        <div className="kakao-ad-b">
          <KakaoAdFit disabled={false} height={250} width={300} unit="DAN-aWKDV8g54CO6nffE" />
        </div>
      </div>
      <div className="design">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="40" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1920 40H0V0H4000V40Z"
            fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
            fillOpacity="0.03"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="80" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1920 80H0V0H4000V80Z"
            fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
            fillOpacity="0.03"
          />
        </svg>
      </div>

      <div className="kakao-add">
        <KakaoAdFit unit="DAN-O3RcvViZRn5L18RJ" width={728} height={90} />
      </div>
    </StyledQuestionTemplate>
  );
}

QuestionTemplate.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  children: PropTypes.node,
};

QuestionTemplate.defaultProps = {
  children: null,
};
