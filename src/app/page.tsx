import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';
import dynamic from 'next/dynamic';
import Logo from '@/components/atoms/Logo/Logo';
import DeviceGuard from '@/acomponents/Guard/DeviceGuard';

const isMobileDevice = () => {
  if (typeof process === 'undefined') {
    throw new Error('[Server method] you are importing a server-only module outside of server');
  }

  const { get } = headers();
  const ua = get('user-agent');

  const device = new UAParser(ua || '').getDevice();

  return device.type === 'mobile';
};

const DesktopComponent = dynamic(() => import('@/afeatures/main/desktop/index'));
const MobileComponent = dynamic(() => import('@/afeatures/main/mobile/index'));

export default function page({ searchParams, params }) {
  const isMobile = isMobileDevice();
  return <DeviceGuard MobileComponent={MobileComponent} DesktopComponent={DesktopComponent} />;
}
