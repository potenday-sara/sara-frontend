import React, { useMemo, useState } from 'react';
import OnboardingSectionLayout from './components/templates/MainSection';
import MainAside from './components/templates/MainAside';
import StyledMain from './styles';
import SaraMaraContext from './stores/SaraMaraContext';

/**
 * 온보딩페에지의 기본 레이아웃입니다.
 */
export default function Main() {
  const [type, setType] = useState('mara');
  const setSara = () => setType('sara');
  const setMara = () => setType('mara');

  const saramaraStore = useMemo(() => {
    return { type, setSara, setMara };
  }, [type]);

  return (
    <StyledMain>
      <SaraMaraContext.Provider value={saramaraStore}>
        <OnboardingSectionLayout type="sara" />
        <MainAside type={type} />
        <OnboardingSectionLayout type="mara" />
      </SaraMaraContext.Provider>
    </StyledMain>
  );
}
