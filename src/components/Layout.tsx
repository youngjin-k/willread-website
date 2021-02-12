import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header, { HeaderProps } from './Header';

export interface LayoutProps {
  children: ReactNode;
  headerProps?: HeaderProps;
}

function Layout({ children, headerProps }: LayoutProps) {
  const router = useRouter();
  const { webview } = router.query;

  if (webview) {
    return <>{children}</>;
  }

  return (
    <>
      <Header {...headerProps} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
