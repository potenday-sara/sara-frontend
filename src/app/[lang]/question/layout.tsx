'use client';

import React, { ReactNode, Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Theme, ThemeProvider, useSaraMara } from '@/feature/question/ThemeContext';
import QuestionProvider from '@/app/[lang]/question/_context/QuestionContext';
import Shop from '@/app/[lang]/question/_components/Shop';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import Slider from '@/app/[lang]/question/_components/Slider';
import { OnboardProvider } from '@/app/[lang]/question/_context/OnboardContext';
import { Locale } from '@/app/i18n/i18n.config';
import KakaoAdFit from '@/components/organisms/KaKaoAdfit.jsx';

export default function layout({ children }: { children: ReactNode; params: { theme: Theme } }) {
  const searchParams = useSearchParams();
  const theme = (searchParams?.get('theme') as Theme) || 'sara';
  const [queryClient] = useState(() => new QueryClient());

  return (
    <div className={getCssByTheme(theme, ['bg-sara-secondary', 'bg-mara-secondary'], 'px-4 relative')}>
      <ThemeProvider>
        <QuestionProvider>
          <QueryClientProvider client={queryClient}>
            <OnboardProvider theme={theme}>
              <div className="flex flex-col gap-5">
                <Slider theme={theme} />
                {children}
                <div className="w-full flex justify-center items-center">
                  <KakaoAdFit disabled={false} height={50} width={320} unit="DAN-gK39xKYxlT87s2kI" />
                </div>
                <Shop />
                <div className="w-full flex justify-center items-center">
                  <KakaoAdFit disabled={false} height={250} width={300} unit="DAN-5gXB0fawrx8Xhb5C" />
                </div>
              </div>
            </OnboardProvider>
          </QueryClientProvider>
        </QuestionProvider>
      </ThemeProvider>
    </div>
  );
}
