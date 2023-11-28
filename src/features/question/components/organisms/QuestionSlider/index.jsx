import React from 'react';
import PropTypes from 'prop-types';
import StyledQuestionSlider from './styles';
import Text from '../../../../../components/atoms/Text';
import Slider from '../../molecules/Slider';
import useQuestions from '../../../hooks/useQuestions';

export default function QuestionSlider({ type }) {
  const { data: OtherQuestions, isLoading: QuestionLoading } = useQuestions();

  return (
    <StyledQuestionSlider>
      <Text
        style={{
          marginBottom: 7,
        }}
        label="다른 사람들은 어떤 고민이 있을까?"
        bold="lg"
        size="lg"
      />
      {!QuestionLoading && <Slider datas={OtherQuestions} type={type} />}
    </StyledQuestionSlider>
  );
}

QuestionSlider.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
