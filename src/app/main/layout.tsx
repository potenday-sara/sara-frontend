'use client';

import { ReactNode } from 'react';
import SaraMaraProvider from '@/feature/main/hooks/useSaraMara';

export default function layout({ children }: { children: ReactNode; params: { id: string } }) {
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
          <SaraMaraProvider>{children}</SaraMaraProvider>
        </div>
      </body>
    </html>
  );
}
