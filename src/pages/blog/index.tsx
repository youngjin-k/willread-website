import styled from '@emotion/styled';
import { GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import { getAllPostsFrontMatter, PostFrontMatter } from '../../lib/mdx';

export interface PostListProps {
  posts: PostFrontMatter[];
}

function PostList({ posts }: PostListProps) {
  console.log(posts);
  return (
    <Layout>
      <BlogBlock />
    </Layout>
  );
}

const BlogBlock = styled.div`
  
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
