import React from 'react';
import Header from './components/principal/Header';
import Footer from './components/principal/Footer';

interface LayoutInter {
  children: React.ReactNode;
  handleNavigation: (page: string) => void;
  currentPage: string;
  background: string;
}

const Layout: React.FC<LayoutInter> = ({ children, handleNavigation, currentPage, background }) => {
  return (
    <div>
      <header>
        <Header handleNavigation={handleNavigation} />
      </header>
      <main style={{ background }}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;