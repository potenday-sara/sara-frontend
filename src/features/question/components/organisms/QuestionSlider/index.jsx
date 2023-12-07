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
      <Text
        style={{
          marginBottom: 8,
        }}
        label="다른 사람들은 어떤 고민이 있을까?"
        color={Theme.color.midGray}
        bold="700"
        size="14px"
      />
      {!QuestionLoading && <Slider datas={OtherQuestions} type={type} />}
    </StyledQuestionSlider>
  );
}

QuestionSlider.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
