import styled from '@emotion/styled';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import PostCard from '../../../../components/PostCard';
import { getAllPostsFrontMatter, PostFrontMatter } from '../../../../lib/mdx';
import containerStyle from '../../../../styles/containerStyle';
import media from '../../../../styles/media';

export interface PostListPageProps {
  posts: PostFrontMatter[];
  platform: 'ios' | 'android';
}

function PostListPage({ posts, platform }: PostListPageProps) {
  return (
    <>
      <NextSeo
        title="새로운 소식"
        description="새로운 소식을 전해드려요."
      />
      <BlogBlock>
        <Header>
          <HeaderContentContainer>
            <TitleWrapper>
              <Title>Blog</Title>
              <SubTitle>새로운 소식을 전해드려요.</SubTitle>
            </TitleWrapper>
            <HeaderImageWrapper>
              <Image
                src="/assets/images/blog-header-willread-bird.png"
                layout="fill"
                loading="eager"
                alt="새로운 소식을 전해드려요"
              />
            </HeaderImageWrapper>
          </HeaderContentContainer>
        </Header>

        <PostList>
          {posts.map((frontMatter) => (
            <PostCard
              key={frontMatter.slug}
              frontMatter={frontMatter}
              link={`/webview/blog/${platform}/${frontMatter.slug}`}
            />
          ))}
        </PostList>
      </BlogBlock>
    </>
  );
}

const BlogBlock = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  position: relative;
  background-color: #f4f4fd;
  width: 100%;
  height: 256px;
  display: flex;
  justify-content: center;

  ${media.lessThan('medium')} {
    height: auto;
  }
`;

const HeaderContentContainer = styled.div`
  ${containerStyle};
  position: relative;
  height: 100%;

  ${media.lessThan('medium')} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TitleWrapper = styled.div`
  height: 100%;
  padding: 80px 0 0 80px;

  ${media.lessThan('medium')} {
    padding: 12px 0 0 0;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  color: #121214;
  font-weight: bold;
  margin: 0;
  padding: 12px 0;

  ${media.lessThan('medium')} {
    font-size: 32px;
    text-align: center;
    padding: 8px 0;
  }
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: #81808b;
  font-weight: normal;
  margin: 0;
  padding: 12px 0;

  ${media.lessThan('medium')} {
    text-align: center;
    padding: 8px 0;
  }
`;

const HeaderImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 160px;
  width: ${652 * 0.35}px;
  height: ${643 * 0.35}px;

  ${media.lessThan('medium')} {
    position: relative;
    bottom: auto;
    right: auto;
    width: ${652 * 0.25}px;
    height: ${643 * 0.25}px;
  }
`;

const PostList = styled.section`
  ${containerStyle};
  padding: 20px 16px;
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{
    params: {
      platform: 'ios',
    },
  },
  {
    params: {
      platform: 'android',
    },
  }];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostListPageProps> = async ({ params }) => {
  const platform = params.platform as 'ios' | 'android';
  const posts = getAllPostsFrontMatter();

  return {
    props: {
      posts: posts.filter((post) => post.platform === null || post.platform.includes(platform)),
      platform,
    },
  };
};

export default PostListPage;
