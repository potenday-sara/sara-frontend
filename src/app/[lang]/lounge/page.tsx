'use client';

import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/app/[lang]/lounge/_components/template'), {
  ssr: false,
});

export default Page;
