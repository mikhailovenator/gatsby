import * as React from 'react';
import Header from "./Header"
import Footer from "./Footer"

type LayoutProps = { children: React.ReactNode; };

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
          <Header />
          <main className="px-4 py-3 max-w-2xl mx-auto lg:max-w-6xl">
            {children}
          </main>
          <Footer />
        </>
      )
    };

export default Layout;