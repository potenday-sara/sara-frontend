import { createContext, ReactNode, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';

type OnboardContextType = {
  firstItem: React.RefObject<HTMLDivElement>;
  secondItem: React.RefObject<HTMLDivElement>;
  thirdItem: React.RefObject<HTMLButtonElement>;
  forthItem: React.RefObject<HTMLDivElement>;
};

export const OnboardContext = createContext<OnboardContextType | null>(null);

export function OnboardProvider({ children }: { children: ReactNode }) {
  const [isOnboard, setIsOnboard] = useState<boolean>(true);

  const firstItem = useRef<HTMLDivElement>(null);
  const secondItem = useRef<HTMLDivElement>(null);
  const thirdItem = useRef<HTMLButtonElement>(null);
  const forthItem = useRef<HTMLDivElement>(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [firstItemPosition, setFirstItemPosition] = useState({ top: 0, left: 0, height: 0 });
  const [secondItemPosition, setSecondItemPosition] = useState({ top: 0, left: 0, height: 0 });
  const [thirdItemPosition, setThirdItemPosition] = useState({ top: 0, left: 0, height: 0 });
  const [forthItemPosition, setForthItemPosition] = useState({ top: 0, left: 0, height: 0 });
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  const [stage, setStage] = useState<number>(0);

  const handleSetNextStage = () => {
    setStage((prev) => prev + 1);
  };

  const handleSetPrevStage = () => {
    setStage((prev) => prev - 1);
  };

  const handleSetFinish = () => {
    setIsOnboard(false);
    window.localStorage.setItem('onboard', 'true');
  };

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      setScrollHeight(document.body.scrollHeight);
    });

    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!firstItem.current) return;

    const rect = firstItem.current.getBoundingClientRect();

    setFirstItemPosition({
      top: rect.top - 28,
      left: 0,
      height: rect.height + 28,
    });
  }, [scrollHeight]);

  useEffect(() => {
    if (!secondItem.current) return;
    const rect = secondItem.current.getBoundingClientRect();
    setSecondItemPosition({
      top: rect.top,
      left: 0,
      height: rect.height,
    });
  }, [scrollHeight]);

  useEffect(() => {
    if (!thirdItem.current) return;
    const rect = thirdItem.current.getBoundingClientRect();

    setThirdItemPosition({
      top: rect.top - 10,
      left: 0,
      height: rect.height + 20,
    });
  }, [scrollHeight]);

  useEffect(() => {
    if (!forthItem.current) return;
    const rect = forthItem.current.getBoundingClientRect();

    setForthItemPosition({
      top: rect.top - 10,
      left: 0,
      height: rect.height + 20,
    });
  }, [scrollHeight]);

  return (
    <OnboardContext.Provider
      value={{
        firstItem,
        secondItem,
        thirdItem,
        forthItem,
      }}
    >
      {children}
      {isOnboard && (
        <div
          onClick={handleSetNextStage}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 99999999999,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            mask: 'url(#mask)',
            WebkitMask: 'url(#mask)',
            overflow: 'hidden',
          }}
        >
          <svg
            className="overlay "
            width="100%"
            height="100%"
            style={{ display: 'block', height: '2000vh' }}
            preserveAspectRatio="none"
          >
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                {stage === 0 && (
                  <rect
                    x={firstItemPosition.left}
                    y={firstItemPosition.top}
                    width="100%"
                    height={firstItemPosition.height}
                    fill="black"
                  />
                )}
                {stage === 0 && (
                  <rect
                    x={secondItemPosition.left}
                    y={secondItemPosition.top}
                    height={secondItemPosition.height}
                    width="100%"
                    fill="black"
                  />
                )}
                {stage === 0 && (
                  <rect
                    x={thirdItemPosition.left}
                    y={thirdItemPosition.top}
                    height={thirdItemPosition.height}
                    width="100%"
                    fill="black"
                  />
                )}
                {stage === 0 && (
                  <rect
                    x={forthItemPosition.left}
                    y={forthItemPosition.top}
                    height={forthItemPosition.height}
                    width="100%"
                    fill="black"
                  />
                )}
              </mask>
            </defs>
          </svg>
        </div>
      )}
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
