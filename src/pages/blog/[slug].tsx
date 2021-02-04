import styled from '@emotion/styled';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getFiles, getPostBySlug, Post } from '../../lib/mdx';

export interface PostPageProps {
  post: Post;
}

function PostPage({ post }: PostPageProps) {
  return <BlogBlock />;
}

const BlogBlock = styled.div``;

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

  return { props: post };
};

export default PostPage;
