import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import containerStyle from '../styles/containerStyle';
import media from '../styles/media';

export interface HeaderProps {
  clearMode?: boolean;
}

function Header({ clearMode }: HeaderProps) {
  const router = useRouter();
  const logoUrl = clearMode
    ? '/assets/logo/logo-white.png'
    : '/assets/logo/logo.png';
  const isActiveBlog = router.asPath.startsWith('/blog');

  return (
    <HeaderBlock clearMode={clearMode}>
      <Container>
        <NextLink
          href="/"
          passHref
        >
          <LogoLink>
            <Image
              src={logoUrl}
              alt="willread"
              width={140}
              height={29}
              loading="eager"
            />
          </LogoLink>
        </NextLink>

        <NextLink
          href="/blog"
          passHref
        >
          <BlogLink
            clearMode={clearMode}
            isActive={isActiveBlog}
          >
            Blog
          </BlogLink>
        </NextLink>
      </Container>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header<{ clearMode: boolean }>`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  ${(props) => (props.clearMode
    ? css`
          margin: 0 0 -80px 0;
        `
    : css`
          background-color: #ffffff;
        `)}

  ${media.lessThan('large')}{
    height: 72px;
    ${(props) => props.clearMode && css`
      margin: 0 0 -72px 0;
    `}
  }
`;

const Container = styled.nav`
  ${containerStyle};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled.a`
  display: block;
  padding: 0;
  margin: 0;
`;

const BlogLink = styled.a<{ clearMode: boolean; isActive: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0 24px;
  height: 48px;
  transition: background-color 0.3s;
  border-radius: 8px;
  font-size: 18px;

  color: #121214;
  ${(props) => props.clearMode
    && css`
      color: #ffffff;
    `};
  ${(props) => props.isActive
    && css`
      color: #543de8;
    `};

  &:hover {
    background-color: rgba(110, 87, 255, 0.1);
  }

  ${media.lessThan('large')}{
    padding: 0 16px;
  }
`;

export default Header;
