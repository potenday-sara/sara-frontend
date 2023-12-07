import React from 'react';
import PropTypes from 'prop-types';
import StyledQuestionNavbar from './styles';
import Button from '../../../../../components/atoms/Button';
import { Theme } from '../../../../../Styles';
import Text from '../../../../../components/atoms/Text';

function QuestionNavbar({ ...rest }) {
  return (
    <StyledQuestionNavbar {...rest}>
      <div className="button-wrap">
        <Button w="74px" h="45px" bg={Theme.color.saraPrimary} tooltip tooltipText="준비중인 기능입니다.">
          <Text label="로그인" color={Theme.color.white} size="14px" bold="500" />
        </Button>
        <Button w="74px" h="45px" bg={Theme.color.white} tooltip tooltipText="준비중인 기능입니다.">
          <Text label="회원가입" color={Theme.color.black} size="14px" bold="500" />
        </Button>
      </div>
    </StyledQuestionNavbar>
  );
}

QuestionNavbar.propTypes = {
  style: PropTypes.shape({}),
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};

QuestionNavbar.defaultProps = {
  style: {},
};

export default QuestionNavbar;
