import { createContext, React, ReactNode, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';

type OnboardContextType = {
  firstItem: React.RefObject<HTMLDivElement>;
  secondItem: React.RefObject<HTMLDivElement>;
  thirdItem: React.RefObject<HTMLDivElement>;
  forthItem: React.RefObject<HTMLDivElement>;
};

export const OnboardContext = createContext<OnboardContextType | null>(null);

export function OnboardProvider({ children }: { children: ReactNode }) {
  const [isOnboard, setIsOnboard] = useState<boolean>(true);

  const firstItem = useRef<HTMLDivElement>(null);
  const secondItem = useRef<HTMLDivElement>(null);
  const thirdItem = useRef<HTMLDivElement>(null);
  const forthItem = useRef<HTMLDivElement>(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [firstItemPosition, setFirstItemPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [secondItemPosition, setSecondItemPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [thirdItemPosition, setThirdItemPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [forthItemPosition, setForthItemPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
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

  useLayoutEffect(() => {
    if (!firstItem.current) return;

    const handleSetItemPosition = () => {
      if (!firstItem.current) return;
      const rect = firstItem.current.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      console.log('hi');

      setFirstItemPosition({
        top: rect.top - 28,
        left: 0,
        width: '100%',
        height: rect.height + 28,
      });
    };

    const resizeObserver = new ResizeObserver(handleSetItemPosition);

    resizeObserver.observe(firstItem.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [scrollHeight]);

  useEffect(() => {
    if (!secondItem.current) return;
    const rect = secondItem.current.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    setSecondItemPosition({
      top: 0,
      left: 0,
      width: rect.width,
      height: rect.height,
    });
  }, [secondItem?.current, windowWidth]);

  useEffect(() => {
    if (!thirdItem.current) return;
    const rect = thirdItem.current.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    setThirdItemPosition({
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
      width: '',
      height: rect.height,
    });
  }, [thirdItem?.current, windowWidth]);

  useEffect(() => {
    if (!forthItem.current) return;
    const rect = forthItem.current.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    setForthItemPosition({
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
      width: rect.width,
      height: rect.height,
    });
  }, [forthItem?.current, windowWidth]);

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
                    width={firstItemPosition.width}
                    height={firstItemPosition.height}
                    style={{}}
                    fill="black"
                  />
                )}
                {stage === 1 && (
                  <rect
                    x={secondItemPosition.left - 16}
                    y={secondItemPosition.top - 15}
                    width={secondItemPosition.width + 32}
                    height={secondItemPosition.height + 10}
                    fill="black"
                  />
                )}
                {stage === 2 && (
                  <rect
                    x={thirdItemPosition.left - 16}
                    y={thirdItemPosition.top - 5}
                    width={thirdItemPosition.width + 32}
                    height={thirdItemPosition.height + 10}
                    fill="black"
                  />
                )}
                {/* {stage === 3 && ( */}
                {/*  <rect */}
                {/*    x={forthItemPosition.left - 5} */}
                {/*    y={forthItemPosition.top} */}
                {/*    width={forthItemPosition.width + 10} */}
                {/*    height={forthItemPosition.height} */}
                {/*    fill="black" */}
                {/*  /> */}
                {/* )} */}
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
