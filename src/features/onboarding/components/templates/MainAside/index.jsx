import React from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../../../../../components/atoms/Logo';
import RealtimeTrend from '../../organisms/RealtimeTrend';
import FlatButton from '../../atoms/FlatButton';

const StyledMainAside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default function MainAside() {
  return (
    <StyledMainAside>
      <Logo logoType={'MainLogo'}/>
      <RealtimeTrend />
      <FlatButton />
      <FlatButton />
    </StyledMainAside>
  );
}
MainAside.propTypes = {
  $type: PropTypes.string,
  setSelectedType: PropTypes.any,
};
