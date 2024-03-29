import React, { useMemo, useState } from 'react';
import { Theme } from '../../Styles';
import Progressbar from '../../components/atoms/Progressbar';
import Footer from '../../components/organisms/Footer';
import useInterval from '../../hooks/useInterval';
import Navbar from './components/organisms/MainNavbar';
import MainAside from './components/templates/MainAside';
import OnboardingSectionLayout from './components/templates/MainSection';
import SaraMaraContext from './stores/SaraMaraContext';
import StyledMain from './styles';

/**
 * 온보딩페에지의 기본 레이아웃입니다.
 */

export default function Main() {
  const [type, setType] = useState('sara');
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(10);
  const setSara = () => {
    setType('sara');
    setDelay(null);
    setCount(0);
  };
  const setMara = () => {
    setType('mara');
    setDelay(null);
    setCount(0);
  };

  /** 3000밀리초마다 SARA / MARA를 바꾸는 함수 */
  const intervalSaraMara = () => {
    if (delay === null) return;
    if (count < 3000 / delay) {
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
        <Progressbar
          className="main-progress-bar"
          h="3px"
          progress={(count / 300) * 100}
          color={type === 'sara' ? Theme.color.maraPrimary : Theme.color.saraPrimary}
          transition="all 0s linear"
        />
        <OnboardingSectionLayout type="mara" className="mara-section" />
      </SaraMaraContext.Provider>
      <Footer />
    </StyledMain>
  );
}
