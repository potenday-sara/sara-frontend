import React from 'react';
import PropTypes from 'prop-types';
import StyledNavbar from './styles';
import Button from '../../../../../components/atoms/Button';
import { Theme } from '../../../../../Styles';
import Text from '../../../../../components/atoms/Text';

function MainNavbar({ ...rest }) {
  return (
    <StyledNavbar {...rest}>
      <div className="navbar-left" />
      <div className="navbar-center" />
      <div className="navbar-right">
        <div className="button-wrap">
          <Button w="74px" h="45px" bg={Theme.color.saraPrimary} tooltip tooltipText="준비중인 기능입니다.">
            <Text label="로그인" color={Theme.color.white} size="14px" bold="500" />
          </Button>
          <Button w="74px" h="45px" bg={Theme.color.white} tooltip tooltipText="준비중인 기능입니다.">
            <Text label="회원가입" color={Theme.color.black} size="14px" bold="500" />
          </Button>
        </div>
      </div>
    </StyledNavbar>
  );
}

MainNavbar.propTypes = {
  style: PropTypes.shape({}),
};

MainNavbar.defaultProps = {
  style: {},
};

export default MainNavbar;
