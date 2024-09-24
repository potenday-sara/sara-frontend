'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import Header from '@/app/[lang]/lounge/_components/Header';
import KakaoAdFit from '@/components/organisms/KaKaoAdfit.jsx';

export default function RootLayout({ children }: { children: any; params: { id: string } }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <div>
      <Header />
      <div className="root">
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </div>
    </div>
  );
}
