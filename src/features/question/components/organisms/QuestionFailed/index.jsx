import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../../../components/atoms/Button';
import Logo from '../../../../../components/atoms/Logo';
import Progressbar from '../../../../../components/atoms/Progressbar';
import Text from '../../../../../components/atoms/Text';
import MaraFildedCharacter from '../../../assets/MaraQuestionFailed.png';
import SaraFildedCharacter from '../../../assets/SaraQuestionFailed.png';
import { ReactComponent as MaraFailedMix } from '../../../assets/marafailedmixed.svg';
import { ReactComponent as SaraFailedMix } from '../../../assets/sarafailedmixed.svg';
import StyledQuestionFailed from './styles';

import { Theme } from '../../../../../Styles';
import QuestionInfo from '../../molecules/QuestionInfo';

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
};

// TODO: retryRequestCount 추가 후 재질문 횟수에 맞게 화면 수정
export default function QuestionFailed({ retryForm, setRetryRequest, QuestionFormData, type }) {
  return (
    <StyledQuestionFailed>
      <Logo
        w="50%"
        className="logo"
        logoType={type === 'sara' ? 'SaraTextWithCircleWithText' : 'MaraTextWithCircleWithText'}
      />
      <div
        className="failedCharacter"
        style={{ backgroundImage: type === 'sara' ? `url(${SaraFildedCharacter})` : `url(${MaraFildedCharacter})` }}
      />
      <Progressbar w="60%" h="14px" className="logo" />
      {type === 'sara' ? <SaraFailedMix width="80%" /> : <MaraFailedMix width="80%" />}
      <div className="button-wrap">
        <Button
          h="49px"
          bg={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
          style={buttonStyle}
          onClick={setRetryRequest}
        >
          <Text size="14px" color={Theme.color.white} label="10초 더 주기" bold="700" />
        </Button>
        <Button
          h="49px"
          onClick={retryForm}
          bg={type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary}
          style={buttonStyle}
        >
          <Text
            size="14px"
            color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
            label="질문 다시하기"
            bold="700"
          />
        </Button>
      </div>
      <QuestionInfo type={type} QuestionFormData={QuestionFormData} style={{ paddingTop: 18 }} />
    </StyledQuestionFailed>
  );
}

QuestionFailed.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  setRetryRequest: PropTypes.func.isRequired,
  retryForm: PropTypes.func.isRequired,
  QuestionFormData: PropTypes.shape({
    ItemValue: PropTypes.string,
    ItemChange: PropTypes.func,
    ContentsValue: PropTypes.string,
    ContentsChange: PropTypes.func,
  }).isRequired,
  // retryRequestCount: PropTypes.number.isRequired,
};
