'use client';

import { ReactNode, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Theme, ThemeProvider, useSaraMara } from '@/feature/question/ThemeContext';
import QuestionProvider from '@/app/question/_context/QuestionContext';
import ReactQueryProviders from '@/feature/question/useReactQuery';
import Shop from '@/app/question/_components/Shop';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import Slider from '@/app/question/_components/Slider';

export default function layout({ children }: { children: ReactNode; params: { theme: Theme } }) {
  const searchParams = useSearchParams();
  const theme = (searchParams?.get('theme') as Theme) || 'sara';
  const [queryClient] = useState(() => new QueryClient());

  return (
    <div className={getCssByTheme(theme, ['bg-sara-secondary', 'bg-mara-secondary'], 'px-4')}>
      <ThemeProvider>
        <QuestionProvider>
          <QueryClientProvider client={queryClient}>
            <div className="flex flex-col gap-5">
              <Slider theme={theme} />
              {children}
              <Shop />
            </div>
          </QueryClientProvider>
        </QuestionProvider>
      </ThemeProvider>
    </div>
  );
}
