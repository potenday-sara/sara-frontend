import React from 'react';
import PropTypes from 'prop-types';
import StyledAnswerContent from './styles';
import Logo from '../../../../../components/atoms/Logo';
import { Theme } from '../../../../../Styles';
import Text from '../../../../../components/atoms/Text';

export default function AnswerContent({ type, answer }) {
  return (
    <StyledAnswerContent>
      <div className="flex">
        <Logo
          w="78px"
          logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'}
          fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
        />
        <Text label="의 답변" />
      </div>
      <Text style={{ lineHeight: 1.3 }} label={answer} size="sm" color={Theme.color.darkGray} />
    </StyledAnswerContent>
  );
}

AnswerContent.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  answer: PropTypes.string,
};

AnswerContent.defaultProps = {
  answer: '',
};
