import React, { useMemo, useState } from 'react';
import OnboardingSectionLayout from './components/templates/MainSection';
import MainAside from './components/templates/MainAside';
import StyledMain from './styles';
import SaraMaraContext from './stores/SaraMaraContext';
import Footer from '../../components/organisms/Footer';
import Navbar from './components/organisms/MainNavbar';
import useInterval from '../../hooks/useInterval';

/**
 * 온보딩페에지의 기본 레이아웃입니다.
 */
const DELAY = 10;

export default function Main() {
  const [type, setType] = useState('sara');
  const [count, setCount] = useState(0);
  const setSara = () => setType('sara');
  const setMara = () => setType('mara');

  /** 3000초마다 SARA / MARA를 바꾸는 함수 */
  const intervalSaraMara = () => {
    if (count < 3000 / DELAY) {
      setCount(count + 1);
    } else {
      setType((prev) => (prev === 'sara' ? 'mara' : 'sara'));
      setCount(0);
    }
  };

  const saramaraStore = useMemo(() => {
    return { type, setSara, setMara, count };
  }, [type, count]);

  useInterval(intervalSaraMara, 10);

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
