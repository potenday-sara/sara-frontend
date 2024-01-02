import React from 'react';
import PropTypes from 'prop-types';
import StyledAnswerContent from './styles';
import Logo from '../../../../../components/atoms/Logo';
import { Theme } from '../../../../../Styles';
import Text from '../../../../../components/atoms/Text';
import Title from '../../../../../components/molecules/Title';

export default function AnswerContent({ type, answer }) {
  return (
    <StyledAnswerContent>
      <Title>
        <Logo
          w="78px"
          logoType={type === 'sara' ? 'SaraTextOnly' : 'MaraTextOnly'}
          fill={type === 'sara' ? Theme.color.saraPrimary : Theme.color.maraPrimary}
        />
        <Text label="의 답변" color={Theme.color.midGray} size="15px" bold="700" />
      </Title>
      <Text style={{ lineHeight: '22.4px' }} label={answer} size="14px" bold="500" color={Theme.color.darkGray} />
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
