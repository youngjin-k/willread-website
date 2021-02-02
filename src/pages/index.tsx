import styled from '@emotion/styled';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>willread</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
      </Head>

      <Main>
        willread
      </Main>
    </div>
  );
}

const Main = styled.main`
  background-color: red;
`;
