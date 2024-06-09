import { createContext, useRef, React, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

export const OnboardContext = createContext({});

const OnBoardBackgroundStyled = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  z-index: 2;
  mask: url(#mask);
  -webkit-mask: url(#mask); /* Safari용 */

  svg {
    height: 2000vh;
  }
`;

export function OnboardProvider({ children }) {
  const firstItem = useRef(null);
  const secondItem = useRef(null);
  const thirdItem = useRef(null);
  const forthItem = useRef(null);
  const fiftyItem = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [firstItemPosition, setFirstItemPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [secondItemPosition, setSecondItemPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [thirdItemPosition, setThirdItemPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [forthItemPosition, setForthItemPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [fiftyItemPosition, setFiftyItemPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });

    return () =>
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
  }, []);

  useEffect(() => {
    console.log('first', firstItem.current);

    const rect = firstItem.current.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    setFirstItemPosition({
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
      width: rect.width,
      height: rect.height,
    });
    console.log('width', firstItemPosition);
  }, [firstItem.current, windowWidth]);

  useEffect(() => {
    const rect = secondItem.current.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    setSecondItemPosition({
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
      width: rect.width,
      height: rect.height,
    });
  }, [secondItem.current, windowWidth]);

  useEffect(() => {
    const rect = thirdItem.current.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    setThirdItemPosition({
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
      width: rect.width,
      height: rect.height,
    });
  }, [thirdItem.current, windowWidth]);

  useEffect(() => {
    const rect = forthItem.current.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    setForthItemPosition({
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
      width: rect.width,
      height: rect.height,
    });
  }, [forthItem.current, windowWidth]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <OnboardContext.Provider value={{ firstItem, secondItem, thirdItem, forthItem, fiftyItem }}>
      <div style={{ position: 'relative', height: '100%' }}>
        {children}
        <OnBoardBackgroundStyled className="hi">
          <svg width="100%" height="100%" style={{ display: 'block' }} preserveAspectRatio="none">
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <rect
                  x={firstItemPosition.left - 16}
                  y={firstItemPosition.top - 15}
                  width={firstItemPosition.width + 32}
                  height={firstItemPosition.height + 10}
                  fill="black"
                />
                <rect
                  x={secondItemPosition.left - 16}
                  y={secondItemPosition.top - 15}
                  width={secondItemPosition.width + 32}
                  height={secondItemPosition.height + 10}
                  fill="black"
                />
                <rect
                  x={thirdItemPosition.left - 16}
                  y={thirdItemPosition.top - 8}
                  width={thirdItemPosition.width + 32}
                  height={thirdItemPosition.height + 20}
                  fill="black"
                />
                <rect
                  x={forthItemPosition.left - 102}
                  y={forthItemPosition.top - 8}
                  width={forthItemPosition.width + 205}
                  height={forthItemPosition.height + 20}
                  fill="black"
                />
              </mask>
            </defs>
          </svg>
        </OnBoardBackgroundStyled>
      </div>
    </OnboardContext.Provider>
  );
}

export const useOnboard = () => {
  const context = useContext(OnboardContext);
  if (!context) {
    throw new Error('useOnboard must be used within a OnboardProvider');
  }
  return context;
};
