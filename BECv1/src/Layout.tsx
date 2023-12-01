import React from 'react';
import Header from './components/principal/Header';
import Footer from './components/principal/Footer';

interface LayoutInter {
  children: React.ReactNode;
  handleNavigation: (page: string) => void;
  currentPage: string;
}

const Layout: React.FC<LayoutInter> = ({ children, handleNavigation }) => {
  return (
    <div style={{ background: 'linear-gradient(to top, #d9a7c7, #fffcdc)' }}>
      <header>
        <Header handleNavigation={handleNavigation} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;