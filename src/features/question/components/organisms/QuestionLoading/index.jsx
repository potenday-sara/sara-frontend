import React from 'react';
import PropTypes from 'prop-types';
import StyledQuestionLoading from './styles';
import LoadingLottie from '../../atoms/LoadingLottie/index';
import Progressbar from '../../../../../components/atoms/Progressbar';
import Text from '../../../../../components/atoms/Text/index';
import Logo from '../../../../../components/atoms/Logo';
import { Theme } from '../../../../../Styles';
import QuestionInfo from '../../molecules/QuestionInfo/index';
import { ReactComponent as MaraCoupangRecommed } from '../../../assets/CoupangMixedTitle/MaraCoupang.svg';
import { ReactComponent as SaraCoupangRecommed } from '../../../assets/CoupangMixedTitle/SaraCoupang.svg';
import usePreventLeave from '../../../hooks/usePreventLeave';

export default function QuestionLoading({ type, QuestionFormData, progress }) {
  const { onPreventLeave, offPreventLeave } = usePreventLeave();
  return (
    <StyledQuestionLoading {...onPreventLeave} {...offPreventLeave}>
      <Logo
        w="50%"
        className="logo"
        logoType={type === 'sara' ? 'SaraTextWithCircleWithText' : 'MaraTextWithCircleWithText'}
      />
      <LoadingLottie className="logo" type={type} w="60%" h="auto" />
      <Progressbar
        progress={progress}
        color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
        w="60%"
        h="14px"
        className="logo"
      />
      <div className="recommend-coupang">
        {type === 'sara' ? (
          <SaraCoupangRecommed width="90%" height="auto" />
        ) : (
          <MaraCoupangRecommed width="90%" height="auto" />
        )}
        <Text label="카테고리를 바꿔서 볼 수도 있어요" color={Theme.color.midGray} size="14px" bold="500" />
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
