'use client';

import { ReactNode, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Theme, ThemeProvider, useSaraMara } from '@/feature/question/ThemeContext';
import QuestionProvider from '@/app/question/_context/QuestionContext';
import ReactQueryProviders from '@/feature/question/useReactQuery';
import Shop from '@/app/question/_components/Shop';
import getCssByTheme from '@/app/_utils/getCssByTheme';

export default function layout({ children }: { children: ReactNode; params: { theme: Theme } }) {
  const searchParams = useSearchParams();
  const theme = (searchParams?.get('theme') as Theme) || 'sara';

  return (
    <div className={getCssByTheme(theme, ['bg-sara-secondary', 'bg-mara-secondary'], '')}>
      {/* <ReactQueryProviders> */}
      <ThemeProvider>
        <QuestionProvider>
          <div className="flex flex-col gap-5">
            {children}
            <Shop />
          </div>
        </QuestionProvider>
      </ThemeProvider>
      {/* </ReactQueryProviders> */}
    </div>
  );
}
