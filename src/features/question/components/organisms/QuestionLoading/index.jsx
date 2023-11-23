import React from 'react';
import PropTypes from 'prop-types';
import StyledQuestionLoading from './styles';
import LoadingLottie from '../../atoms/LoadingLottie.jsx';
import Progressbar from '../../../../../components/atoms/Progressbar/index.jsx';
import Text from '../../../../../components/atoms/Text/index.jsx';
import Logo from '../../../../../components/atoms/Logo';
import { Theme } from '../../../../../Styles.js';

export default function QuestionLoading({ type }) {
  return (
    <StyledQuestionLoading>
      <LoadingLottie type={type} w={'212px'} />
      <Progressbar
        label={
          <Text
            style={{ zIndex: 2, fontSize: 10 }}
            label={'남은시간'}
            bold={'sm'}
            color={'white'}
            size={'xs'}
          />
        }
        color={
          type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary
        }
        w={'80%'}
        h={'20px'}
      />
      <div className="recommend-coupang">
        <div className="flex">
          <Logo
            logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'}
            fill={
              type === 'sara'
                ? Theme.color.saraPrimary
                : Theme.color.maraPrimary
            }
            w={'93px'}
            h={'24px'}
          />
          <Text
            label={'추천 인기상품도 둘러보세요'}
            color={type === 'sara' ? 'saraPrimary' : 'maraPrimary'}
            size={'lg'}
            bold={'lg'}
          />
        </div>
        <Text
          label={'카테고리를 바꿔서 볼 수도 있어요'}
          color={'gray'}
          size={'sm'}
          bold={'sm'}
        />
      </div>
      <div className="item-announce">
        <Text label={'나의 질문'} color={'black'} bold={'md'} />
        <Text
          label={'에어팟 프로'}
          color={type === 'sara' ? 'saraPrimary' : 'maraPrimary'}
          style={{
            fontSize: 20,
          }}
          bold={'lg'}
        />
        <Text
          label={'이미 잃어버렸는데 다시 사도될까 고민하고있어'}
          color={'gray'}
          size={'sm'}
          bold={'md'}
        />
      </div>
    </StyledQuestionLoading>
  );
}

QuestionLoading.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
};
