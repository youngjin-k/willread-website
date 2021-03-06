import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

import Layout from '../../components/Layout';
import PostTemplate from '../../components/PostTemplate';
import { getFiles, getPostBySlug, Post } from '../../lib/mdx';

export interface PostPageProps {
  post: Post;
}

function PostPage({ post }: PostPageProps) {
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
      <PostTemplate post={post} />
    </Layout>
  );
}

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
