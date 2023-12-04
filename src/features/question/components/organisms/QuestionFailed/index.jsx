import React from 'react';
import StyledQuestionFailed from './styles';
import PropTypes from 'prop-types';
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

export default function QuestionFailed({ type }) {
  return (
    <StyledQuestionFailed>
      <Logo w="148px" logoType={type === 'sara' ? 'SaraTextWithCircleWithText' : 'MaraTextWithCircleWithText'} />
      <img src={SaraFildedCharacter} alt="사라 질문 실패 이미지" />
      <Progressbar
        w="80%"
        h="20px"
        label={<Text style={{ zIndex: 2, fontSize: 10 }} label="남은시간" bold="sm" color="white" size="xs" />}
      />
      <Title>
        <Logo
          w="60px"
          logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'}
          fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
        />
        <Text
          label="가 아직 생각할 시간이 부족하대요..!"
          size="sm"
          bold="lg"
          color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
          style={{
            marginRight: 8,
          }}
        />
      </Title>
      <div className="button-wrap">
        <Button bg={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary} style={buttonStyle}>
          <Text size="md" color={Theme.color.white} label="10초 더 주기" />
        </Button>
        <Button bg={type === 'sara' ? Theme.color.saraSecondary : Theme.color.maraSecondary} style={buttonStyle}>
          <Text size="md" color={Theme.color.saraPrimary} label="다시 물어보기" />
        </Button>
      </div>
      <QuestionInfo type={type} />
    </StyledQuestionFailed>
  );
}

QuestionFailed.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
