'use client';

import { Ref, useCallback, useEffect, useRef, useState } from 'react';
import useInterval from '@/hooks/useInterval';

export default function template({ children }) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // 클로저
  let scrollAmount = 0;

  const scroll = () => {
    if (!carouselRef.current) return;
    scrollAmount += 30;

    carouselRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const { intervalId } = useInterval(scroll, 20, playing);

  return (
    <div>
      <div className="carousel overflow-x-scroll hide-scrollbar" ref={carouselRef}>
        <div className="flex whitespace-nowrap">
          <div>
            <div className="w-[200px] bg-sara-primary">이런</div>
          </div>
          <div>
            <div className="w-[200px] bg-sara-primary">아나</div>
          </div>
          <div>
            <div className="w-[200px] bg-sara-primary">가나</div>
          </div>
          <div>
            <div className="w-[200px] bg-sara-primary">메롱</div>
          </div>
          <div>
            <div className="w-[200px] bg-sara-primary">야호</div>
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
