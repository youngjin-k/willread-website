import styled from '@emotion/styled';
import Image from 'next/image';
import NextLink from 'next/link';
import { PostFrontMatter } from '../lib/mdx';
import media from '../styles/media';

export interface PostCardProps {
  frontMatter: PostFrontMatter;
  link?: string;
}

function PostCard({ frontMatter, link }: PostCardProps) {
  const postLink = link || `blog/${frontMatter.slug}`;

  return (
    <PostCardBlock>
      <NextLink href={postLink}>
        <Link href={postLink}>
          <Container>
            <ThumbnailContainer>
              <ThumbnailWrapper>
                <Image
                  src={frontMatter.image}
                  layout="fill"
                  objectFit="cover"
                  alt={frontMatter.title}
                />
              </ThumbnailWrapper>
            </ThumbnailContainer>
            <Content>
              <Tag>
                {frontMatter.tag}
                {frontMatter.platform && <PlatformTag>{`${frontMatter.platform}`}</PlatformTag>}
              </Tag>
              <Title>{frontMatter.title}</Title>
              <Excerpt>{frontMatter.excerpt}</Excerpt>
            </Content>
          </Container>
        </Link>
      </NextLink>
    </PostCardBlock>
  );
}

const PostCardBlock = styled.article`
  padding: 12px 0;
  
  ${media.lessThan('medium')} {
    padding: 12px 0 24px 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  height: 212px;

  &:hover {
    h2 {
      text-decoration: underline;
    }
  }
  
  ${media.lessThan('medium')} {
    flex-direction: column;
    height: auto;
  }
`;

const ThumbnailContainer = styled.div`
  width: 376px;
  flex: 0 0 auto;

  ${media.lessThan('medium')} {
    width: 100%;
  }
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  padding-bottom: 56.2%;
  border-radius: 16px;
  overflow: hidden;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 12px 0 0 24px;

  ${media.lessThan('medium')} {
    padding: 24px 8px 0 8px;
  }
`;

const Tag = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #543de8;
`;

const Title = styled.h2`
  margin: 8px 0 24px 0;
  font-size: 24px;
  font-weight: bold;
  color: #121214;
  
  ${media.lessThan('medium')} {
    margin: 8px 0 12px 0;
  }
`;

const Excerpt = styled.p`
  font-size: 16px;
  line-height: 1.41;
  color: #81808b;
  margin: 0;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;


  ${media.lessThan('medium')} {
    -webkit-line-clamp: 3;
  }
`;

const PlatformTag = styled.span`
  display: inline-block;
  background-color: rgba(110, 87, 255, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
  margin: 0 0 0 8px;
`;

export default PostCard;
