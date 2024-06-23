import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { Theme } from '../../../../../Styles';
import Text from '../../../../../components/atoms/Text';
import KakaoAdFit from '../../../../../components/organisms/KaKaoAdfit.jsx';
import useResize from '../../../../../hooks/useResize';
import SaraMaraContext from '../../../../main/stores/SaraMaraContext';
import useQuestions from '../../../hooks/useQuestions';
import HorizonSlider from '../../molecules/HorizonSlider';
import Slider from '../../molecules/Slider';
import StyledQuestionSlider from './styles';
import { ReactComponent as SaraMara } from '../../../assets/saramara.svg';

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
  const navigate = useNavigate();

  return (
    <div>
      <StyledQuestionSlider $type={type}>
        <div className="question-slider-title">
          <div className="question-slider-text">
            <SaraMara style={{ height: '40px', marginTop: '5px' }} />
            <Text
              label="다른 질문들"
              color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
              bold="700"
              size="13px"
            />
          </div>
          <button type="button" className="question-slider-button" onClick={() => navigate(`/lounge`)}>
            <Text label="바로가기" color={Theme.color.white} bold="700" size="13px" />
          </button>
        </div>
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
