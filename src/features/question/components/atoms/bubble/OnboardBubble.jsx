import React, { useState, useEffect, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as XButton } from '../../../assets/XButton.svg';
import { ReactComponent as Dot } from '../../../assets/dot.svg';
import { Theme } from '../../../../../Styles';

const Balloon = styled.div`
  position: absolute;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  font-size: 16px;
  line-height: 1.5;
  width: 312px;
  z-index: 999;
  transform: translate(0, -100%);
  background-color: #424242;
`;

const Arrow = styled.div`
  position: absolute;
  width: 16px;
  height: 30px;
  z-index: -1;
  margin-left: 10px;
  background-color: #424242;
  transform: rotate(45deg);
`;

const OnboardBubble = forwardRef(({ stage, children, onClick, offset = 0, offsetX = 0 }, ref) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (ref?.current) {
      const { top, bottom, left } = ref.current.getBoundingClientRect();
      console.log('top', top);
      const isBottomValue = window.innerHeight - bottom > top; // 뷰포트 기준으로 하단에 있는지 여부
      setIsBottom(isBottomValue);
      console.log('isBottom', isBottomValue);
      setPosition({
        top: (isBottomValue ? bottom : top) - offset,
        left: left + offsetX,
      });
    }
  }, [ref.current, windowWidth]);

  return (
    <div>
      {ref?.current && (
        <Balloon style={{ top: position.top, left: position.left }}>
          <XButton
            onClick={onClick}
            style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}
            fill="red"
          />
          <div>{children}</div>

          <div
            className="dots"
            style={{
              gap: '5px',
              position: 'absolute',
              bottom: '10px',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {[0, 1, 2, 3].map((value) => (
              <div style={{ color: value <= stage ? Theme.color.saraPrimary : 'white' }}>
                <Dot key={`${value}_dot`} />
              </div>
            ))}
          </div>
          {!isBottom && <Arrow style={{ bottom: '-10px', left: '10px', transform: 'rotate(45deg)' }} />}
          {isBottom && <Arrow style={{ top: '-10px', left: '10px', transform: 'rotate(-135deg)' }} />}
        </Balloon>
      )}
    </div>
  );
});

export default OnboardBubble;
