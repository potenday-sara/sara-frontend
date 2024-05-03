import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { ReactComponent as SaraLogo } from './asset/saralogo.svg';
import { ReactComponent as SaraMaraText } from './asset/saramaratext.svg';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import useGetRoute from '../../../hooks/useGetRoute';
import { Theme } from '../../../Styles';

const StyledNavbar = styled.div`
  position: fixed;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 8px;
  padding-left: 20px;

  ${Theme.deviceSize.small} {
    display: none;
  }
`;

export default function Navbar({ style }) {
  const nowRoute = useGetRoute()[0];
  const navigate = useNavigate();

  return (
    <StyledNavbar style={style}>
      <SaraLogo style={{ marginRight: '32px' }} />
      <Button
        type="text"
        style={{
          width: 'auto',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          backgroundColor: 'white',
        }}
      >
        <Text label="로그인" size="16px" bold="700" />
      </Button>
      <Button
        onClick={() => navigate('/question/sara')}
        type="text"
        style={{
          width: 'auto',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          backgroundColor: nowRoute === 'question' ? Theme.color.saraPrimary : 'white',
        }}
      >
        <Text
          size="16px"
          bold="700"
          label="질문하기"
          color={nowRoute === 'question' ? Theme.color.white : Theme.color.black}
        />
      </Button>
      <Button
        onClick={() => navigate('/lounge')}
        type="text"
        style={{
          width: 'auto',
          padding: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
          gap: '4px',
          backgroundColor: nowRoute === 'lounge' ? Theme.color.saraPrimary : 'white',
        }}
      >
        <SaraMaraText color={nowRoute === 'lounge' ? Theme.color.white : Theme.color.black} />
        <Text
          label="라운지"
          size="16px"
          bold="700"
          color={nowRoute === 'lounge' ? Theme.color.white : Theme.color.black}
        />
      </Button>
    </StyledNavbar>
  );
}

Navbar.propTypes = {
  style: PropTypes.shape({}),
};

Navbar.defaultProps = {
  style: {},
};
