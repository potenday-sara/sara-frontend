'use client';

import React, { forwardRef, Ref, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import useInterval from '@/app/_hooks/useInterval';
import { useSaraMara } from '@/feature/question/ThemeContext';

const CarouselItem = forwardRef<HTMLDivElement, { children: React.ReactNode }>((props, ref) => {
  return (
    <div ref={ref} className="w-[200px] bg-sara-primary carousel-item shrink-0">
      {props.children}
    </div>
  );
});

CarouselItem.displayName = 'CarouselItem';

type Item = {
  key: number;
  content: React.ReactNode;
};

const Item: Item[] = [
  { key: 1, content: <div>가</div> },
  { key: 2, content: <div>나</div> },
  { key: 3, content: <div>다</div> },
  { key: 4, content: <div>라</div> },
  { key: 5, content: <div>마</div> },
];

export default function template({ children }) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [carouselItem, setCarouselItem] = useState(Item);

  const handleSetCarouselItem = () => {
    setCarouselItem((prev) => {
      if (prev.length === 0) return [] as Item[];
      const first = prev.shift() as Item;
      console.log('first', first);

      return [...prev, first];
    });
  };

  useInterval(handleSetCarouselItem, 5000, playing);

  const { theme } = useSaraMara();

  const QuestionTemplateClassName = cva('', {
    variants: {
      theme: {
        sara: 'bg-sara-secondary',
        mara: 'bg-mara-secondary',
      },
    },
  });

  return (
    <div className={QuestionTemplateClassName({ theme })}>
      {/* <div className="carousel w-[100vw]" ref={carouselRef}> */}
      {/*  <div className="flex whitespace-nowrap flex-nowrap"> */}
      {/*    {carouselItem.map((item) => ( */}
      {/*      <CarouselItem key={item.key}>{item.content}</CarouselItem> */}
      {/*    ))} */}
      {/*  </div> */}
      {/* </div> */}

      <div>{children}</div>
    </div>
  );
}
