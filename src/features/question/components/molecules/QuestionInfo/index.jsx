import React from 'react';
import PropTypes from 'prop-types';
import StyledQuestionInfo from './styles';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

export default function QuestionInfo({ type, QuestionFormData }) {
  return (
    <StyledQuestionInfo>
      <Text label="나의 질문" color="black" bold="md" />
      <Text
        label={QuestionFormData?.ItemValue || '에어팟 프로'}
        color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
        style={{
          fontSize: 20,
        }}
        bold="lg"
      />
      <Text
        label={QuestionFormData?.ContentsValue || '이미 잃어버렸는데 다시 사도될까 고민하고있어'}
        color="gray"
        size="sm"
        bold="ms"
      />
    </StyledQuestionInfo>
  );
}

QuestionInfo.propTypes = {
  QuestionFormData: PropTypes.shape({
    ItemValue: PropTypes.string,
    ItemChange: PropTypes.func,
    ContentsValue: PropTypes.string,
    ContentsChange: PropTypes.func,
  }).isRequired,
  style: PropTypes.shape({}),
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};

QuestionInfo.defaultProps = {
  style: {},
};
