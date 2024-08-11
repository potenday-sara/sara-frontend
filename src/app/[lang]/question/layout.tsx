'use client';

import { ReactNode, Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Theme, ThemeProvider, useSaraMara } from '@/feature/question/ThemeContext';
import QuestionProvider from '@/app/[lang]/question/_context/QuestionContext';
import Shop from '@/app/[lang]/question/_components/Shop';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import Slider from '@/app/[lang]/question/_components/Slider';
import { OnboardProvider } from '@/app/[lang]/question/_context/OnboardContext';
import { Locale } from '@/app/i18n/i18n.config';

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
                <Shop />
              </div>
            </OnboardProvider>
          </QueryClientProvider>
        </QuestionProvider>
      </ThemeProvider>
    </div>
  );
}
