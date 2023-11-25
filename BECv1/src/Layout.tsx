import React from 'react';
import Header from './components/principal/Header';
import Footer from './components/principal/Footer';

interface LayoutInter {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutInter> = ({ children }) => {
  return (
      <body style={{ background: 'linear-gradient(to top, #d9a7c7, #fffcdc)' }}>
        {/* Similar a <Header />, <slot />, <Footer /> en Astro */}
        <header><Header handleNavigation={(page: string) => {
        window.location.href = `/${page}`;
        }} /></header>
        <main>{children}</main>
        <footer><Footer /></footer>
      </body>
  );
};

export default Layout;