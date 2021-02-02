import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Global } from '@emotion/react';
import baseCSS from '../styles/baseCSS';

function App({ Component, pageProps }: AppProps) {
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
      </Head>
      <Global styles={[baseCSS]} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
