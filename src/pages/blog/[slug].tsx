import styled from '@emotion/styled';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { getFiles, getPostBySlug, Post } from '../../lib/mdx';
import media from '../../styles/media';

export interface PostPageProps {
  post: Post;
}

function PostPage({ post }: PostPageProps) {
  const router = useRouter();
  const { webview } = router.query;

  return (
    <Layout>
      <NextSeo
        title={`${post.frontMatter.title} - willread`}
        description={post.frontMatter.excerpt}
        openGraph={{
          images: [
            {
              url: post.frontMatter.image,
            },
          ],
          title: `${post.frontMatter.title} - willread`,
          description: post.frontMatter.excerpt,
        }}
      />
      <BlogBlock>
        <Container>
          <Header>
            <Title>{post.frontMatter.title}</Title>
            <PublishedAt>{post.frontMatter.date}</PublishedAt>
          </Header>
          <ThumbnailContainer>
            <ThumbnailWrapper>
              <Image
                src={post.frontMatter.image}
                layout="fill"
                objectFit="cover"
                alt={post.frontMatter.title}
              />
            </ThumbnailWrapper>
          </ThumbnailContainer>
          <ReactMarkdown
            className="markdown-body"
            source={post.content}
          />
          {!webview && (
          <Footer>
            <NextLink
              href="/blog"
              passHref
            >
              <BackLink>목록으로</BackLink>
            </NextLink>
          </Footer>
          )}
        </Container>
      </BlogBlock>
    </Layout>
  );
}

const BlogBlock = styled.article`
  padding: 0 24px 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 768px;
`;

const Header = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  margin: 0 0 24px 0;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  padding-bottom: 56.2%;
  border-radius: 16px;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 46px;
  line-height: 56px;
  margin: 0 0 12px 0;
  color: #121214;

  ${media.lessThan('medium')} {
    font-size: 32px;
    line-height: 40px;
  }
`;

const PublishedAt = styled.p`
  font-size: 14px;
  color: #121214;
`;

const Footer = styled.footer`
  margin: 40px 0 0 0;
`;

const BackLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0 24px;
  height: 48px;
  transition: background-color 0.3s;
  border-radius: 8px;
  font-size: 18px;

  color: #543de8;

  &:hover {
    background-color: rgba(110, 87, 255, 0.1);
  }

  ${media.lessThan('large')}{
    padding: 0 16px;
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getFiles();

  return {
    paths: files.map((file) => ({
      params: {
        slug: file.replace(/\.md/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug as string);

  return {
    props: { post },
  };
};

export default PostPage;
