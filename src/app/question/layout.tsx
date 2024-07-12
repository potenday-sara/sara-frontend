'use client';

import { ReactNode, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Theme, ThemeProvider } from '@/feature/question/ThemeContext';
import QuestionProvider from '@/feature/question/QuestionContext';
import ReactQueryProviders from '@/feature/question/useReactQuery';

export default function layout({ children }: { children: ReactNode; params: { theme: Theme } }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sara Mara</title>
        <meta name="description" content="Web site created..." />
      </head>
      <body className="max-w-[600px] box-border m-auto overflow-auto min-h-[100vh]">
        <div id="root">
          {/* <ReactQueryProviders> */}
          <ThemeProvider>
            <QuestionProvider>{children}</QuestionProvider>
          </ThemeProvider>
          {/* </ReactQueryProviders> */}
        </div>
      </body>
    </html>
  );
}
