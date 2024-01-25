import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../../../components/atoms/Button';
import Logo from '../../../../../components/atoms/Logo';
import Progressbar from '../../../../../components/atoms/Progressbar';
import Text from '../../../../../components/atoms/Text';
import MaraFildedCharacter from '../../../assets/MaraQuestionFailed.png';
import SaraFildedCharacter from '../../../assets/SaraQuestionFailed.png';
import StyledQuestionFailed from './styles';

import { Theme } from '../../../../../Styles';
import QuestionInfo from '../../molecules/QuestionInfo';

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
};
const MAX_RETRY_COUNT = 3;

export default function QuestionFailed({ retryForm, setRetryRequest, QuestionFormData, retryRequestCount, type }) {
  const saraFailedTextArray = [
    [
      '이번엔 진짜 답을 줄 거예요...!',
      '딱 10초면 진짜 답을 줄 거예요...!',
      '(샤피셜)Sara에게 10초를 더 줬을 때,\n답변을 받을 확률은 97%!',
    ],
    ['어라라...? 뭔가 이상한 거 같기도...?'],
    ['Sara에게 무슨 일이 있나봐요 ㅠ\n다시 질문해주실래요...?'],
  ];
  const maraFailedTextArray = [
    [
      '이번엔 진짜 답을 줄 거예요...!',
      '딱 10초면 진짜 답을 줄 거예요...!',
      '(먀피셜)Sara에게 10초를 더 줬을 때,\n답변을 받을 확률은 97% 입니다!',
    ],
    ['어라라...? 뭔가 이상한 거 같기도...?'],
    ['Mara에게 무슨 일이 있나봐요 ㅠ\n다시 질문해주실래요...?'],
  ];
  const getRandomFailText = (arr) => {
    const retryIndex = Math.min(retryRequestCount, MAX_RETRY_COUNT - 1);
    return arr[retryIndex][Math.floor(Math.random() * arr[retryIndex].length)];
  };

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
      <Text
        size="18px"
        label={type === 'sara' ? getRandomFailText(saraFailedTextArray) : getRandomFailText(maraFailedTextArray)}
        bold="700"
      />
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
  retryRequestCount: PropTypes.number.isRequired,
};
