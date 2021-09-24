import * as React from 'react';
import Header from "./Header"
import Footer from "./Footer"

type LayoutProps = { children: React.ReactNode; };

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
          <Header />
          <main className="container mx-auto mb-6 mt-8 max-w-3xl">
            <section className="mx-auto max-w-3xl">{children}</section>
          </main>
          <Footer />
        </>
      )
    };

export default Layout;