import React from 'react';
import PropTypes from 'prop-types';
import StyledQuestionLoading from './styles';
import LoadingLottie from '../../atoms/LoadingLottie/index';
import Progressbar from '../../../../../components/atoms/Progressbar';
import Text from '../../../../../components/atoms/Text/index';
import Logo from '../../../../../components/atoms/Logo';
import { Theme } from '../../../../../Styles';
import QuestionInfo from '../../molecules/QuestionInfo/index';

export default function QuestionLoading({ type, QuestionFormData, progress }) {
  return (
    <StyledQuestionLoading>
      <Logo w="148px" logoType={type === 'sara' ? 'SaraTextWithCircleWithText' : 'MaraTextWithCircleWithText'} />
      <LoadingLottie type={type} w="212px" />
      <Progressbar
        progress={progress}
        label={<Text style={{ zIndex: 2, fontSize: 10 }} label="남은시간" bold="sm" color="white" size="xs" />}
        color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
        w="80%"
        h="20px"
      />
      <div className="recommend-coupang">
        <div className="flex">
          <Logo
            logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'}
            fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
            w="93px"
            h="24px"
          />
          <Text
            label="추천 인기상품도 둘러보세요"
            color={type === 'sara' ? 'saraPrimary' : 'maraPrimary'}
            size="lg"
            bold="lg"
          />
        </div>
        <Text label="카테고리를 바꿔서 볼 수도 있어요" color={Theme.color.gray} size="sm" bold="sm" />
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
