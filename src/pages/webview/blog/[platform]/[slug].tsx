import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

import PostTemplate from '../../../../components/PostTemplate';
import { getFiles, getPostBySlug, Post } from '../../../../lib/mdx';

export interface PostPageProps {
  post: Post;
}

function PostPage({ post }: PostPageProps) {
  return (
    <>
      <NextSeo
        title={`${post.frontMatter.title}`}
        description={post.frontMatter.excerpt}
        openGraph={{
          images: [
            {
              url: post.frontMatter.image,
            },
          ],
          title: `${post.frontMatter.title}`,
          description: post.frontMatter.excerpt,
        }}
      />
      <PostTemplate
        post={post}
        webview
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    ...getFiles('ios').map((file) => ({
      params: {
        platform: 'ios',
        slug: file.replace(/\.md/, ''),
      },
    })),
    ...getFiles('android').map((file) => ({
      params: {
        platform: 'android',
        slug: file.replace(/\.md/, ''),
      },
    })),
  ];

  return {
    paths,
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
