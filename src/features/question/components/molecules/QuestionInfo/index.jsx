import React from 'react';
import PropTypes from 'prop-types';
import StyledQuestionInfo from './styles';
import Text from '../../../../../components/atoms/Text';
import { Theme } from '../../../../../Styles';

export default function QuestionInfo({ type, QuestionFormData, ...rest }) {
  return (
    <StyledQuestionInfo {...rest}>
      <Text label="나의 질문" className="title" color={Theme.color.midGray} />
      <Text
        className="item"
        label={QuestionFormData?.ItemValue || '에어팟 프로'}
        color={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
      />
      <Text
        className="contents"
        label={QuestionFormData?.ContentsValue || '이미 잃어버렸는데 다시 사도될까 고민하고있어'}
        color={Theme.color.midGray}
        bold="500"
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
