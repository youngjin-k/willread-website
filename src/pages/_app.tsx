import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Global } from '@emotion/react';
import baseCSS from '../styles/baseCSS';
import useAnalytics from '../lib/useAnalytics';

function App({ Component, pageProps }: AppProps) {
  useAnalytics();

  return (
    <>
      <Head>
        <title>willread</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicons/favicon-32x32.png"
        />
        <meta
          name="google-site-verification"
          content="XL757NXEvvQUA0AAHp68OsXqc64VEDqBog_jpe-e0bs"
        />
        <meta
          name="naver-site-verification"
          content="40260a8feea706a1e774fe336c3e479cfeeee363"
        />
      </Head>
      <Global styles={[baseCSS]} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
