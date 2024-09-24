'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function PageComponent() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.push(`${pathname}/main`);
  }, [pathname, router]);
}
