import styled from '@emotion/styled';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header, { HeaderProps } from './Header';

export interface LayoutProps {
  children: ReactNode;
  headerProps?: HeaderProps;
}

function Layout({
  children,
  headerProps,
}: LayoutProps) {
  return (
    <>
      <Header {...headerProps} />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default Layout;
