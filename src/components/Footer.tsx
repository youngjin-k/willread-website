import styled from '@emotion/styled';
import NextLink from 'next/link';

function Footer() {
  return (
    <FooterBlock>
      <Container>
        <NextLink
          href="/policy/privacy"
          passHref
        >
          <PrivacyLink>개인정보 처리방침</PrivacyLink>
        </NextLink>
        <Copyright>
          Copyright 2021. willread team. All rights reserved.
        </Copyright>
      </Container>
    </FooterBlock>
  );
}

const FooterBlock = styled.footer`
  background-color: #383841;
  padding: 40px 0;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PrivacyLink = styled.a`
  color: #D8D8E8;
  text-decoration: none;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  color: #D8D8E8;
  font-size: 13px;
  font-weight: lighter;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin: 24px 0 0 0;
  padding: 12px 20px 0 20px;
`;

export default Footer;
