import React, { useMemo, useState } from 'react';
import { Theme } from '../../Styles';
import Progressbar from '../../components/atoms/Progressbar';
import Footer from '../../components/organisms/Footer';
import useInterval from '../../hooks/useInterval';
import MainAside from './components/templates/MainAside';
import OnboardingSectionLayout from './components/templates/MainSection';
import SaraMaraContext from './stores/SaraMaraContext';
import StyledMain from './styles';
import KakaoAdFit from '../../components/organisms/KaKaoAdfit.jsx';
import Navbar from '../../components/organisms/Navbar/Navbar';

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
      <SaraMaraContext.Provider value={saramaraStore}>
        <Navbar />
        <OnboardingSectionLayout type="sara" unit="DAN-8BISPTRb8USYEeOo" />
        <MainAside type={type} />
        <Progressbar
          className="main-progress-bar"
          h="3px"
          progress={(count / 300) * 100}
          color={type === 'sara' ? Theme.color.maraPrimary : Theme.color.saraPrimary}
          transition="all 0s linear"
        />

        <OnboardingSectionLayout type="mara" className="mara-section" unit="DAN-ZqgRhVaZFunt70fX" />
        <div className="kakao-ad-a">
          <KakaoAdFit disabled={false} height={50} width={320} unit="DAN-FK6YA47rI1C6QYtZ" />
        </div>
        <div className="kakao-ad-b">
          <KakaoAdFit disabled={false} height={250} width={300} unit="DAN-aWKDV8g54CO6nffE" />
        </div>
      </SaraMaraContext.Provider>
      <Footer />
    </StyledMain>
  );
}
