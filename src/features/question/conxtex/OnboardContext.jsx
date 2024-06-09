import { createContext, useRef, React, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import OnboardBubble from '../components/atoms/bubble/OnboardBubble';
import Text from '../../../components/atoms/Text';
import Button from '../../../components/atoms/Button';
import { Theme } from '../../../Styles';
import { ReactComponent as XButton } from '../assets/XButton.svg';

export const OnboardContext = createContext({});

const OnBoardBackgroundStyled = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  z-index: 9999;
  mask: url(#mask);
  -webkit-mask: url(#mask); /* Safari용 */

  .overlay {
    height: 2000vh;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  padding: 6px;
  display: flex;
  justify-content: center;
  width: auto;
  border-radius: 6px;
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
  const [isOnboard, setIsOnboard] = useState(() => window.localStorage.getItem('isOnboard') !== 'true');

  const [stage, setStage] = useState(0);

  const handleNext = () => {
    setStage(stage + 1);
  };

  const handlePrev = () => {
    setStage(stage - 1);
  };

  const handleFinish = () => {
    setIsOnboard(false);
    window.localStorage.setItem('isOnboard', 'true');
  };

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
    const rect = firstItem.current.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    setFirstItemPosition({
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
      width: rect.width,
      height: rect.height,
    });
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
        {isOnboard && (
          <OnBoardBackgroundStyled className="hi">
            <svg
              className="overlay "
              width="100%"
              height="100%"
              style={{ display: 'block' }}
              preserveAspectRatio="none"
            >
              <defs>
                <mask id="mask" x="0" y="0" width="100%" height="100%">
                  <rect x="0" y="0" width="100%" height="100%" fill="white" />

                  {stage === 0 && (
                    <rect
                      x={firstItemPosition.left - 16}
                      y={firstItemPosition.top - 15}
                      width={firstItemPosition.width + 32}
                      height={firstItemPosition.height + 10}
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
            {stage === 0 && (
              <OnboardBubble stage={0} ref={firstItem} offset={40} onClick={handleFinish}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Text color="white" label="구매를 고민하고 있는 상품을 적어주세요." size="15px" />
                  <div className="buttons" style={{ marginLeft: 'auto', marginTop: '10px' }}>
                    <StyledButton type="button" onClick={handleNext} color="white" bg={Theme.color.saraPrimary}>
                      다음
                    </StyledButton>
                  </div>
                </div>
              </OnboardBubble>
            )}
            {stage === 1 && (
              <OnboardBubble stage={1} ref={secondItem} offset={35} onClick={handleFinish}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Text color="white" label="구매를 고민하고 있는 상품을 적어주세요." size="15px" />
                  <Text
                    style={{
                      marginTop: '8px',
                    }}
                    label={`고민을 자세히 적을수록 좋은\n 답변을 받을 확률이 높아요!`}
                    size="12px"
                    color="rgb(255,255,255,0.7)"
                  />
                  <div
                    className="buttons"
                    style={{ marginLeft: 'auto', marginTop: '10px', display: 'flex', gap: '8px' }}
                  >
                    <StyledButton
                      type="button"
                      onClick={handlePrev}
                      bg={Theme.color.saraSecondary}
                      color={Theme.color.saraPrimary}
                    >
                      이전
                    </StyledButton>
                    <StyledButton type="button" onClick={handleNext} bg={Theme.color.saraPrimary} color="white">
                      다음
                    </StyledButton>
                  </div>
                </div>
              </OnboardBubble>
            )}
            {stage === 2 && (
              <OnboardBubble stage={2} ref={thirdItem} offset={25} onClick={handleFinish}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Text color="white" label="모두 적었다면, 사라에게 물어보세요." size="15px" />
                  <Text
                    style={{
                      marginTop: '8px',
                    }}
                    label={`사야하는 물건을 걱정없이 살 수 있도록\n합당한 이유를 만들어 줄 거에요!`}
                    size="12px"
                    color="rgb(255,255,255,0.7)"
                  />
                  <div
                    className="buttons"
                    style={{ marginLeft: 'auto', marginTop: '10px', display: 'flex', gap: '8px' }}
                  >
                    <StyledButton
                      type="button"
                      onClick={handlePrev}
                      bg={Theme.color.saraSecondary}
                      color={Theme.color.saraPrimary}
                    >
                      이전
                    </StyledButton>
                    <StyledButton type="button" onClick={handleFinish} bg={Theme.color.saraPrimary} color="white">
                      튜토리얼 완료
                    </StyledButton>
                  </div>
                </div>
              </OnboardBubble>
            )}
            {/* {stage === 3 && ( */}
            {/*  <OnboardBubble stage={3} ref={forthItem} offset={-160} offsetX={-90} onClick={handleFinish}> */}
            {/*    <div style={{ display: 'flex', flexDirection: 'column' }}> */}
            {/*      <Text color="white" label={`모르는 것이 있으면,\n여기 있는 '사라'를 눌러주세요!`} size="15px" /> */}
            {/*      <Text */}
            {/*        style={{ */}
            {/*          marginTop: '8px', */}
            {/*        }} */}
            {/*        label={`사야하는 물건을 걱정없이 살 수 있도록\n합당한 이유를 만들어 줄 거에요!`} */}
            {/*        size="12px" */}
            {/*        color="rgb(255,255,255,0.7)" */}
            {/*      /> */}
            {/*      <div */}
            {/*        className="buttons" */}
            {/*        style={{ marginLeft: 'auto', marginTop: '10px', display: 'flex', gap: '8px' }} */}
            {/*      > */}
            {/*        <StyledButton */}
            {/*          type="button" */}
            {/*          onClick={handlePrev} */}
            {/*          bg={Theme.color.saraSecondary} */}
            {/*          color={Theme.color.saraPrimary} */}
            {/*        > */}
            {/*          이전 */}
            {/*        </StyledButton> */}
            {/*        <StyledButton type="button" onClick={handleFinish} bg={Theme.color.saraPrimary} color="white"> */}
            {/*          튜토리얼 완료 */}
            {/*        </StyledButton> */}
            {/*      </div> */}
            {/*    </div> */}
            {/*  </OnboardBubble> */}
            {/* )} */}
          </OnBoardBackgroundStyled>
        )}
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
