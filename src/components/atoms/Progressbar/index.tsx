'use client';

import React, { useEffect } from 'react';
import { cva } from 'class-variance-authority';

interface Props {
  start: 'left' | 'right' | 'up' | 'down';
  width: string;
  height: string;
  color: 'sara' | 'mara';

  reverse?: boolean;
  className?: string;
  label?: string;
  progress?: number;
  transition?: string;
}

const ProgressBarClassNames = cva('flex items-center justify-center bg-');

const waveAnimation = cva('absolute top-0 h-full w-full', {
  variants: {
    direction: {
      left: 'animate-wave-left',
      right: 'animate-wave-right',
      up: 'animate-wave-up',
      down: 'animate-wave-down',
    },
    reverse: {
      true: 'right-0',
      false: 'left-0',
    },
    color: {
      sara: 'bg-sara-primary',
      mara: 'bg-mara-primary',
    },
  },
});

function ProgressBar({
  progress,
  label,
  width,
  height,
  color,
  className,
  reverse = false,
  start = 'left',
  transition = 'width 0.5s',
}: Props) {
  return (
    <div
      style={{
        width,
        height,
      }}
      className={`flex items-center justify-center bg-black-#eee relative overflow-hidden ${className}`}
    >
      <div
        className={`${waveAnimation({ direction: start, color, reverse })} ${className}`}
        style={{
          width: `${progress}%`,
          transition,
          backgroundColor: color,
        }}
      />
      {label}
    </div>
  );
}

export default React.memo(ProgressBar);
