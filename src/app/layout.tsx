import { ReactNode } from 'react';
import '../styles/global.scss';
import { UAParser } from 'ua-parser-js';
import { headers } from 'next/headers';
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context';

const isMobileDevice = () => {
  if (typeof process === 'undefined') {
    throw new Error('[Server method] you are importing a server-only module outside of server');
  }

  const { get } = headers();
  const ua = get('user-agent');

  const device = new UAParser(ua || '').getDevice();

  return device.type === 'mobile';
};

export default function RootLayout({ children }: { children: ReactNode }) {
  try {
    const isMobile = isMobileDevice();

    console.log(isMobile);
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error;
    }
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sara Mara</title>
        <meta name="description" content="Web site created..." />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
