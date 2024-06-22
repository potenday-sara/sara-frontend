import classNames from 'classnames';
import { Simulate } from 'react-dom/test-utils';
import progress = Simulate.progress;
import React, { useEffect } from 'react';
import { right } from '@popperjs/core';
import { cva } from 'class-variance-authority';

interface Props {
  progress?: number;
  transition?: string;
  start: 'left' | 'right' | 'up' | 'down';
  width: string;
  height: string;
  color: 'sara' | 'mara';
  label?: string;
}

const ProgressBarClassNames = cva('flex items-center justify-center bg-');

const waveAnimation = cva('absolute top-0 left-0 h-full w-full', {
  variants: {
    direction: {
      left: 'animate-wave-left',
      right: 'animate-wave-right',
      up: 'animate-wave-up',
      down: 'animate-wave-down',
    },
    color: {
      sara: 'bg-sara-primary',
      mara: 'bg-mara-primary',
    },
  },
});

function ProgressBar({ progress, label, width, height, color, start = 'left', transition = 'width 0.5s' }: Props) {
  return (
    <div
      style={{
        width,
        height,
      }}
      className="flex items-center justify-center bg-black-#eee relative overflow-hidden"
    >
      <div
        className={waveAnimation({ direction: start, color })}
        style={{
          width: `${progress}%`,
          // transition,
          backgroundColor: color,
        }}
      />
      {label}
    </div>
  );
}

export default React.memo(ProgressBar);
