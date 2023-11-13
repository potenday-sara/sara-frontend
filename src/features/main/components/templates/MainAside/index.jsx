import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../../../components/atoms/Logo';
import RealtimeTrend from '../../organisms/RealtimeTrend';
import StyledMainAside from './styles';
import FlatButton from '../../atoms/FlatButton';

export default function MainAside() {
  return (
    <StyledMainAside>
      <div className="aside-top">
        <Logo logoType={'MainLogo'} />
      </div>
      <div className="aside-head">
        <RealtimeTrend />
        <FlatButton />
        <FlatButton />
      </div>
    </StyledMainAside>
  );
}

MainAside.propTypes = {
  $type: PropTypes.string,
  setSelectedType: PropTypes.any,
};
