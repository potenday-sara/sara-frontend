import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../../../components/atoms/Logo';
import RealtimeTrend from '../../organisms/RealtimeTrend';
import StyledMainAside from './styles';
import FlatButton from '../../atoms/FlatButton';
import SaraMaraContext from '../../../stores/SaraMaraContext';
import { Theme } from '../../../../../Styles';

export default function MainAside({ type }) {
  const { setSara, setMara } = useContext(SaraMaraContext);

  return (
    <StyledMainAside className="main-aside">
      <div className="aside-top">
        <Logo logoType="MainLogo" className="aside-logo" w="148px" />
      </div>
      <div className="aside-head">
        <RealtimeTrend />
        <FlatButton type="sara" activated={type === 'sara'} onClick={setSara}>
          <Logo logoType="SaraTextWithCircleWhite" fill={Theme.color.white} />
        </FlatButton>
        <FlatButton type="mara" activated={type === 'mara'} onClick={setMara}>
          <Logo logoType="MaraTextWithCircleWhite" fill={Theme.color.white} />
        </FlatButton>
      </div>
    </StyledMainAside>
  );
}

MainAside.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']).isRequired,
};
