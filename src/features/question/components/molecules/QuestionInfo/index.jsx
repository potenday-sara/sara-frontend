import React from 'react';
import PropType from 'prop-types';
import StyledQuestionInfo from './styles';
import Text from '../../../../../components/atoms/Text';

export default function QuestionInfo({ type, item, contents }) {
  return (
    <StyledQuestionInfo>
      <Text label={'나의 질문'} color={'black'} bold={'md'} />
      <Text
        label={item || '에어팟 프로'}
        color={type === 'sara' ? 'saraPrimary' : 'maraPrimary'}
        style={{
          fontSize: 20,
        }}
        bold={'lg'}
      />
      <Text
        label={contents || '이미 잃어버렸는데 다시 사도될까 고민하고있어'}
        color={'gray'}
        size={'sm'}
        bold={'md'}
      />
    </StyledQuestionInfo>
  );
}

QuestionInfo.propTypes = {
  type: PropType.oneOf(['sara', 'mara']),
  item: PropType.string,
  contents: PropType.string,
};
