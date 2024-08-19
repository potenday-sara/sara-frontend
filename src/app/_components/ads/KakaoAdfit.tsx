import React, { useEffect, useRef } from 'react';

type KakaoAdFitProps = {
  unit: string;
  width: number;
  height: number;
  disabled: boolean;
};

function KakaoAdFit({ unit, width, height, disabled }: KakaoAdFitProps) {
  const scriptElementWrapper = useRef<HTMLDivElement>(null);

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

export default KakaoAdFit;
