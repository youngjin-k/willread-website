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
      {children}
      <Footer />
    </>
  );
}

export default Layout;
