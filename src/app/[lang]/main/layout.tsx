'use client';

import { ReactNode } from 'react';
import SaraMaraProvider from '@/feature/main/hooks/useSaraMara';

export default function layout({ children }: { children: ReactNode; params: { id: string } }) {
  return (
    <div>
      <SaraMaraProvider>{children}</SaraMaraProvider>
    </div>
  );
}
