'use client';

import React from 'react';
import Lottie from 'lottie-react';
import MaraLoading from '@/app/question/progress/_asset/MaraLoading.json';
import SaraLoading from '@/app/question/progress/_asset/SaraLoading.json';
import { Theme } from '@/feature/question/ThemeContext';

type LoadingLottieProps = {
  theme: Theme;
};

export default function LoadingLottie({ theme }: LoadingLottieProps) {
  return (
    <div className="w-[148px] h-[148px] rounded-[24px] overflow-hidden">
      <Lottie animationData={theme === 'sara' ? SaraLoading : MaraLoading} />
    </div>
  );
}
