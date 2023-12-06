import React from 'react';
import PropTypes from 'prop-types';
import StyledQuestionFailed from './styles';
import Logo from '../../../../../components/atoms/Logo';
import SaraFildedCharacter from '../../../assets/SaraQuestionFailled.png';
import Progressbar from '../../../../../components/atoms/Progressbar';
import Text from '../../../../../components/atoms/Text';
import Title from '../../../../../components/molecules/Title';
import Button from '../../../../../components/atoms/Button';

import { Theme } from '../../../../../Styles';
import QuestionInfo from '../../molecules/QuestionInfo';

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
};

export default function QuestionFailed({ retryForm, setRetryRequest, QuestionFormData, type }) {
  return (
    <StyledQuestionFailed>
      <Logo w="148px" logoType={type === 'sara' ? 'SaraTextWithCircleWithText' : 'MaraTextWithCircleWithText'} />
      <img src={SaraFildedCharacter} alt="사라 질문 실패 이미지" />
      <Progressbar
        w="212px"
        h="20px"
        label={<Text style={{ zIndex: 2, fontSize: 10 }} label="남은시간" bold="sm" color="white" size="xs" />}
      />
      <Title style={{ justifyContent: 'center', padding: '8 0 10' }}>
        <Logo
          w="60px"
          logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'}
          style={{
            marginBottom: 2,
          }}
          fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
        />
        <Text
          label="가 아직 생각할 시간이 부족하대요..!"
          size="16px"
          bold="700"
          color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
        />
      </Title>
      <div className="button-wrap">
        <Button
          bg={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
          style={buttonStyle}
          onClick={setRetryRequest}
        >
          <Text size="14px" color={Theme.color.white} label="10초 더 주기" bold="700" />
        </Button>
        <Button
          onClick={retryForm}
          bg={type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary}
          style={buttonStyle}
        >
          <Text
            size="14px"
            color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
            label="다시 물어보기"
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
};
