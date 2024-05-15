import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../../../Styles';
import Text from '../../../../../components/atoms/Text';
import useResize from '../../../../../hooks/useResize';
import useQuestions from '../../../hooks/useQuestions';
import HorizonSlider from '../../molecules/HorizonSlider';
import Slider from '../../molecules/Slider';
import StyledQuestionSlider from './styles';
import SaraMaraContext from '../../../../main/stores/SaraMaraContext';
import KakaoAdFit from '../../../../../components/organisms/KaKaoAdfit.jsx';

const StyledKaKao = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  ${Theme.deviceSize.small} {
    display: none;
  }
`;

export default function QuestionSlider({ type }) {
  const { data: OtherQuestions, isLoading: QuestionLoading } = useQuestions(type);
  const { sizeType } = useResize();
  const { stage } = useContext(SaraMaraContext);

  return (
    <div>
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
      {stage === 'finish' && (
        <StyledKaKao>
          <KakaoAdFit unit="DAN-amZqqKQ4uWKbXppP" width="320" disabled={false} height="250" />
        </StyledKaKao>
      )}
    </div>
  );
}

QuestionSlider.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
