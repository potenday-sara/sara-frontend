import React from 'react';
import PropTypes from 'prop-types';
import StyledQuestionSlider from './styles';
import Text from '../../../../../components/atoms/Text';
import Slider from '../../molecules/Slider';
import useQuestions from '../../../hooks/useQuestions';
import { Theme } from '../../../../../Styles';

export default function QuestionSlider({ type }) {
  const { data: OtherQuestions, isLoading: QuestionLoading } = useQuestions(type);

  return (
    <StyledQuestionSlider>
      <Text className="title" label="다른 사람들의 고민" color={Theme.color.black} bold="700" />
      {!QuestionLoading && <Slider datas={OtherQuestions} type={type} />}
    </StyledQuestionSlider>
  );
}

QuestionSlider.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
