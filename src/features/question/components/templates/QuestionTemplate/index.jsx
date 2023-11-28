import React from 'react';
import PropTypes, { any } from 'prop-types';
// import ChatBoxLayout from '../../organisms/SaramarService';
import TrendItemsLayout from '../../../layouts/TrendItemsLayout';
import StyledQuestionTemplate from './styles';
import QuestionSlider from '../../organisms/QuestionSlider';
import CoupangRecommend from '../../organisms/CoupangRecommend';
import { Theme } from '../../../../../Styles';
import Footer from '../../../../../components/Footer';

export default function QuestionTemplate({ type, children }) {
  return (
    <StyledQuestionTemplate
      type={type}
      bg={
        type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary
      }
    >
      <QuestionSlider type={type} />
      {children}
      <CoupangRecommend type={type} />
      <div className="design">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="40"
          viewBox="0 0 1920 40"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1920 40H0V0H1920V40Z"
            fill={
              type === 'sara'
                ? Theme.color.saraPrimary
                : Theme.color.maraPrimary
            }
            fill-opacity="0.03"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="80"
          viewBox="0 0 1920 80"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1920 80H0V0H1920V80Z"
            fill={
              type === 'sara'
                ? Theme.color.saraPrimary
                : Theme.color.maraPrimary
            }
            fill-opacity="0.03"
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
  children: any,
};
