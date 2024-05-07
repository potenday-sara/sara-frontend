import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { ReactComponent as SaraLogo } from './asset/saralogo.svg';
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
  border-bottom: ${(props) => (props.isBorder ? `1px solid ${Theme.color.gray}` : 'none')};
  width: 100%;

  ${Theme.deviceSize.small} {
    display: none;
  }
`;

export default function Navbar({ style }) {
  const nowRoute = useGetRoute()[0];
  const navigate = useNavigate();

  const isBorder = useMemo(() => nowRoute !== '', [nowRoute]);

  return (
    <StyledNavbar style={style} isBorder={isBorder}>
      <SaraLogo style={{ marginRight: '32px' }} />
      <Button
        onClick={() => navigate('/')}
        type="text"
        style={{
          height: '100%',
          width: 'auto',
          padding: '8px',
          display: 'flex',
          borderRadius: '0px',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          borderBottom: nowRoute === '' ? `2px solid black` : 'none',
        }}
      >
        <Text label="홈" size="16px" bold={nowRoute === '' ? '700' : '500'} />
      </Button>
      <Button
        onClick={() => navigate('/question/sara')}
        type="text"
        style={{
          height: '100%',
          width: 'auto',
          padding: '8px',
          display: 'flex',
          borderRadius: '0px',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          borderBottom: nowRoute === 'question' ? `2px solid black` : 'none',
        }}
      >
        <Text size="16px" bold={nowRoute === 'question' ? '700' : '500'} label="질문하기" />
      </Button>
      <Button
        onClick={() => navigate('/lounge')}
        type="text"
        style={{
          height: '100%',
          width: 'auto',
          padding: '8px',
          display: 'flex',
          borderRadius: '0px',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          borderBottom: nowRoute === 'lounge' ? `2px solid black` : 'none',
        }}
      >
        <Text label="사라마라 라운지" size="16px" bold={nowRoute === 'lounge' ? '700' : '500'} />
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
