import React from 'react';
import Image from 'next/image';

const LOGO = {
  sara: '/svgs/logo/logo-sara.svg',
  mara: '/svgs/logo/logo-mara.svg',
} as const;

const SIZE = {
  sm: { width: 134.18, height: 72 },
  md: { width: 156.55, height: 84 },
  lg: { width: 176, height: 96 },
} as const;

interface LogoProps {
  size: 'sm' | 'md' | 'lg';
  type: keyof typeof LOGO;
}

export default function Logo({ size, type }: LogoProps) {
  return (
    <div className="logo">
      <Image src={LOGO[type]} alt="Logo" {...SIZE[size]} />
    </div>
  );
}
