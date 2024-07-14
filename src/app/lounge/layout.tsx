'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import Header from '@/app/lounge/_components/Header';

export default function RootLayout({ children }: { children: any; params: { id: string } }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sara Mara</title>
        <meta name="description" content="Web site created..." />
      </head>
      <body className="max-w-[600px] box-border m-auto overflow-auto min-h-[100vh] flex flex-col">
        <Header />
        <div id="root" className="flex-1 flex flex-col">
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </div>
      </body>
    </html>
  );
}
