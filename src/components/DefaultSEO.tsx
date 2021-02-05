import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

function DefaultSEO() {
  const router = useRouter();
  return (
    <NextSeo
      title="willread"
      description="글을 읽는 가장 가벼운 습관, 윌리드"
      openGraph={{
        type: 'website',
        images: [
          {
            url: 'https://www.willread.app/assets/images/og.png',
          },
        ],
        title: 'willread',
        description: '글을 읽는 가장 가벼운 습관, 윌리드',
        url: `https://www.willread.app${router.asPath.split('?')[0]}`,
        locale: 'ko_KR',
        site_name: 'willread',
      }}
      canonical={`https://www.willread.app${router.asPath.split('?')[0]}`}
    />
  );
}

export default DefaultSEO;
