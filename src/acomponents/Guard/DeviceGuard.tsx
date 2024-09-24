import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';
import { ComponentType } from 'react';

interface DeviceGuardProps {
  MobileComponent: ComponentType;
  DesktopComponent: ComponentType;
}

const isMobileDevice = () => {
  if (typeof process === 'undefined') {
    throw new Error('[Server method] you are importing a server-only module outside of server');
  }

  const { get } = headers();
  const ua = get('user-agent');

  const device = new UAParser(ua || '').getDevice();

  return device.type === 'mobile';
};

export default function DeviceGuard({ MobileComponent, DesktopComponent }: DeviceGuardProps) {
  const isMobile = isMobileDevice();
  console.log('isMobile', isMobile);
  return <div>{isMobile ? <MobileComponent /> : <DesktopComponent />}</div>;
}
