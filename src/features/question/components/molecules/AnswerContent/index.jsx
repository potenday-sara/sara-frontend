import PropTypes from 'prop-types';
import React from 'react';
import { Theme } from '../../../../../Styles';
import Logo from '../../../../../components/atoms/Logo';
import Text from '../../../../../components/atoms/Text';
import Title from '../../../../../components/molecules/Title';
import StyledAnswerContent from './styles';

export default function AnswerContent({ type, answer, ...rest }) {
  return (
    <StyledAnswerContent {...rest}>
      <Title>
        {type === 'sara' ? (
          <>
            <Logo h="20px" w="auto" logoType="SaraTextOnly" fill={Theme.color.saraPrimary} />
            <Text label="는 것이샤" color={Theme.color.midGray} size="15px" bold="700" />
          </>
        ) : (
          <>
            <Text label="사지 말라면" color={Theme.color.midGray} size="15px" bold="700" />
            <Logo h="20px" w="auto" logoType="MaraTextOnly" fill={Theme.color.maraPrimary} />
          </>
        )}
      </Title>
      <Text style={{ lineHeight: '22.4px' }} label={answer} size="14px" bold="500" color={Theme.color.darkGray} />
    </StyledAnswerContent>
  );
}

AnswerContent.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
  answer: PropTypes.string,
  style: PropTypes.shape({}),
};

AnswerContent.defaultProps = {
  answer: '',
  style: {},
};
