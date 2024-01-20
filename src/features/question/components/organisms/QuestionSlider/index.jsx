import PropTypes from 'prop-types';
import React from 'react';
import { Theme } from '../../../../../Styles';
import Text from '../../../../../components/atoms/Text';
import useResize from '../../../../../hooks/useResize';
import useQuestions from '../../../hooks/useQuestions';
import HorizonSlider from '../../molecules/HorizonSlider';
import Slider from '../../molecules/Slider';
import StyledQuestionSlider from './styles';

export default function QuestionSlider({ type }) {
  const { data: OtherQuestions, isLoading: QuestionLoading } = useQuestions(type);
  const { sizeType } = useResize();
  return (
    <StyledQuestionSlider>
      <Text
        className="question-slider-title"
        label={type === 'sara' ? '다른 사람들은 어떠샤?' : '다른 사람들은 어떠먀?'}
        color={Theme.color.black}
        bold="700"
      />
      {sizeType === 'medium' && !QuestionLoading && <Slider datas={OtherQuestions} type={type} />}
      {sizeType === 'small' && !QuestionLoading && <HorizonSlider datas={OtherQuestions} type={type} />}
    </StyledQuestionSlider>
  );
}

QuestionSlider.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
