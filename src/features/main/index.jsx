import React, { useMemo, useState } from 'react';
import OnboardingSectionLayout from './components/templates/MainSection';
import MainAside from './components/templates/MainAside';
import StyledMain from './styles';
import SaraMaraContext from './stores/SaraMaraContext';
import Footer from '../../components/organisms/Footer';
import Navbar from './components/organisms/MainNavbar';

/**
 * 온보딩페에지의 기본 레이아웃입니다.
 */
export default function Main() {
  const [type, setType] = useState('sara');
  const setSara = () => setType('sara');
  const setMara = () => setType('mara');

  const saramaraStore = useMemo(() => {
    return { type, setSara, setMara };
  }, [type]);

  return (
    <StyledMain>
      <Navbar
        style={{
          gridArea: '1 / 1 / 2 / 4',
        }}
      />
      <SaraMaraContext.Provider value={saramaraStore}>
        <OnboardingSectionLayout type="sara" />
        <MainAside type={type} />
        <OnboardingSectionLayout type="mara" />
      </SaraMaraContext.Provider>
      <Footer
        style={{
          gridArea: '3 / 1 / 4 / 4',
        }}
      />
    </StyledMain>
  );
}
