import styled from '@emotion/styled';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { getAllPostsFrontMatter, PostFrontMatter } from '../../lib/mdx';
import containerStyle from '../../styles/containerStyle';
import media from '../../styles/media';

export interface PostListProps {
  posts: PostFrontMatter[];
}

function PostList({ posts }: PostListProps) {
  console.log(posts);
  return (
    <Layout>
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
              />
            </HeaderImageWrapper>
          </HeaderContentContainer>
        </Header>
      </BlogBlock>
    </Layout>
  );
}

const BlogBlock = styled.main``;

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

const SubTitle = styled.h2`
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

export const getStaticProps: GetStaticProps<PostListProps> = async () => {
  const posts = getAllPostsFrontMatter();

  return {
    props: {
      posts,
    },
  };
};

export default PostList;
