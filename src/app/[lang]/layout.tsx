import '../../styles/global.scss';
import Script from 'next/script';
import { ReactNode } from 'react';
import Footer from '@/components/organisms/Footer/Footer';
import { i18n, type Locale } from '@/app/i18n/i18n.config';

type SARA = 'sara';
type MARA = 'mara';

declare global {
  interface Window {
    Kakao: any;
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }: { children: ReactNode; params: { lang: Locale } }) {
  return (
    <html lang={params.lang}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sara Mara</title>
        <meta name="description" content="Web site created..." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G3W9N0F90R" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3538415329975370"
          crossOrigin="anonymous"
        />
        <title>살까 말까 할 땐, "Sara"</title>
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"
          integrity="sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01"
          crossOrigin="anonymous"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G3W9N0F90R" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3538415329975370"
          crossOrigin="anonymous"
        />

        {/* <script> */}
        {/*  window.dataLayer = window.dataLayer || []; */}
        {/*  function gtag() { */}
        {/*  dataLayer.push(arguments); */}
        {/* } */}
        {/*  gtag('js', new Date()); */}

        {/*  gtag('config', 'G-G3W9N0F90R'); */}
        {/* </script> */}
      </head>
      <body className="max-w-[600px] box-border m-auto overflow-auto">
        {children}
        <div className="footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}