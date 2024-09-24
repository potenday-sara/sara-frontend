'use client';

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function KakaoAdFit({ unit, width, height, disabled }) {
  const scriptElementWrapper = useRef(null);

  useEffect(() => {
    if (!disabled && scriptElementWrapper.current) {
      const script = document.createElement('script');
      script.setAttribute('src', 'https://t1.daumcdn.net/kas/static/ba.min.js');
      scriptElementWrapper.current?.appendChild(script);
    }
    return () => {
      const globalAdFit = window.adfit;
      if (globalAdFit) globalAdFit.destroy(unit);
    };
  }, []);

  return (
    <div ref={scriptElementWrapper}>
      <ins
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit={unit}
        data-ad-width={width}
        data-ad-height={height}
      />
    </div>
  );
}

KakaoAdFit.propTypes = {
  unit: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default KakaoAdFit;
