import React, { useContext } from 'react';
import Logo from '../../../../../components/atoms/Logo';
import RealtimeTrend from '../../organisms/RealtimeTrend';
import StyledMainAside from './styles';
import FlatButton from '../../atoms/FlatButton';
import SaraMaraContext from '../../../stores/SaraMaraContext';
import PropTypes from 'prop-types';

export default function MainAside({ type }) {
  const { setSara, setMara } = useContext(SaraMaraContext);
  return (
    <StyledMainAside>
      <div className="aside-top">
        <Logo logoType={'MainLogo'} />
      </div>
      <div className="aside-head">
        <RealtimeTrend />
        <FlatButton
          type={'sara'}
          activated={type === 'sara'}
          onClick={setSara}
        />
        <FlatButton
          type={'mara'}
          activated={type === 'mara'}
          onClick={setMara}
        />
      </div>
    </StyledMainAside>
  );
}

MainAside.propTypes = {
  type: PropTypes.oneOf(['sara', 'mara']),
};
