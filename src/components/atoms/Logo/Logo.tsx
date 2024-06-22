import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const LOGO_COMPONENT = {
  sara: dynamic(() => import('@/asset/logo/sara.svg')) as React.ComponentType<any>,
  mara: dynamic(() => import('@/asset/logo/mara.svg')) as React.ComponentType<any>,
};

interface LogoProps {
  logo: keyof typeof LOGO_COMPONENT;
}

export default function Logo({ logo }: LogoProps) {
  const RenderLogo = LOGO_COMPONENT[logo];
  return (
    <div>
      <RenderLogo logo={logo} />
    </div>
  );
}
