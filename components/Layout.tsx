import { ReactNode } from 'react';

import NavBar from './NavBar';

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <div>
        {children}
      </div>
    </>
  );
}
