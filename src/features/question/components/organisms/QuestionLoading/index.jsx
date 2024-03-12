import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Theme } from '../../../../../Styles';
import Logo from '../../../../../components/atoms/Logo';
import Progressbar from '../../../../../components/atoms/Progressbar';
import Text from '../../../../../components/atoms/Text/index';
import usePreventLeave from '../../../hooks/usePreventLeave';
import LoadingLottie from '../../atoms/LoadingLottie/index';
import QuestionInfo from '../../molecules/QuestionInfo/index';
import StyledQuestionLoading from './styles';

export default function QuestionLoading({ type, QuestionFormData, progress }) {
  const { onPreventLeave, offPreventLeave } = usePreventLeave();
  const saraRandomTextArray = [
    '질문 내용을 자세하게 물어보면\n더 좋은 답변을 받을 수 있을 거예요!',
    '어떤 상품은 Sara가 잘 모를 수도 있어요...!\n예를 들면... [비트겐슈타인 그란데 사이즈 3종 세트] 같은 거?',
    'Sara의 답변이 마음에 드신다면,\n하단의 평가 버튼을 눌러주세요!\n더 좋은 조언을 주는 데에 힘이 될 거예요!',
    '여기 어딘가에 정말 멋진 상품들이\n있는 거 같아요! 클릭하면 대체 어떤 좋은 일이 일어날까요?\n(엇, 너무 속 보였나...?)',
  ];
  const maraRandomTextArray = [
    '질문 내용을 자세하게 물어보면\n더 좋은 답변을 받을 수 있을 거예요!',
    '어떤 상품은 Mara가 잘 모를 수도 있어요...!\n예를 들면... [비트겐슈타인 그란데 사이즈 3종 세트] 같은 거?',
    'Mara의 답변이 마음에 드신다면,\n하단의 평가 버튼을 눌러주세요!\n더 좋은 조언을 주는 데에 힘이 될 거예요!',
    '여기 어딘가에 정말 멋진 상품들이\n있는 거 같아요! (속닥속닥)근데 Mara는 그게 영 못 마땅한가 봐요...!',
  ];
  const [randomIndex, setRandomIndex] = useState('');
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * saraRandomTextArray.length));
  }, [QuestionFormData.ItemValue]);

  const getRandomText = () => {
    if (type === 'sara') {
      return saraRandomTextArray[randomIndex];
    }
    return maraRandomTextArray[randomIndex];
  };
  const getChipText = () => {
    if (randomIndex < 2) return '질문 팁';
    return '사용 팁';
  };

  return (
    <StyledQuestionLoading {...onPreventLeave} {...offPreventLeave} type={type}>
      <Logo
        className="logo"
        fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
        logoType={type === 'sara' ? 'SaraTextWithCircleWithText' : 'MaraTextWithCircleWithText'}
      />
      <LoadingLottie className="logo" type={type} h="auto" />
      <Progressbar
        progress={progress}
        color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
        w="60%"
        h="14px"
        className="logo"
      />
      <div className="recommend-coupang">
        <div className="tip-chip">
          <Text label={getChipText()} color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary} />
        </div>
        <Text
          label={getRandomText()}
          color={Theme.color.midGray}
          style={{ textAlign: 'center', lineHeight: '130%' }}
          size="18px"
          bold="700"
        />
      </div>
      <QuestionInfo type={type} QuestionFormData={QuestionFormData} style={{ marginBottom: 24 }} />
    </StyledQuestionLoading>
  );
}

QuestionLoading.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  QuestionFormData: PropTypes.shape({
    ItemValue: PropTypes.string,
    ItemChange: PropTypes.func,
    ContentsValue: PropTypes.string,
    ContentsChange: PropTypes.func,
  }).isRequired,
  progress: PropTypes.number,
};

QuestionLoading.defaultProps = {
  progress: 0,
};
