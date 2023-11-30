import React from 'react';
import PropTypes from 'prop-types';
import StyledQuestionTemplate from './styles';
import QuestionSlider from '../../organisms/QuestionSlider';
import CoupangRecommend from '../../organisms/CoupangRecommend';
import { Theme } from '../../../../../Styles';
import Footer from '../../../../../components/organisms/Footer';

export default function QuestionTemplate({ type, children }) {
  return (
    <StyledQuestionTemplate type={type} bg={type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary}>
      <div className="grid">
        <QuestionSlider type={type} />
        {children}
        <CoupangRecommend type={type} />
      </div>
      <div className="design">
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="40" viewBox="0 0 1920 40" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1920 40H0V0H1920V40Z"
            fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
            fillOpacity="0.03"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="80" viewBox="0 0 1920 80" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1920 80H0V0H1920V80Z"
            fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
            fillOpacity="0.03"
          />
        </svg>
      </div>
      <Footer
        style={{
          gridArea: '2 / 1 / 3 / 4',
        }}
      />
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
