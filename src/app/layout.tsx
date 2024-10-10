import '../styles/global.scss';
import Script from 'next/script';
import { ReactNode } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from '@/components/organisms/Footer/Footer';
import { i18n, type Locale } from '@/app/i18n/i18n.config';
import { getDictionary } from '@/getDictionary';

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

export default async function RootLayout({ children, params }: { children: ReactNode; params: { lang: Locale } }) {
  const dictionary = await getDictionary();
  return (
    <html lang={params.lang}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G3W9N0F90R" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3538415329975370"
          crossOrigin="anonymous"
        />
        <title>{dictionary.title[params.lang]}</title>
        <meta name="descrition" content={dictionary.description[params.lang]} />
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"
          integrity="sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01"
          crossOrigin="anonymous"
        />
      </head>

      <body className="max-w-[600px] box-border m-auto overflow-auto">
        {children}
        <div className="footer">
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-G3W9N0F90R" />
    </html>
  );
}
